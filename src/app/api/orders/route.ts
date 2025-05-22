import { orderServices } from "@/lib/services/orderService";
import { customerServices } from "@/lib/services/customerService";
import OrderData from "@/interfaces/order";

interface Order {
  name: string;
  id: number;
  orderNumber: string;
  dueDate: string;
  price: number;
  paymentNumber: number;
}

const ALLOWED_DOCUMENT_TYPES = new Set(["CRT", "CRC", "LINK"]);
const DEFAULT_PRICE = 0;
const DEFAULT_ID = "";
const DEFAULT_ORDER_NUMBER = "";

export async function GET() {
  try {
    const getOrders = await orderServices.getOrders();
    
    if (!getOrders?.pedido_venda_produto) {
      return new Response(
        JSON.stringify({ error: "Nenhum pedido encontrado" }),
        { status: 404, 
          headers: { "Content-Type": "application/json" } 
        }
      );
    }

    const orders = getOrders.pedido_venda_produto as OrderData[];
    
    if (!Array.isArray(orders)) {
      return new Response(
        JSON.stringify({ error: "Formato de pedidos inválido" }),
        { status: 500, 
          headers: { "Content-Type": "application/json" } 
        }
      );
    }

    const orderPromises = orders.map(async (order: OrderData) => {
      const { cabecalho, infoCadastro, total_pedido, lista_parcelas } = order;
      
      const filteredInstallments = lista_parcelas.parcela.filter(installment => 
        ALLOWED_DOCUMENT_TYPES.has(installment.tipo_documento)
      );
      
      const customerName = filteredInstallments.length > 0
        ? await customerServices.getCustomer(cabecalho?.codigo_cliente)
        : "";

      return {
        name: customerName,
        id: cabecalho?.codigo_pedido ?? DEFAULT_ID,
        orderNumber: cabecalho?.numero_pedido ?? DEFAULT_ORDER_NUMBER,
        dueDate: infoCadastro?.dAlt ?? "",
        price: total_pedido?.valor_total_pedido ?? DEFAULT_PRICE,
        paymentNumber: filteredInstallments.length,
      };
    });

    const allOrders = await Promise.all(orderPromises);

    const validOrders = allOrders.filter(order => order.paymentNumber > 0);

    return new Response(JSON.stringify(validOrders), {
      status: 200,
      headers: { 
        "Content-Type": "application/json",
        "Cache-Control": "max-age=3600"
      },
    });
  } catch (error) {
    console.error("Erro ao buscar os pedidos:", error);
    return new Response(
      JSON.stringify({ 
        error: "Erro ao buscar os pedidos"
      }),
      { status: 500, 
        headers: { "Content-Type": "application/json" } 
      }
    );
  }
}

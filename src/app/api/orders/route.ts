import { orderServices } from "@/lib/services/orderService";
import { customerServices } from "@/lib/services/customerService";

interface Order {
  name: string;
  id: number;
  orderNumber: string;
  dueDate: Date;
  price: string;
  paymentNumber: number;
}

export async function GET() {
  const orders: Order[] = [];

  try {
    const getOrders = await orderServices.getOrders();
    const pedidos = getOrders?.pedido_venda_produto;

    if (Array.isArray(pedidos)) {
      pedidos.forEach(async (order) => {
        const { cabecalho, infoCadastro, total_pedido, lista_parcelas } = order;
        const codeCustomer = await customerServices.getCustomer(
          cabecalho?.codigo_cliente
        );

        orders.push({
          name: codeCustomer ?? "",
          id: cabecalho?.codigo_pedido ?? "",
          orderNumber: cabecalho?.numero_pedido ?? "",
          dueDate: infoCadastro?.dAlt ?? "",
          price: total_pedido?.valor_total_pedido ?? "0",
          paymentNumber: Array.isArray(lista_parcelas?.parcela)
            ? lista_parcelas.parcela.length
            : 0,
        });
      });
    }
  } catch (error) {
    console.error("Erro ao buscar os pedidos:", error);
    return new Response(
      JSON.stringify({ error: "Erro ao buscar os pedidos" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  return new Response(JSON.stringify(orders), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

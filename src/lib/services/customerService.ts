import { api } from "./api";

export const customerServices = {
  async getCustomer(id_customer: number) {
    try {
      const response = await api.post("/geral/clientes/", {
        call: "ConsultarCliente",
        param: [
          {
            codigo_cliente_omie: id_customer,
          },
        ],
      });
      return response.data?.nome_fantasia;
    } catch (err) {
      console.log("Customer services error", err);
    }
  },
};

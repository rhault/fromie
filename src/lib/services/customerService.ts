import { api } from "./api";
import { AxiosError } from 'axios';

export const customerServices = {
  async getCustomer(id_customer: number, retries: number = 3): Promise<string | undefined> {
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
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.status === 429 && retries > 0) {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          console.log("retrying", 3 - retries + 1);
          return this.getCustomer(id_customer, retries - 1);
        } else {
          console.error("Customer services error", error);
        }
      } else {
        console.error("Unexpected error", error);
      }
      return undefined;
    }
  },
};

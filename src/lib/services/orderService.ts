import { api } from "./api";

const param = {
  pagina: 1,
  registros_por_pagina: 500,
  apenas_importado_api: "N",
  etapa: 20,
};

export const orderServices = {
  async getOrders() {
    try {
      const response = await api.post("/produtos/pedido/", {
        call: "ListarPedidos",
        param: [param],
      });
      
      const data = await response.data;
      return data;
    } catch (err) {
      console.log("Order services error", err);
    }
  },
};

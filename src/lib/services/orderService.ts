import { api } from "./api";

const param = {
  pagina: 1,
  registros_por_pagina: 500,
  apenas_importado_api: "N",
  etapa: 80,
};

export const orderServices = {
  async getOrders() {
    try {
      const response = await api.post("/produtos/pedido/", {
        call: "ListarPedidos",
        param: [param],
      });
      return response.data;
    } catch (err) {
      console.log("getorder error", err);
    }
  },
};

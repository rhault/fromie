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
      console.log(response);
      const { data } = await response.data.json();
      return data;
    } catch (err) {
      console.log("getorder error", err);
    }
  },
};

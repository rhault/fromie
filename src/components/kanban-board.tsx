"use client";
import { KanbanColumn } from "./kanban-column";
import axios from "axios";
import { useState } from "react";

const kanbanData = {
  todo: [
    {
      id: "1",
      order: "1258",
      name: "Pedro Ferreira",
      price: "R$ 45,00",
      paymentNumber: "2x",
      dueDate: "2023-12-15",
      stage: "integrated",
    },
  ],
  inProgress: [
    {
      id: "2",
      order: "1587",
      name: "Pedro Ferreira",
      price: "R$ 45,00",
      status: "Pago",
      paymentNumber: "2x",
      dueDate: "2023-12-15",
      stage: "created",
    },
    {
      id: "4",
      order: "1893",
      name: "Pedro Ferreira",
      price: "R$ 45,00",
      status: "Aguardando",
      paymentNumber: "2x",
      dueDate: "2023-12-15",
      stage: "created",
    },
  ],
  done: [
    {
      id: "1",
      order: "1836",
      name: "Pedro Ferreira",
      price: "R$ 45,00",
      status: "Pago",
      paymentNumber: "2x",
      dueDate: "2023-12-15",
      completedDate: "2023-12-15",
      stage: "completed",
    },
    {
      id: "2",
      order: "1216",
      name: "Pedro Ferreira",
      price: "R$ 45,00",
      status: "Negado",
      paymentNumber: "2x",
      dueDate: "2023-12-15",
      completedDate: "2023-12-15",
      stage: "completed",
    },
  ],
};

export function KanbanBoard() {
  const [orders, setOrders] = useState([]);
  //const [loading, setLoading] = useState(true);
  //const [error, setError] = useState(null);

  const loadOrders = async () => {
    try {
      //setLoading(true);
      const response = await axios.get("/api/orders");
      console.log(response);
      setOrders(response.data);
    } catch (err) {
      console.error("Erro ao carregar pedidos:", err);
      //setError(err);
    } finally {
      //setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      <KanbanColumn
        title="A Fazer"
        count={orders.length}
        cards={orders}
        colorClass="bg-gray-100"
        loadOrders={loadOrders}
      />
      <KanbanColumn
        title="Em Progresso"
        count={kanbanData.inProgress.length}
        cards={kanbanData.inProgress}
        colorClass="bg-blue-50"
      />
      <KanbanColumn
        title="Concluído"
        count={kanbanData.done.length}
        cards={kanbanData.done}
        colorClass="bg-green-50"
      />
    </div>
  );
}

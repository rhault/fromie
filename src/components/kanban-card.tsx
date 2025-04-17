import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Clock, User } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export interface KanbanCardData {
  id: string;
  orderNumber: string;
  name: string;
  price: string;
  status?: string;
  paymentNumber: string;
  dueDate: string;
  completedDate?: string;
  stage?: string;
}

interface KanbanCardProps {
  card: KanbanCardData;
}

export function KanbanCard({ card }: KanbanCardProps) {
  const statusColors = {
    Negado: "bg-red-100 text-red-800",
    Aguardando: "bg-yellow-100 text-yellow-800",
    Pago: "bg-green-100 text-green-800",
  };

  const statusColor = statusColors[card.status as keyof typeof statusColors];

  return (
    <Card className="cursor-pointer transition-all hover:shadow-md py-2 gap-3">
      <CardHeader className="p-3 pb-0">
        <div className="flex items-start justify-between">
          <span className="w-full text-sm text-gray-500">
            Pedido N°{card.orderNumber}
          </span>
          {card.stage !== "integrated" ? (
            <Badge className={statusColor}>{card.status}</Badge>
          ) : (
            ""
          )}
        </div>
      </CardHeader>
      <CardContent className="p-3 pt-2">
        <div className="flex w-full">
          <User className="h-5 w-5" />
          <h4 className="font-medium bg-white">{card.name}</h4>
        </div>
        <p className="text-sm text-gray-500 font-bold">
          R$ {card.price}
          <span className="pl-2">{card.paymentNumber}x</span>
        </p>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-2 p-3 pt-0">
        <div className="flex w-full items-center gap-2 text-xs text-gray-500">
          {card.completedDate ? (
            <>
              <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
              <span>Concluído em {formatDate(card.completedDate)}</span>
            </>
          ) : (
            <>
              <Clock className="h-3.5 w-3.5" />
              <span>Inclusão: {formatDate(card.dueDate)}</span>
            </>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("pt-BR");
}

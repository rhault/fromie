//import { useAppContext } from "@/context/AppContext";
import { RotateCcw } from "lucide-react";
import { KanbanCard, KanbanCardData } from "@/components/kanban-card";
import { Button } from "@/components/ui/button";

interface KanbanColumnProps {
  title: string;
  count: number;
  cards: KanbanCardData[];
  colorClass: string;
  loadOrders?: () => Promise<void>;
}

export function KanbanColumn({
  title,
  count,
  cards,
  colorClass,
  loadOrders,
}: KanbanColumnProps) {
  return (
    <div className={`rounded-lg ${colorClass} p-4`}>
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="font-medium text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500">{count} itens</p>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={loadOrders}
        >
          <RotateCcw className="h-4 w-4" />
          <span className="sr-only">Adicionar cartão</span>
        </Button>
      </div>
      <div className="space-y-3">
        {cards.map((card) => (
          <KanbanCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

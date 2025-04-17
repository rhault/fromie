import { Navbar } from "@/components/navbar"
import { KanbanBoard } from "@/components/kanban-board"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Navbar/>
      <main className="flex-1 p-4 md:p-6">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-6 text-2xl font-bold text-gray-900">Gestor de Link</h1>
          <KanbanBoard />
        </div>
      </main>
    </div>
  );
}

import Link from "next/link"
import { Bell, Menu, RotateCcw, Search, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b bg-white">
      <div className="flex h-16 items-center px-4 md:px-6">
        <div className="flex items-center gap-2 md:gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64">
              <nav className="flex flex-col gap-4 pt-4">
                <Link
                  href="#"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-100"
                >
                  Link
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-100"
                >
                  Financeiro
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-100"
                >
                  Cadastros
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-100"
                >
                  Produtos
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="#" className="flex items-center gap-2 font-bold text-gray-900">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-blue-600 text-white">F</div>
            <span className="hidden md:inline-block">Fromie</span>
          </Link>
        </div>
        <nav className="mx-6 hidden md:flex md:items-center md:gap-4 lg:gap-6">
          <Link href="#" className="text-sm font-medium text-gray-900 transition-colors hover:text-blue-600">
            Link
          </Link>
          <Link href="#" className="text-sm font-medium text-gray-500 transition-colors hover:text-blue-600">
            Financeiro
          </Link>
          <Link href="#" className="text-sm font-medium text-gray-500 transition-colors hover:text-blue-600">
            Cadastros
          </Link>
          <Link href="#" className="text-sm font-medium text-gray-500 transition-colors hover:text-blue-600">
            Produtos
          </Link>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <div className="relative hidden md:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input type="search" placeholder="Pesquisar..." className="w-64 rounded-md pl-8 md:w-80" />
          </div>
          <Button variant="outline" size="icon" className="rounded-full">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notificações</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
                <span className="sr-only">Perfil</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Perfil</DropdownMenuItem>
              <DropdownMenuItem>Configurações</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Sair</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button size="sm" className="hidden md:flex">
            <RotateCcw className="mr-2 h-4 w-4" />
            Atualizar
          </Button>
        </div>
      </div>
    </header>
  )
}

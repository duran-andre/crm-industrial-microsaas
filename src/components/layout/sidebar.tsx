'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  LayoutDashboard, 
  Wrench, 
  Users, 
  UserCheck, 
  BarChart3, 
  Settings,
  LogOut,
  Building2
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const navigation = [
  {
    name: 'Dashboard',
    href: '/',
    icon: LayoutDashboard,
  },
  {
    name: 'Ordens de Serviço',
    href: '/ordens-servico',
    icon: Wrench,
  },
  {
    name: 'Clientes',
    href: '/clientes',
    icon: Building2,
  },
  {
    name: 'Técnicos',
    href: '/tecnicos',
    icon: UserCheck,
  },
  {
    name: 'Usuários',
    href: '/usuarios',
    icon: Users,
  },
  {
    name: 'Relatórios',
    href: '/relatorios',
    icon: BarChart3,
  },
  {
    name: 'Configurações',
    href: '/configuracoes',
    icon: Settings,
  },
]

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()

  return (
    <div className={cn('flex h-full w-64 flex-col bg-card border-r', className)}>
      {/* Logo */}
      <div className="flex h-16 items-center border-b px-6">
        <div className="flex items-center gap-2">
          <Wrench className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-lg font-bold">CRM Industrial</h1>
            <p className="text-xs text-muted-foreground">Manutenção</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.name}
            </Link>
          )
        })}
      </nav>

      {/* User section */}
      <div className="border-t p-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-sm font-medium text-primary">AD</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">André Duran</p>
            <p className="text-xs text-muted-foreground truncate">Administrador</p>
          </div>
        </div>
        <Button variant="ghost" size="sm" className="w-full justify-start gap-2">
          <LogOut className="h-4 w-4" />
          Sair
        </Button>
      </div>
    </div>
  )
}
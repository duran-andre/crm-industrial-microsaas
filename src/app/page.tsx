import { MainLayout } from '@/components/layout/main-layout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Wrench, 
  CheckCircle, 
  Users, 
  Building2, 
  Plus,
  Calendar,
  Clock,
  AlertTriangle
} from 'lucide-react'
import { formatDate } from '@/lib/utils'

// Mock data for KPIs
const kpis = [
  {
    title: 'OS Abertas',
    value: '23',
    icon: Wrench,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
  },
  {
    title: 'OS Finalizadas',
    value: '156',
    icon: CheckCircle,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  {
    title: 'Técnicos Ativos',
    value: '12',
    icon: Users,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    title: 'Clientes',
    value: '45',
    icon: Building2,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
]

// Mock data for recent service orders
const recentOrders = [
  {
    id: 'OS-001',
    client: 'Metalúrgica São Paulo',
    equipment: 'Torno CNC Haas VF-2',
    technician: 'João Silva',
    status: 'Em Andamento',
    priority: 'Alta',
    createdAt: new Date('2024-01-15'),
    scheduledDate: new Date('2024-01-16'),
  },
  {
    id: 'OS-002',
    client: 'Indústria ABC',
    equipment: 'Compressor Atlas Copco',
    technician: 'Maria Santos',
    status: 'Aguardando Peças',
    priority: 'Média',
    createdAt: new Date('2024-01-14'),
    scheduledDate: new Date('2024-01-17'),
  },
  {
    id: 'OS-003',
    client: 'Fábrica XYZ',
    equipment: 'Esteira Transportadora',
    technician: 'Pedro Costa',
    status: 'Finalizada',
    priority: 'Baixa',
    createdAt: new Date('2024-01-13'),
    scheduledDate: new Date('2024-01-15'),
  },
  {
    id: 'OS-004',
    client: 'Siderúrgica Norte',
    equipment: 'Forno Elétrico',
    technician: 'Ana Oliveira',
    status: 'Agendada',
    priority: 'Alta',
    createdAt: new Date('2024-01-12'),
    scheduledDate: new Date('2024-01-18'),
  },
]

function getStatusColor(status: string) {
  switch (status) {
    case 'Em Andamento':
      return 'bg-blue-100 text-blue-800'
    case 'Aguardando Peças':
      return 'bg-yellow-100 text-yellow-800'
    case 'Finalizada':
      return 'bg-green-100 text-green-800'
    case 'Agendada':
      return 'bg-gray-100 text-gray-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

function getPriorityColor(priority: string) {
  switch (priority) {
    case 'Alta':
      return 'bg-red-100 text-red-800'
    case 'Média':
      return 'bg-yellow-100 text-yellow-800'
    case 'Baixa':
      return 'bg-green-100 text-green-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

export default function Dashboard() {
  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">
              Visão geral das operações de manutenção
            </p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Nova OS
          </Button>
        </div>

        {/* KPIs */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {kpis.map((kpi) => (
            <Card key={kpi.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {kpi.title}
                </CardTitle>
                <div className={`p-2 rounded-lg ${kpi.bgColor}`}>
                  <kpi.icon className={`h-4 w-4 ${kpi.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{kpi.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Service Orders */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wrench className="h-5 w-5" />
              Ordens de Serviço Recentes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div
                  key={order.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{order.id}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(order.priority)}`}>
                        {order.priority}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <strong>{order.client}</strong> - {order.equipment}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {order.technician}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        Criado: {formatDate(order.createdAt)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        Agendado: {formatDate(order.scheduledDate)}
                      </span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Ver Detalhes
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  )
}
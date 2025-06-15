# 🏭 CRM Industrial - Micro SaaS

> Sistema completo de CRM para manutenção industrial com dashboard web e PWA mobile para técnicos

## 🚀 Visão Geral

O CRM Industrial é uma solução SaaS especializada para empresas de manutenção industrial, oferecendo:

- **Dashboard Web** para gestores com KPIs em tempo real
- **PWA Mobile** para técnicos em campo
- **Gestão completa de OS** (Ordens de Serviço)
- **Controle de clientes e equipamentos**
- **Relatórios e analytics**

## 🛠️ Stack Tecnológica

- **Frontend**: Next.js 15 + React 19 + TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI + Lucide Icons
- **Forms**: React Hook Form + Zod
- **Charts**: Recharts
- **Backend**: Supabase (planejado)
- **Database**: PostgreSQL via Prisma (planejado)
- **Payments**: Stripe (planejado)
- **Deploy**: Vercel

## 🏃‍♂️ Como Executar

### Pré-requisitos
- Node.js 18+
- npm/yarn/pnpm

### Instalação

```bash
# Clone o repositório
git clone https://github.com/duran-andre/crm-industrial-microsaas.git
cd crm-industrial-microsaas

# Instale as dependências
npm install

# Execute o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) para ver a aplicação.

## 📱 Funcionalidades Implementadas

### ✅ Fase 1 - Frontend Base (Concluída)
- [x] Setup inicial do projeto
- [x] Sistema de design com componentes UI
- [x] Layout responsivo com sidebar e header
- [x] Dashboard principal com KPIs mockados
- [x] Lista de OS recentes com status coloridos
- [x] Sistema de navegação

### 🚧 Próximas Fases
- [ ] Páginas detalhadas de OS
- [ ] Formulários de criação/edição
- [ ] Sistema de autenticação
- [ ] Integração com backend (Supabase)
- [ ] PWA para técnicos
- [ ] Sistema de pagamentos

## 🎯 Funcionalidades Principais

### Dashboard Gerencial
- KPIs em tempo real (OS abertas, finalizadas, técnicos ativos)
- Lista de OS recentes com filtros
- Gráficos e métricas de performance
- Gestão de clientes e equipamentos

### PWA Mobile (Planejado)
- Interface otimizada para técnicos
- Funciona offline
- Captura de fotos e assinaturas
- Geolocalização
- Sincronização automática

## 🏗️ Arquitetura

```
src/
├── app/                 # App Router (Next.js 15)
├── components/
│   ├── ui/             # Componentes base reutilizáveis
│   └── layout/         # Componentes de layout
├── lib/                # Utilitários e configurações
└── types/              # Definições TypeScript (planejado)
```

## 🎨 Design System

O projeto utiliza um design system baseado em:
- **Cores**: Sistema de cores semânticas com suporte a dark mode
- **Tipografia**: Fonte Geist otimizada
- **Componentes**: Baseados em Radix UI para acessibilidade
- **Ícones**: Lucide React para consistência

## 📊 Modelo de Negócio

- **Freemium**: Plano gratuito limitado
- **Pro**: R$ 97/mês por empresa
- **Enterprise**: R$ 297/mês com funcionalidades avançadas
- **Add-ons**: Integrações específicas por setor

## 🚀 Deploy

```bash
# Build de produção
npm run build

# Iniciar servidor de produção
npm start
```

O deploy é automatizado via Vercel conectado ao GitHub.

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuição

Contribuições são bem-vindas! Por favor, leia as diretrizes de contribuição antes de submeter PRs.

---

**Desenvolvido com ❤️ para revolucionar a manutenção industrial**
Sistema de Colaboradores Flugo
http://localhost:3000/

Uma aplicação React com TypeScript que replica as 3 telas do sistema de colaboradores da Flugo, incluindo listagem de colaboradores e fluxo de cadastro em múltiplas etapas.
🚀 Tecnologias Utilizadas

React 18 - Framework JavaScript
TypeScript - Tipagem estática
Tailwind CSS - Framework de CSS utilitário
React Scripts - Configuração e build

📁 Estrutura do Projeto
src/
├── components/          # Componentes React
│   ├── Header.tsx      # Cabeçalho da aplicação
│   ├── Sidebar.tsx     # Menu lateral
│   ├── ColaboradoresList.tsx  # Listagem de colaboradores
│   └── CadastrarColaborador.tsx  # Formulário de cadastro
├── data/               # Dados mockados
│   └── colaboradores.ts
├── types/              # Definições de tipos TypeScript
│   └── index.ts
├── App.tsx             # Componente principal
├── index.tsx           # Ponto de entrada
└── index.css           # Estilos globais
🎨 Funcionalidades
1 Listagem de Colaboradores

Exibe tabela com colaboradores cadastrados
Colunas: Nome, Email, Departamento, Status
Avatars personalizados para cada colaborador
Status visual (Ativo/Inativo)
Botão para adicionar novo colaborador

2 Cadastro de Colaborador - Etapa 1 (Informações Básicas)

Formulário com nome e email
Toggle "Ativar ao criar"
Barra de progresso (50%)
Validação de campos obrigatórios

3 Cadastro de Colaborador - Etapa 2 (Informações Profissionais)

Dropdown de seleção de departamento
Barra de progresso (100%)
Navegação entre etapas
Finalização do cadastro

🎯 Componentes Principais
ColaboradoresList

Renderiza a tabela de colaboradores
Gerencia ação de "Novo Colaborador"
Layout responsivo com hover effects

CadastrarColaborador

Fluxo em múltiplas etapas
Gerenciamento de estado do formulário
Validação por etapa
Navegação controlada entre steps

Header

Logo da Flugo
Avatar do usuário
Layout limpo e profissional

Sidebar

Navegação principal
Estado ativo/inativo
Ícones intuitivos

🛠️ Instalação e Execução

Instalar dependências:

bashnpm install

Instalar Tailwind CSS:

bashnpm install -D tailwindcss postcss autoprefixer

Executar em desenvolvimento:

bashnpm start

Build para produção:

bashnpm run build
🎨 Personalização do Tailwind
O projeto inclui cores customizadas no tailwind.config.js:

flugo-green: #22c55e
flugo-green-dark: #16a34a

📱 Responsividade

Layout flexível que se adapta a diferentes tamanhos de tela
Grid responsivo na tabela de colaboradores
Sidebar colapsível em dispositivos móveis

🔄 Fluxo de Dados

Estado Global: Gerenciado no App.tsx
Props Drilling: Dados passados via props entre componentes
Callbacks: Comunicação filho → pai via funções callback
Estado Local: Formulários mantêm estado interno

📋 Tipos TypeScript
Principais interfaces definidas:

Colaborador: Dados completos do colaborador
NovoColaborador: Dados do formulário de cadastro
Departamento: Union type dos departamentos disponíveis

🎯 Próximos Passos
Para evolução do projeto, considere:

Context API para gerenciamento de estado global
React Router para navegação
API real para persistência de dados
Testes unitários com Jest/Testing Library
Validação de formulários com Yup ou Zod
Loading states e error handling para melhorar a experiência do usuário

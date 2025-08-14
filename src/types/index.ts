export interface Colaborador {
  id: string;
  nome: string;
  email: string;
  departamento: string;
  status: 'Ativo' | 'Inativo';
  avatar?: string;
}

export interface NovoColaborador {
  nome: string;
  email: string;
  departamento: string;
  ativarAoCriar: boolean;
}

export type Departamento = 
  | 'Design' 
  | 'TI' 
  | 'Marketing' 
  | 'Produto' 
  | 'Vendas' 
  | 'Recursos Humanos' 
  | 'Financeiro';
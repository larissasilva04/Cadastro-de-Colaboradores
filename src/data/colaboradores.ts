import { Colaborador, Departamento } from '../types';

export const colaboradores: Colaborador[] = [
  {
    id: '1',
    nome: 'Fernanda Torres',
    email: 'fernandatorres@flugo.com',
    departamento: 'Design',
    status: 'Ativo',
    avatar: '👩‍💻'
  },
  {
    id: '2',
    nome: 'Joana D\'Arc',
    email: 'joanadarc@flugo.com',
    departamento: 'TI',
    status: 'Ativo',
    avatar: '👩‍💼'
  },
  {
    id: '3',
    nome: 'Mari Froes',
    email: 'marifroes@flugo.com',
    departamento: 'Marketing',
    status: 'Ativo',
    avatar: '👩‍🎨'
  },
  {
    id: '4',
    nome: 'Clara Costa',
    email: 'claracosta@flugo.com',
    departamento: 'Produto',
    status: 'Inativo',
    avatar: '👩‍🔬'
  }
];

export const departamentos: Departamento[] = [
  'Design',
  'TI',
  'Marketing',
  'Produto',
  'Vendas',
  'Recursos Humanos',
  'Financeiro'
];
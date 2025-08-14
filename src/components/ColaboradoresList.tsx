import React from 'react';
import { Colaborador } from '../types';
import South from '@mui/icons-material/South';


interface ColaboradoresListProps {
  colaboradores: Colaborador[];
  onNewColaborador: () => void;
}

const ColaboradoresList: React.FC<ColaboradoresListProps> = ({ colaboradores, onNewColaborador }) => {
  return (
    <div className="bg-white min-h-screen p-4 md:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 md:mb-8">
        <h1 className="text-2xl font-semibold text-gray-800">Colaboradores</h1>
        <button
          onClick={onNewColaborador}
          className="bg-flugo-green hover:bg-flugo-green-dark text-white px-3 py-3 rounded-lg font-semibold transition-colors"
        >
          Novo Colaborador
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="grid grid-cols-4 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-200 text-sm font-medium text-gray-600">
          <div className="flex items-center">
          Nome
          <South className="ml-1" style={{ fontSize: '15px', fill: 'currentColor' }} />
          </div>
          <div className="flex items-center">
            Email
            <South className="ml-1" style={{ fontSize: '15px', fill: 'currentColor' }} />
          </div>
          <div className="flex items-center">
            Departamento
            <South className="ml-1" style={{ fontSize: '15px', fill: 'currentColor' }} />
          </div>
          <div className="flex items-center justify-end">
            Status
            <South className="ml-1" style={{ fontSize: '15px', fill: 'currentColor' }} />
          </div>
        </div>
          

        <div className="divide-y divide-gray-200">
          {colaboradores.map((colaborador) => (
            <div key={colaborador.id} className="hover:bg-gray-50">
              <div className="hidden lg:grid lg:grid-cols-4 lg:gap-4 px-6 py-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-lg">{colaborador.avatar}</span>
                </div>
                <span className="text-normal font-medium text-gray-700">{colaborador.nome}</span>
              </div>
              <div className="flex items-center">
                <span className="text-normal text-gray-700">{colaborador.email}</span>
              </div>
              <div className="flex items-center">
                <span className="text-normal text-gray-700">{colaborador.departamento}</span>
              </div>
              <div className="flex items-center justify-end">
                <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                  colaborador.status === 'Ativo'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {colaborador.status}
                </span>
              </div>
            </div>
            {/* Mobile - layout simplificado */}
              <div className="lg:hidden px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 flex-1 min-w-0">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-lg">{colaborador.avatar}</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-normal font-medium text-gray-700">{colaborador.nome}</div>
                      <div className="text-sm text-gray-500 truncate">{colaborador.email}</div>
                    </div>
                  </div>
                  <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ml-3 ${
                    colaborador.status === 'Ativo'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {colaborador.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColaboradoresList;
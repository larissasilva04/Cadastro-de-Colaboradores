import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ColaboradoresList from './components/ColaboradoresList';
import CadastrarColaborador from './components/CadastrarColaborador';
import { Colaborador, NovoColaborador } from './types';
import { colaboradores as initialColaboradores } from './data/colaboradores';

type PageType = 'colaboradores' | 'cadastrar';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('colaboradores');
  const [colaboradores, setColaboradores] = useState<Colaborador[]>(initialColaboradores);

  const handleNewColaborador = () => {
    setCurrentPage('cadastrar');
  };

  const handleBackToList = () => {
    setCurrentPage('colaboradores');
  };

  const handleColaboradorCreated = (novoColaborador: NovoColaborador) => {
    const newColaborador: Colaborador = {
      id: (colaboradores.length + 1).toString(),
      nome: novoColaborador.nome,
      email: novoColaborador.email,
      departamento: novoColaborador.departamento,
      status: novoColaborador.ativarAoCriar ? 'Ativo' : 'Inativo',
      avatar: '👤'
    };

    setColaboradores(prev => [...prev, newColaborador]);
    setCurrentPage('colaboradores');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="flex">
        <Sidebar 
          currentPage={currentPage} 
          onPageChange={setCurrentPage} 
        />
        
        <main className="flex-1">
          {currentPage === 'colaboradores' && (
            <ColaboradoresList
              colaboradores={colaboradores}
              onNewColaborador={handleNewColaborador}
            />
          )}
          
          {currentPage === 'cadastrar' && (
            <CadastrarColaborador
              onBack={handleBackToList}
              onNext={handleColaboradorCreated}
            />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
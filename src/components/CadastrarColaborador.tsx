import React, { useState } from 'react';
import { NovoColaborador } from '../types';
import { departamentos } from '../data/colaboradores';
import CheckSharpIcon from '@mui/icons-material/CheckSharp';

interface CadastrarColaboradorProps {
  onBack: () => void;
  onNext: (colaborador: NovoColaborador) => void;
}

const CadastrarColaborador: React.FC<CadastrarColaboradorProps> = ({ onBack, onNext }) => {
  const [formData, setFormData] = useState<NovoColaborador>({
    nome: 'João da Silva',
    email: '',
    departamento: '',
    ativarAoCriar: true
  });

  const [currentStep, setCurrentStep] = useState<'basicas' | 'profissionais'>('basicas');

  const handleInputChange = (field: keyof NovoColaborador, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep === 'basicas') {
      setCurrentStep('profissionais');
    } else {
      onNext(formData);
    }
  };

  const isBasicasValid = formData.nome.trim() !== '';
  const isProfissionaisValid = formData.departamento !== '';

  return (
    <div className="hidden-screen flex flex-col bg-white h-screen">
      {/* Header com breadcrumb e progress bar */}
      <div className="px-6 pt-4 pb-3 max-w-4xl mx-auto w-full">
        <div className="mb-2">
          <nav className="flex items-center space-x-3 text-sm mb-4">
            <span 
              className={`${
                currentStep === 'basicas' 
                  ? 'text-gray-800 font-medium' 
                  : 'text-gray-500'
              }`}
            >
              Colaboradores
            </span>
  
            <span className="text-gray-500">•</span>
  
            <span 
              className={`${
                currentStep === 'profissionais' 
                  ? 'text-gray-800 font-medium' 
                  : 'text-gray-500'
              }`}
            >
              Cadastrar Colaborador
            </span>
          </nav>
        </div>
        
        {/* Progress Bar com Percentual */}
        <div className="w-full mb-3">
          <div className="flex items-center">
            <div className="flex-1 bg-green-100 rounded-full h-1 relative">
              <div
                className="bg-flugo-green h-1 rounded-full transition-all duration-300"
                style={{ width: currentStep === 'basicas' ? '0%' : '50%' }}
              ></div>
            </div>
            <span className="text-sm font-normal text-gray-500 ml-2">
              {currentStep === 'basicas' ? '0%' : '50%'}
            </span>
          </div>
        </div>
      </div>

      {/* Conteúdo principal - flex-1 para ocupar espaço disponível */}
      <div className="flex-1 overflow-auto">
        {currentStep === 'basicas' && (
          <div className="max-w-4xl mx-auto w-full flex px-1">
            {/* Sidebar com Steps */}
            <div className="w-60 pr-8 pt-1">
              <div className="space-y-10 relative">
                {/* Linha conectora */}
                <div className="absolute left-3 top-7 w-px h-8 bg-gray-300"></div>
                
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-flugo-green rounded-full flex items-center justify-center text-white font-semibold relative z-10">
                    1
                  </div>
                  <span className="text-base font-medium text-gray-700">Infos Básicas</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-gray-500 font-semibold relative z-10">
                    2
                  </div>
                  <span className="text-base font-medium text-gray-400">Infos Profissionais</span>
                </div>
              </div>  
            </div>
            
            {/* Conteúdo Principal */}
            <div className="flex-1 pr-10">
              <h2 className="text-2xl font-semibold text-gray-600 mb-4">Informações Básicas</h2>
              
              <div className="space-y-4">
                <div>
                  <div className="relative">
                    <input
                      type="text"
                      value={formData.nome}
                      onChange={(e) => handleInputChange('nome', e.target.value)}
                      className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-flugo-green focus:border-flugo-green peer"
                      placeholder="Nome completo"
                    />
                    <label className="absolute -top-2 left-3 bg-white px-1 text-xs font-medium text-gray-700 peer-focus:text-flugo-green transition-colors">
                      Título
                    </label>
                  </div>
                </div>

                <div>
                  <div className="relative">
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-flugo-green focus:border-flugo-green peer"
                      placeholder="e.g. john@gmail.com"
                    />
                    <label className="absolute -top-2 left-3 bg-white px-1 text-xs font-medium text-gray-700 peer-focus:text-flugo-green transition-colors">
                      E-mail
                    </label>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <button
                    type="button"
                    onClick={() => handleInputChange('ativarAoCriar', !formData.ativarAoCriar)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-flugo-green focus:ring-offset-2 ${
                      formData.ativarAoCriar ? 'bg-flugo-green' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        formData.ativarAoCriar ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                  <span className="text-sm font-normal text-gray-800">Ativar ao criar</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentStep === 'profissionais' && (
          <div className="max-w-4xl mx-auto w-full flex px-1">
            {/* Sidebar com Steps */}
            <div className="w-60 pr-8 pt-1">
              <div className="space-y-10 relative">
                {/* Linha conectora */}
                <div className="absolute left-3 top-8 w-px h-6 bg-gray-300"></div>
                
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-flugo-green rounded-full flex items-center justify-center text-white font-semibold relative z-10">
                    <CheckSharpIcon style={{ fontSize: '16px' }} />
                  </div>
                  <span className="text-base font-medium text-gray-800">Infos Básicas</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-flugo-green rounded-full flex items-center justify-center text-white font-semibold relative z-10">
                    2
                  </div>
                  <span className="text-base font-medium text-gray-800">Infos Profissionais</span>
                </div>
              </div>
            </div>

            {/* Conteúdo Principal */}
            <div className="flex-1 overflow-auto">
              <h1 className="text-2xl font-semibold text-gray-600 mb-4">Informações Profissionais</h1>
              
              <div className="relative w-full">
                <select
                  value={formData.departamento}
                  onChange={(e) => handleInputChange('departamento', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-flugo-green focus:border-flugo-green appearance-none bg-white text-gray-600"
                >
                  <option value="">Selecione um departamento</option>
                  {departamentos.map((dept) => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
                {/* Ícone de dropdown */}
                <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer com botões - fixo no bottom */}
      <div className= "fixed bottom-0 left-12 right-0"> 
        <div className="max-w-4xl mx-auto w-full flex justify-between items-center px-6 py-12">
          <div className="w-60 pr-6 flex items-start">
            <button
              onClick={currentStep === 'basicas' ? onBack : () => setCurrentStep('basicas')}
              className="text-gray-400 hover:text-gray-500 font-medium transition-colors"
            >
              Voltar
            </button>
          </div>
          {/* Área do conteúdo principal */}
          <div className="flex-1 pr-1 flex items-end justify-end">
            <button
              onClick={handleNext}
              disabled={currentStep === 'basicas' ? !isBasicasValid : !isProfissionaisValid}
              className="bg-flugo-green hover:bg-flugo-green-dark disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg font-medium mr-4 transition-colors"
            >
              {currentStep === 'basicas' ? 'Próximo' : 'Concluir'}
            </button>
          </div>
        </div>
      </div>
    </div> 
  );
};

export default CadastrarColaborador;
import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

type PageType = 'colaboradores' | 'cadastrar';

interface SidebarProps {
  currentPage: PageType;
  onPageChange: (page: PageType) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentPage, onPageChange }) => {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen">
      <nav className="pt-6">
        <div className="px-3">
          <button
            onClick={() => onPageChange('cadastrar')}
            className={`w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md transition-colors mt-1 ${
              currentPage === 'cadastrar'
                ? 'bg-gray-100 text-gray-700'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
            }`}
          >
            <div className="flex items-center">
              <div className="w-5 h-5 bg-gray-400 rounded flex items-center justify-center mr-3">
                <PersonIcon className="text-black" style={{ fontSize: '16px' }} />
              </div>
              Colaboradores
            </div>
            <ChevronRightIcon style={{ fontSize: '16px' }} />
          </button>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
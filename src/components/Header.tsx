import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-flugo-green rounded-lg flex items-center justify-center">
            <img
              src="/logo.jpeg"
              alt="Logo"
              className="w-8 h-8 object-cover rounded-lg"
            />
          </div>
          <span className="text-xl font-Poppins-semibold text-gray-900">Flugo</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <span className="text-lg">🧑‍💼</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
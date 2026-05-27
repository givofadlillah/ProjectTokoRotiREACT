import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FE] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8">
        <div className="flex flex-col items-center mb-8">
           <div className="w-12 h-12 bg-[#7B1C1C] rounded-xl flex items-center justify-center text-white font-bold text-xl mb-3">
            R
          </div>
          <h1 className="text-[#7B1C1C] font-bold text-2xl tracking-tight">ROTTE 2</h1>
        </div>
        
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
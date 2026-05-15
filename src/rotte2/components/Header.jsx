import React from 'react';
import { Search, Bell } from 'lucide-react';

const Header = () => {
  return (
    <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8">
      {/* Search Bar */}
      <div className="flex items-center bg-[#F8F9FE] px-4 py-2 rounded-xl w-80">
        <Search className="text-[#4C35DE] opacity-70" size={18} />
        <input 
          type="text" 
          placeholder="Search" 
          className="bg-transparent border-none outline-none ml-3 text-sm text-gray-600 placeholder-[#9AA2B1] w-full"
        />
      </div>

      {/* Profile / Notifications */}
      <div className="flex items-center gap-6">
        <button className="text-[#9AA2B1] hover:text-[#4C35DE] relative">
          <Bell size={20} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="w-9 h-9 rounded-full bg-gray-200 overflow-hidden border-2 border-white shadow-sm">
          <img src="https://i.pravatar.cc/150?img=33" alt="Profile" className="w-full h-full object-cover"/>
        </div>
      </div>
    </header>
  );
};

export default Header;
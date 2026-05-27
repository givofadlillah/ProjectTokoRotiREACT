import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  ShoppingCart, 
  Users, 
  Gift, 
  Tag, 
  BarChart3, 
  Settings 
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', path: '/rotte2', icon: <LayoutDashboard size={20} /> },
    { name: 'Orders', path: '/rotte2/orders', icon: <ShoppingCart size={20} /> },
    { name: 'Customers', path: '/rotte2/customers', icon: <Users size={20} /> },
    { name: 'Loyalty', path: '/rotte2/loyalty', icon: <Gift size={20} /> },
    { name: 'Promos', path: '/rotte2/promos', icon: <Tag size={20} /> },
    { name: 'Reports', path: '/rotte2/reports', icon: <BarChart3 size={20} /> },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-100 flex flex-col">
      {/* Logo Area */}
      <div className="h-20 flex items-center px-8 border-b border-gray-50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#7B1C1C] rounded-lg flex items-center justify-center text-white font-bold">
            R
          </div>
          <div>
            <h1 className="text-[#7B1C1C] font-bold text-xl leading-none tracking-tight">ROTTE 2</h1>
            <span className="text-[10px] text-[#7B1C1C] font-semibold tracking-wider">DASHBOARD</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                // Tambahkan 'end' jika path-nya persis '/rotte2' agar tidak menyala di sub-route lain
                end={item.path === '/rotte2'}
                className={({ isActive }) =>
                  `flex items-center gap-4 px-8 py-3 text-sm font-medium transition-colors relative ${
                    isActive
                      ? 'text-[#7B1C1C]' 
                      : 'text-[#9AA2B1] hover:text-[#7B1C1C] hover:bg-red-50'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {/* Indikator garis merah di kanan */}
                    {isActive && (
                      <div className="absolute right-0 top-0 bottom-0 w-1 bg-[#7B1C1C] rounded-l-full"></div>
                    )}
                    {item.icon}
                    {item.name}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Settings at Bottom */}
      <div className="p-6">
        <a href="#settings" className="flex items-center gap-4 px-2 text-sm font-medium text-[#9AA2B1] hover:text-[#7B1C1C]">
          <Settings size={20} />
          Settings
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
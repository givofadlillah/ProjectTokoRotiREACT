import React from 'react';
import { BarChart3, ShoppingCart, Users, CheckCircle2, Gift } from 'lucide-react';
import customers from '../../rotte/data/customers';
import orders from '../../rotte/data/orders';

const Dashboard = () => {
  const totalOrders = orders.length;
  const totalCompleted = orders.filter(o => o.status === "Completed").length;
  const totalRevenue = orders.reduce((sum, o) => sum + o.totalPrice, 0);
  const totalCustomers = customers.length;
  
  const recentOrders = [...orders].reverse().slice(0, 3);

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      
      {/* TOP STAT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Card 1: Maroon */}
        <div className="bg-[#7B1C1C] rounded-2xl p-5 text-white flex justify-between items-center shadow-lg shadow-red-200">
          <div>
            <p className="text-red-200 text-sm mb-1">Total Orders</p>
            <h2 className="text-2xl font-bold">{totalOrders}</h2>
          </div>
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white">
            <ShoppingCart size={24} />
          </div>
        </div>

        {/* Card 2: White */}
        <div className="bg-white rounded-2xl p-5 flex justify-between items-center shadow-sm border border-red-50">
          <div>
            <p className="text-gray-400 text-sm mb-1">Completed</p>
            <h2 className="text-2xl font-bold text-gray-800">{totalCompleted}</h2>
          </div>
          <div className="flex items-end gap-1 h-10">
            <div className="w-1.5 h-6 bg-red-700 rounded-full"></div>
            <div className="w-1.5 h-10 bg-red-700 rounded-full"></div>
            <div className="w-1.5 h-4 bg-red-200 rounded-full"></div>
            <div className="w-1.5 h-8 bg-red-700 rounded-full"></div>
            <div className="w-1.5 h-3 bg-red-200 rounded-full"></div>
          </div>
        </div>

        {/* Card 3: White */}
        <div className="bg-white rounded-2xl p-5 flex items-center gap-4 shadow-sm border border-red-50">
          <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-[#7B1C1C]">
            <BarChart3 size={24} />
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-1">Total Revenue</p>
            <h2 className="text-2xl font-bold text-gray-800">Rp {(totalRevenue / 1000000).toFixed(1)}jt</h2>
          </div>
        </div>

        {/* Card 4: Maroon */}
         <div className="bg-[#7B1C1C] rounded-2xl p-5 text-white flex justify-between items-center shadow-lg shadow-red-200">
          <div>
            <p className="text-red-200 text-sm mb-1">Total Customers</p>
            <h2 className="text-2xl font-bold">{totalCustomers}</h2>
          </div>
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white">
            <Users size={24} />
          </div>
        </div>
      </div>

      {/* MIDDLE SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Balance Chart Area (Spans 2 columns) */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 shadow-sm border border-red-50 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-gray-800">Revenue Trend</h3>
                <span className="flex items-center text-xs text-green-500 font-medium bg-green-50 px-2 py-1 rounded-full">
                  <CheckCircle2 size={12} className="mr-1" /> On track
                </span>
              </div>
              <select className="text-sm text-gray-400 bg-transparent outline-none cursor-pointer">
                <option>Monthly</option>
                <option>Weekly</option>
              </select>
            </div>

            <div className="flex gap-10 mb-6">
              <div>
                <p className="text-gray-400 text-sm">Growth</p>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold">15%</span>
                  <span className="text-xs text-green-500 bg-green-50 px-2 py-0.5 rounded text-medium">+2.45%</span>
                </div>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Total Revenue</p>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold">Rp {totalRevenue.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="h-40 w-full relative overflow-hidden rounded-xl bg-gradient-to-b from-red-50/50 to-transparent flex items-end mt-4">
             <svg viewBox="0 0 400 100" className="w-full h-full stroke-[#7B1C1C] fill-[#7B1C1C]/10 stroke-2 preserve-3d">
                <path d="M0 100 L0 50 Q 20 40, 40 70 T 80 50 T 120 80 T 160 30 T 200 60 T 240 20 T 280 50 T 320 40 T 360 60 T 400 30 L400 100 Z" />
            </svg>
          </div>
        </div>

        {/* Transfers List -> Recent Orders */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-red-50">
          <h3 className="text-lg font-bold text-gray-800 mb-6">Recent Orders</h3>
          <div className="space-y-5">
            {recentOrders.map((order, i) => (
              <div key={order.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-[#7B1C1C] font-bold">
                    {order.customerName.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-800">{order.customerName}</p>
                    <p className="text-xs text-gray-400">{order.orderDate}</p>
                  </div>
                </div>
                <span className={`text-sm font-bold px-2 py-1 rounded ${order.status === 'Completed' ? 'text-green-500 bg-green-50' : order.status === 'Pending' ? 'text-orange-500 bg-orange-50' : 'text-red-500 bg-red-50'}`}>
                  Rp {(order.totalPrice / 1000).toFixed(0)}k
                </span>
              </div>
            ))}
          </div>
          <div className="mt-6 text-right">
            <button className="text-[#7B1C1C] text-sm font-bold flex items-center justify-end w-full hover:underline">
              View all orders &rarr;
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Loyalty Stats */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-red-50">
          <div className="bg-gradient-to-r from-[#A52A2A] to-[#7B1C1C] rounded-2xl p-5 text-white mb-6">
             <div className="flex justify-between items-start mb-4">
                <p className="text-red-200 text-sm">Active Members</p>
                <Gift size={20} className="text-red-200" />
             </div>
             <div className="flex justify-between items-end">
                <h2 className="text-3xl font-bold">{customers.filter(c => c.loyalty !== 'None').length}</h2>
                 <svg viewBox="0 0 50 20" className="w-12 stroke-white fill-none stroke-2">
                    <path d="M0 10 Q 10 5, 20 15 T 40 5 T 50 10" />
                </svg>
             </div>
          </div>

          <div>
             <p className="text-gray-400 text-xs mb-4 uppercase font-semibold">Top Tiers</p>
             <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-600 font-bold">
                      G
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-800">Gold Members</p>
                      <p className="text-xs text-gray-400">Highest tier</p>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-gray-800">{customers.filter(c => c.loyalty === 'Gold').length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-bold">
                      S
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-800">Silver Members</p>
                      <p className="text-xs text-gray-400">Middle tier</p>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-gray-800">{customers.filter(c => c.loyalty === 'Silver').length}</span>
                </div>
             </div>
          </div>
        </div>

        {/* Promo Banner */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-red-50 flex flex-col md:flex-row items-center justify-between overflow-hidden relative">
           <div className="md:w-1/2 z-10">
              <h2 className="text-3xl font-bold text-[#5A1313] mb-4 leading-tight">Kelola Toko Roti<br/>Lebih Mudah!</h2>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                Pantau penjualan, stok, dan<br/>loyalitas pelanggan dengan<br/>dashboard modern.
              </p>
              <div className="flex items-center gap-4">
                <button className="bg-[#7B1C1C] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#5A1313] transition-colors">
                  Lihat Laporan
                </button>
              </div>
           </div>
           
           {/* Abstract Decorative Graphic */}
           <div className="md:w-1/2 h-full min-h-[200px] relative mt-6 md:mt-0 opacity-80">
              <div className="absolute top-0 right-0 w-48 h-48 bg-red-50 rounded-2xl rotate-12"></div>
              <div className="absolute top-10 right-10 w-32 h-32 bg-white shadow-xl rounded-xl border border-red-100 flex items-center justify-center">
                 <div className="w-20 h-20 border-4 border-dashed border-red-200 rounded-lg"></div>
              </div>
              <div className="absolute bottom-4 left-10 w-40 h-12 bg-white shadow-lg rounded-full border border-red-50 flex items-center px-4">
                  <div className="w-full h-1 bg-red-50 rounded-full overflow-hidden">
                     <div className="w-2/3 h-full bg-[#7B1C1C] rounded-full"></div>
                  </div>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
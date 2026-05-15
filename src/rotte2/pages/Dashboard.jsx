import React from 'react';
import { BarChart3, LayoutDashboard, MoreHorizontal, CheckCircle2 } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      
      {/* TOP STAT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Card 1: Purple */}
        <div className="bg-[#5642FA] rounded-2xl p-5 text-white flex justify-between items-center shadow-lg shadow-indigo-200">
          <div>
            <p className="text-indigo-200 text-sm mb-1">Activity</p>
            <h2 className="text-2xl font-bold">$540.50</h2>
          </div>
          <div className="w-16 h-8 opacity-80">
            <svg viewBox="0 0 100 30" className="stroke-white fill-none stroke-2">
              <path d="M0 20 Q 10 10, 20 25 T 40 15 T 60 25 T 80 5 T 100 15" />
            </svg>
          </div>
        </div>

        {/* Card 2: White */}
        <div className="bg-white rounded-2xl p-5 flex justify-between items-center shadow-sm">
          <div>
            <p className="text-gray-400 text-sm mb-1">Spent this month</p>
            <h2 className="text-2xl font-bold text-gray-800">$682.5</h2>
          </div>
          <div className="flex items-end gap-1 h-10">
            <div className="w-1.5 h-6 bg-indigo-500 rounded-full"></div>
            <div className="w-1.5 h-10 bg-indigo-500 rounded-full"></div>
            <div className="w-1.5 h-4 bg-indigo-200 rounded-full"></div>
            <div className="w-1.5 h-8 bg-indigo-500 rounded-full"></div>
            <div className="w-1.5 h-3 bg-indigo-200 rounded-full"></div>
          </div>
        </div>

        {/* Card 3: White */}
        <div className="bg-white rounded-2xl p-5 flex items-center gap-4 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-[#5642FA]">
            <BarChart3 size={24} />
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-1">Earnings</p>
            <h2 className="text-2xl font-bold text-gray-800">$350.40</h2>
          </div>
        </div>

        {/* Card 4: Purple */}
         <div className="bg-[#5642FA] rounded-2xl p-5 text-white flex justify-between items-center shadow-lg shadow-indigo-200">
          <div>
            <p className="text-indigo-200 text-sm mb-1">Activity</p>
            <h2 className="text-2xl font-bold">$540.50</h2>
          </div>
          <div className="w-16 h-8 opacity-80">
            <svg viewBox="0 0 100 30" className="stroke-white fill-none stroke-2">
              <path d="M0 20 Q 10 10, 20 25 T 40 15 T 60 25 T 80 5 T 100 15" />
            </svg>
          </div>
        </div>
      </div>

      {/* MIDDLE SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Balance Chart Area (Spans 2 columns) */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-gray-800">Balance</h3>
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
                <p className="text-gray-400 text-sm">Saves</p>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold">43.50%</span>
                  <span className="text-xs text-green-500 bg-green-50 px-2 py-0.5 rounded text-medium">+2.45%</span>
                </div>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Balance</p>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold">$52,422</span>
                  <span className="text-xs text-red-500 bg-red-50 px-2 py-0.5 rounded text-medium">-4.75%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="h-40 w-full relative overflow-hidden rounded-xl bg-gradient-to-b from-indigo-50/50 to-transparent flex items-end mt-4">
             <svg viewBox="0 0 400 100" className="w-full h-full stroke-[#5642FA] fill-[#5642FA]/10 stroke-2 preserve-3d">
                <path d="M0 100 L0 50 Q 20 40, 40 70 T 80 50 T 120 80 T 160 30 T 200 60 T 240 20 T 280 50 T 320 40 T 360 60 T 400 30 L400 100 Z" />
            </svg>
          </div>
        </div>

        {/* Transfers List */}
        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <h3 className="text-lg font-bold text-gray-800 mb-6">Your Transfers</h3>
          <div className="space-y-5">
            {/* Transfer 1 */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src="https://i.pravatar.cc/150?img=11" className="w-10 h-10 rounded-full" alt="User" />
                <div>
                  <p className="text-sm font-bold text-gray-800">From Alex Manda</p>
                  <p className="text-xs text-gray-400">Today, 16:36</p>
                </div>
              </div>
              <span className="text-sm font-bold text-green-500 bg-green-50 px-2 py-1 rounded">+ $50</span>
            </div>
            {/* Transfer 2 */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src="https://i.pravatar.cc/150?img=5" className="w-10 h-10 rounded-full" alt="User" />
                <div>
                  <p className="text-sm font-bold text-gray-800">To Laura Santos</p>
                  <p className="text-xs text-gray-400">Today, 08:49</p>
                </div>
              </div>
              <span className="text-sm font-bold text-red-500 bg-red-50 px-2 py-1 rounded">- $27</span>
            </div>
             {/* Transfer 3 */}
             <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src="https://i.pravatar.cc/150?img=8" className="w-10 h-10 rounded-full" alt="User" />
                <div>
                  <p className="text-sm font-bold text-gray-800">From Jadon S.</p>
                  <p className="text-xs text-gray-400">Yesterday, 14:36</p>
                </div>
              </div>
              <span className="text-sm font-bold text-green-500 bg-green-50 px-2 py-1 rounded">+ $157</span>
            </div>
          </div>
          <div className="mt-6 text-right">
            <button className="text-[#5642FA] text-sm font-bold flex items-center justify-end w-full hover:underline">
              View all &rarr;
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Credit Balance & Recent */}
        <div className="bg-white rounded-3xl p-6 shadow-sm">
          {/* Credit Card Banner */}
          <div className="bg-gradient-to-r from-[#6A58FA] to-[#4C35DE] rounded-2xl p-5 text-white mb-6">
             <div className="flex justify-between items-start mb-4">
                <p className="text-indigo-200 text-sm">Credit Balance</p>
                <MoreHorizontal size={20} className="text-indigo-200 cursor-pointer" />
             </div>
             <div className="flex justify-between items-end">
                <h2 className="text-3xl font-bold">$25,215</h2>
                 <svg viewBox="0 0 50 20" className="w-12 stroke-white fill-none stroke-2">
                    <path d="M0 10 Q 10 5, 20 15 T 40 5 T 50 10" />
                </svg>
             </div>
          </div>

          {/* Recent Transactions */}
          <div>
             <p className="text-gray-400 text-xs mb-4 uppercase font-semibold">Recent</p>
             <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                      <LayoutDashboard size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-800">Bill & Taxes</p>
                      <p className="text-xs text-gray-400">Today, 16:36</p>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-gray-800">-$154.50</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-500">
                      <BarChart3 size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-800">Car Energy</p>
                      <p className="text-xs text-gray-400">23 Jun, 13:06</p>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-gray-800">-$40.50</span>
                </div>
             </div>
          </div>
        </div>

        {/* Promo Banner (Spans 2 columns) */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-sm flex flex-col md:flex-row items-center justify-between overflow-hidden relative">
           <div className="md:w-1/2 z-10">
              <h2 className="text-3xl font-bold text-[#1E1B4B] mb-4 leading-tight">Try Venus for<br/>free now!</h2>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Enter in this creative world. Venus<br/>is the best product for your<br/>business.
              </p>
              <div className="flex items-center gap-4">
                <button className="bg-[#4C35DE] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#3b27b5] transition-colors">
                  Try for free
                </button>
                <button className="text-gray-400 font-medium hover:text-gray-600">
                  Skip
                </button>
              </div>
           </div>
           
           {/* Abstract Decorative Graphic */}
           <div className="md:w-1/2 h-full min-h-[200px] relative mt-6 md:mt-0 opacity-80">
              <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-50 rounded-2xl rotate-12"></div>
              <div className="absolute top-10 right-10 w-32 h-32 bg-white shadow-xl rounded-xl border border-gray-100 flex items-center justify-center">
                 <div className="w-20 h-20 border-4 border-dashed border-indigo-200 rounded-lg"></div>
              </div>
              <div className="absolute bottom-4 left-10 w-40 h-12 bg-white shadow-lg rounded-full border border-gray-50 flex items-center px-4">
                  <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                     <div className="w-2/3 h-full bg-[#4C35DE] rounded-full"></div>
                  </div>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
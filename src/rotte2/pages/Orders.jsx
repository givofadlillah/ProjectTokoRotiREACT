import React from 'react';

const Orders = () => {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Orders</h1>
        <button className="bg-[#4C35DE] text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-[#3b27b5] transition-colors">
          + New Order
        </button>
      </div>

      <div className="bg-white rounded-3xl p-6 shadow-sm min-h-[400px]">
        <p className="text-gray-500 text-sm">Halaman daftar pesanan akan ditampilkan di sini.</p>
        {/* Tempatkan tabel orders Anda di sini */}
      </div>
    </div>
  );
};

export default Orders;
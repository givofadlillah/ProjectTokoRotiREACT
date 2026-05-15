import React from 'react';

const Customers = () => {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Customers</h1>
      </div>

      <div className="bg-white rounded-3xl p-6 shadow-sm min-h-[400px]">
        <p className="text-gray-500 text-sm">Halaman manajemen pelanggan akan ditampilkan di sini.</p>
        {/* Tempatkan data customers Anda di sini */}
      </div>
    </div>
  );
};

export default Customers;
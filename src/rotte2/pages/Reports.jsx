import React from 'react';

const Reports = () => {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Reports & Analytics</h1>
        <button className="bg-[#7B1C1C] text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-[#5A1313] transition-colors shadow-lg shadow-red-200">
          Download Report
        </button>
      </div>

      <div className="bg-white rounded-3xl p-6 shadow-sm border border-red-50 min-h-[400px]">
        <p className="text-gray-500 text-sm">Halaman laporan performa dan analitik penjualan.</p>
      </div>
    </div>
  );
};

export default Reports;
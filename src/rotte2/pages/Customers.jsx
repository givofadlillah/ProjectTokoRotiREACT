import React from 'react';
import customers from '../../rotte/data/customers';

const Customers = () => {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Customers</h1>
        <button className="bg-[#7B1C1C] text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-[#5A1313] transition-colors shadow-lg shadow-red-200">
          + Add Customer
        </button>
      </div>

      <div className="bg-white rounded-3xl p-6 shadow-sm border border-red-50 min-h-[400px]">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="py-3 px-4 text-xs uppercase text-gray-400 font-bold tracking-wider">Customer</th>
                <th className="py-3 px-4 text-xs uppercase text-gray-400 font-bold tracking-wider">Email</th>
                <th className="py-3 px-4 text-xs uppercase text-gray-400 font-bold tracking-wider">Loyalty</th>
                <th className="py-3 px-4 text-xs uppercase text-gray-400 font-bold tracking-wider">Points</th>
                <th className="py-3 px-4 text-xs uppercase text-gray-400 font-bold tracking-wider">Total Spent</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id} className="border-b border-gray-50 hover:bg-red-50/50 transition-colors">
                  <td className="py-4 px-4 text-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-red-100 text-[#7B1C1C] flex items-center justify-center font-bold">
                        {customer.name.charAt(0)}
                      </div>
                      <span className="font-bold text-gray-800">{customer.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-500">{customer.email}</td>
                  <td className="py-4 px-4 text-sm">
                    <span className={`px-2.5 py-1 rounded-full font-bold text-xs ${
                      customer.loyalty === 'Gold' ? 'bg-yellow-100 text-yellow-700' :
                      customer.loyalty === 'Silver' ? 'bg-gray-200 text-gray-700' :
                      customer.loyalty === 'Bronze' ? 'bg-orange-200 text-orange-800' :
                      'bg-gray-100 text-gray-500'
                    }`}>
                      {customer.loyalty}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-sm font-bold text-gray-700">{customer.points}</td>
                  <td className="py-4 px-4 text-sm font-bold text-[#7B1C1C]">Rp {customer.totalSpent.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Customers;
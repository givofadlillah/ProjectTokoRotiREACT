import React from 'react';
import orders from '../../rotte/data/orders';

const Orders = () => {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Orders</h1>
        <button className="bg-[#7B1C1C] text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-[#5A1313] transition-colors shadow-lg shadow-red-200">
          + New Order
        </button>
      </div>

      <div className="bg-white rounded-3xl p-6 shadow-sm border border-red-50 min-h-[400px]">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="py-3 px-4 text-xs uppercase text-gray-400 font-bold tracking-wider">Order ID</th>
                <th className="py-3 px-4 text-xs uppercase text-gray-400 font-bold tracking-wider">Customer</th>
                <th className="py-3 px-4 text-xs uppercase text-gray-400 font-bold tracking-wider">Status</th>
                <th className="py-3 px-4 text-xs uppercase text-gray-400 font-bold tracking-wider">Date</th>
                <th className="py-3 px-4 text-xs uppercase text-gray-400 font-bold tracking-wider">Total</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b border-gray-50 hover:bg-red-50/50 transition-colors">
                  <td className="py-4 px-4 text-sm text-gray-500 font-mono">#{order.id}</td>
                  <td className="py-4 px-4 text-sm font-bold text-gray-800">{order.customerName}</td>
                  <td className="py-4 px-4 text-sm">
                    <span className={`px-2.5 py-1 rounded-full font-bold text-xs ${
                      order.status === 'Completed' ? 'bg-green-100 text-green-700' :
                      order.status === 'Pending' ? 'bg-orange-100 text-orange-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-500">{order.orderDate}</td>
                  <td className="py-4 px-4 text-sm font-bold text-[#7B1C1C]">Rp {order.totalPrice.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
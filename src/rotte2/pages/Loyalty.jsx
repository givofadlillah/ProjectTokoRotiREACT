import React from 'react';
import { Gift, Star, Trophy, Crown } from 'lucide-react';
import customers from '../../rotte/data/customers';

const Loyalty = () => {
  const members = customers.filter(c => c.loyalty !== 'None');
  const totalPoints = members.reduce((sum, c) => sum + c.points, 0);

  const stats = [
    { label: 'Gold', count: members.filter(c => c.loyalty === 'Gold').length, icon: Crown, color: 'text-yellow-600', bg: 'bg-yellow-50' },
    { label: 'Silver', count: members.filter(c => c.loyalty === 'Silver').length, icon: Trophy, color: 'text-gray-500', bg: 'bg-gray-100' },
    { label: 'Bronze', count: members.filter(c => c.loyalty === 'Bronze').length, icon: Star, color: 'text-orange-700', bg: 'bg-orange-50' },
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Loyalty Program</h1>
        <div className="flex items-center gap-2 bg-[#7B1C1C] text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg shadow-red-200">
          <Gift size={18} /> Total Points: {totalPoints.toLocaleString()}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className={`rounded-3xl p-6 shadow-sm border border-red-50 flex items-center justify-between ${stat.bg}`}>
            <div>
              <p className="text-sm font-bold text-gray-500 mb-1">{stat.label} Members</p>
              <h2 className="text-3xl font-bold text-gray-800">{stat.count}</h2>
            </div>
            <div className={`w-14 h-14 rounded-full flex items-center justify-center bg-white shadow-sm ${stat.color}`}>
              <stat.icon size={28} />
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-3xl p-6 shadow-sm border border-red-50 min-h-[400px]">
         <h3 className="text-lg font-bold text-gray-800 mb-6">Member Points</h3>
         <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="py-3 px-4 text-xs uppercase text-gray-400 font-bold tracking-wider">Member</th>
                <th className="py-3 px-4 text-xs uppercase text-gray-400 font-bold tracking-wider">Tier</th>
                <th className="py-3 px-4 text-xs uppercase text-gray-400 font-bold tracking-wider">Points</th>
                <th className="py-3 px-4 text-xs uppercase text-gray-400 font-bold tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member) => (
                <tr key={member.id} className="border-b border-gray-50 hover:bg-red-50/50 transition-colors">
                  <td className="py-4 px-4 text-sm font-bold text-gray-800">{member.name}</td>
                  <td className="py-4 px-4 text-sm">
                    <span className={`px-2.5 py-1 rounded-full font-bold text-xs ${
                      member.loyalty === 'Gold' ? 'bg-yellow-100 text-yellow-700' :
                      member.loyalty === 'Silver' ? 'bg-gray-200 text-gray-700' :
                      'bg-orange-200 text-orange-800'
                    }`}>
                      {member.loyalty}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-sm font-bold text-[#7B1C1C]">{member.points.toLocaleString()} pts</td>
                  <td className="py-4 px-4 text-sm">
                    <button className="text-[#7B1C1C] hover:underline font-medium text-xs">Manage Points</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Loyalty;

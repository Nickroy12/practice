'use client'
import React from 'react';
import CountUp from 'react-countup';

const stats = [
  { id: 1, icon: '/icon/toolkit.png', value: 321879, label: 'Order Processed' },
  { id: 2, icon: '/icon/network.png', value: 6245, label: 'Available Services' },
  { id: 3, icon: '/icon/group.png', value: 8552, label: 'Registered User' },
  { id: 4, icon: '/icon/achievement.png', prefix: '#', value: 1, label: 'Regional Rank' },
];

export default function StatsSection() {
  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-md border border-slate-100"
        >
          <img src={stat.icon} alt={stat.label} className="w-16 h-16 mb-4 object-contain" />
          
          <h3 className="text-2xl font-extrabold text-slate-800">
            {stat.prefix}
            <CountUp end={stat.value} duration={2.5} separator="," />
          </h3>

          <p className="text-xs font-semibold text-orange-500 mt-1 uppercase tracking-wide">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
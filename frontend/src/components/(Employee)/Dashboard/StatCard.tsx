// src/components/dashboard/StatCards.tsx
import { Activity, Timer, Star, FileText } from 'lucide-react';

export const StatCards = () => {
  const stats = [
    { label: 'Attendance', value: '98.2%', icon: Activity, color: 'text-emerald-400', bg: 'bg-emerald-500/5' },
    { label: 'Avg Handle Time', value: '4m 12s', icon: Timer, color: 'text-cyan-400', bg: 'bg-cyan-500/5' },
    { label: 'CSAT Score', value: '4.8/5', icon: Star, color: 'text-blue-400', bg: 'bg-blue-500/5' },
    { label: 'KPI Reports', value: '12', icon: FileText, color: 'text-purple-400', bg: 'bg-purple-500/5' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-slate-900/30 border border-white/5 p-7 rounded-[2.5rem] backdrop-blur-3xl hover:border-white/10 transition-all group">
          <div className="flex justify-between items-start mb-4">
            <div className={`p-3 rounded-2xl ${stat.bg}`}>
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
            </div>
            <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Live Metrics</span>
          </div>
          <p className="text-3xl font-black text-white tracking-tighter group-hover:scale-105 origin-left transition-transform">{stat.value}</p>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mt-1">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};
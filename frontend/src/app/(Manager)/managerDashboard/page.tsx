'use client';

import React from 'react';
import { ManagerSidebar } from '../../../components/(Manager)/Dashboard/ManagerSidebar';
import { 
  Users, 
  Clock, 
  AlertCircle, 
  TrendingUp, 
  ArrowUpRight, 
  ChevronRight,
  Activity,
  UserPlus
} from 'lucide-react';

export default function ManagerDashboard() {
  const stats = [
    { label: 'Active Headcount', val: '42', sub: '95% SHIFT FILL', icon: Users, color: 'text-blue-400' },
    { label: 'Pending Leaves', val: '08', sub: 'ACTION REQUIRED', icon: AlertCircle, color: 'text-orange-400' },
    { label: 'Team SLA', val: '99.2%', sub: 'ABOVE TARGET', icon: Activity, color: 'text-emerald-400' },
  ];

  return (
    <main className="h-screen w-full flex bg-[#020617] text-slate-200 overflow-hidden font-sans uppercase">
      <ManagerSidebar />

      <section className="flex-1 flex flex-col overflow-y-auto bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-[#020617] to-[#020617]">
        
        {/* HEADER */}
        <header className="px-12 py-10 flex justify-between items-center border-b border-white/5 backdrop-blur-md sticky top-0 z-20 bg-[#020617]/80">
          <div>
            <p className="text-[10px] font-black text-blue-500 tracking-[0.4em] mb-2">Operations Command</p>
            <h1 className="text-4xl font-black text-white tracking-tighter uppercase">Executive <span className="text-blue-600">Overview</span></h1>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black tracking-widest hover:bg-white/10 transition-all">
                <UserPlus className="w-4 h-4" /> Add Member
            </button>
          </div>
        </header>

        <div className="p-12 max-w-[1600px] w-full mx-auto space-y-10">
          
          {/* TOP KPI CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="bg-slate-900/40 border border-white/5 p-8 rounded-[3rem] relative overflow-hidden group">
                <s.icon className={`absolute top-6 right-8 w-12 h-12 ${s.color} opacity-10 group-hover:scale-125 transition-transform duration-500`} />
                <p className="text-[10px] font-black text-slate-500 tracking-[0.3em] mb-2">{s.label}</p>
                <h2 className="text-5xl font-black text-white tracking-tighter">{s.val}</h2>
                <p className={`text-[9px] font-black ${s.color} mt-4 tracking-widest`}>{s.sub}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* LEFT: PENDING APPROVALS LIST */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-slate-900/20 border border-white/5 rounded-[3rem] overflow-hidden">
                <div className="px-10 py-8 border-b border-white/5 flex justify-between items-center">
                  <h3 className="text-xs font-black text-white tracking-[0.3em]">Urgent Approvals</h3>
                  <span className="px-4 py-1 bg-orange-500/10 text-orange-400 text-[9px] font-black rounded-full border border-orange-500/20">8 PENDING</span>
                </div>
                <div className="divide-y divide-white/5">
                  {[
                    { name: 'JONATHAN DEE', type: 'SICK LEAVE', date: 'MAR 26 - 28', status: 'URGENT' },
                    { name: 'MARIA SANTOS', type: 'EMERGENCY LEAVE', date: 'MAR 26', status: 'NEW' },
                    { name: 'KEVIN TAN', type: 'VTO REQUEST', date: 'MAR 27', status: 'NEW' },
                  ].map((req, i) => (
                    <div key={i} className="px-10 py-6 flex justify-between items-center hover:bg-white/5 transition-all group">
                      <div className="flex gap-4 items-center">
                        <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center font-black text-slate-500 text-[10px]">{req.name[0]}</div>
                        <div>
                          <p className="text-xs font-black text-white tracking-tight">{req.name}</p>
                          <p className="text-[9px] font-black text-slate-500 tracking-widest uppercase">{req.type}{req.date}</p>
                        </div>
                      </div>
                      <button className="flex items-center gap-2 text-[9px] font-black text-blue-400 tracking-widest hover:text-white transition-colors">
                        REVIEW REQUEST <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: SYSTEM STATUS / NOTIFICATIONS */}
            <div className="space-y-8">
              <div className="bg-blue-600 p-10 rounded-[3rem] text-white relative overflow-hidden">
                <TrendingUp className="absolute top-[-20px] right-[-20px] w-32 h-32 opacity-20" />
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 opacity-70">Shift Analytics</h3>
                <p className="text-3xl font-black tracking-tighter mb-8 leading-none">TEAM PERFORMANCE IS UP 14% THIS WEEK</p>
                <button className="w-full py-4 bg-slate-950 text-white rounded-2xl font-black uppercase text-[10px] tracking-widest hover:scale-105 transition-transform">
                  View Full Report
                </button>
              </div>

              <div className="bg-slate-900/40 border border-white/5 p-8 rounded-[3rem] space-y-6">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Resource Status</h3>
                {[
                  { label: 'Workstations', val: '98%', color: 'bg-emerald-500' },
                  { label: 'Network Load', val: '42%', color: 'bg-blue-500' },
                  { label: 'AVAYA Status', val: 'ONLINE', color: 'bg-emerald-500' },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span className="text-[10px] font-black text-white tracking-widest">{item.label}</span>
                    <span className={`px-3 py-1 rounded-lg text-[9px] font-black ${item.color} text-slate-950`}>{item.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
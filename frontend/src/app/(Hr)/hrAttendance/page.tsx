'use client';

import React, { useState } from 'react';
import { HRSidebar } from '../../../components/(Hr)/Dashboard/sidebar';
import { 
  Search, 
  Filter, 
  Download, 
  Clock, 
  UserCheck, 
  UserMinus, 
  AlertTriangle,
  MoreHorizontal,
  Calendar
} from 'lucide-react';

interface AttendanceRecord {
  id: string;
  name: string;
  dept: string;
  shift: string;
  timeIn: string;
  status: 'PRESENT' | 'LATE' | 'ABSENT' | 'ON LEAVE';
}

const globalAttendance: AttendanceRecord[] = [
  { id: 'AX-101', name: 'ALEXANDER WRIGHT', dept: 'TECH OPS', shift: '06:00 - 15:00', timeIn: '05:52 AM', status: 'PRESENT' },
  { id: 'AX-105', name: 'MARIA SANTOS', dept: 'CUSTOMER CARE', shift: '09:00 - 18:00', timeIn: '09:15 AM', status: 'LATE' },
  { id: 'AX-112', name: 'KEVIN TAN', dept: 'SALES', shift: '10:00 - 19:00', timeIn: '---', status: 'ABSENT' },
  { id: 'AX-115', name: 'SARAH JENKINS', dept: 'HR ADMIN', shift: '08:00 - 17:00', timeIn: '---', status: 'ON LEAVE' },
  { id: 'AX-120', name: 'JONATHAN DEE', dept: 'TECH OPS', shift: '06:00 - 15:00', timeIn: '05:45 AM', status: 'PRESENT' },
];

export default function HRAttendancePage() {
  const [filter, setFilter] = useState('ALL');

  return (
    <main className="h-screen w-full flex bg-[#020617] text-slate-200 overflow-hidden font-sans uppercase">
      <HRSidebar />

      <section className="flex-1 flex flex-col overflow-y-auto bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-900/10 via-[#020617] to-[#020617]">
        
        {/* HEADER */}
        <header className="px-12 py-10 border-b border-white/5 flex justify-between items-end backdrop-blur-md sticky top-0 z-20 bg-[#020617]/80">
          <div>
            <div className="flex items-center gap-2 text-indigo-500 mb-2">
                <Clock className="w-4 h-4" strokeWidth={3} />
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Global Workforce Monitoring</span>
            </div>
            <h1 className="text-4xl font-black text-white tracking-tighter uppercase">
              Attendance <span className="text-indigo-600">Registry</span>
            </h1>
          </div>

          <div className="flex gap-4">
            <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
                <input 
                    placeholder="SEARCH NAME OR ID..." 
                    className="bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-[10px] font-black tracking-widest outline-none focus:border-indigo-500/50 w-64"
                />
            </div>
            <button className="flex items-center gap-3 px-8 py-4 bg-indigo-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-600/20">
                <Download className="w-4 h-4" /> Export DTR
            </button>
          </div>
        </header>

        <div className="p-12 max-w-[1600px] w-full mx-auto space-y-8">
          
          {/* STATS SUMMARY CARD */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
                { label: 'TOTAL HEADCOUNT', val: '1,284', icon: Calendar, color: 'text-white' },
                { label: 'PRESENT TODAY', val: '1,120', icon: UserCheck, color: 'text-emerald-500' },
                { label: 'LATE ARRIVALS', val: '42', icon: AlertTriangle, color: 'text-orange-400' },
                { label: 'UNACCOUNTED', val: '14', icon: UserMinus, color: 'text-red-500' },
            ].map((stat, i) => (
                <div key={i} className="bg-slate-900/40 border border-white/5 p-6 rounded-[2rem] flex items-center gap-6 backdrop-blur-3xl">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                        <stat.icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                    <div>
                        <p className="text-[8px] font-black text-slate-500 tracking-[0.2em]">{stat.label}</p>
                        <p className={`text-xl font-black ${stat.color}`}>{stat.val}</p>
                    </div>
                </div>
            ))}
          </div>

          {/* TABLE FILTERS */}
          <div className="flex justify-between items-center bg-slate-900/20 p-4 rounded-3xl border border-white/5">
             <div className="flex gap-2">
                {['ALL', 'PRESENT', 'LATE', 'ABSENT'].map((tag) => (
                    <button 
                        key={tag}
                        onClick={() => setFilter(tag)}
                        className={`px-6 py-2 rounded-xl text-[9px] font-black tracking-widest transition-all ${
                            filter === tag ? 'bg-indigo-600 text-white' : 'text-slate-500 hover:text-white hover:bg-white/5'
                        }`}
                    >
                        {tag}
                    </button>
                ))}
             </div>
             <button className="flex items-center gap-2 px-6 py-2 text-slate-500 text-[9px] font-black tracking-widest uppercase">
                <Filter className="w-3.5 h-3.5" /> Department: All
             </button>
          </div>

          {/* ATTENDANCE TABLE */}
          <div className="bg-slate-900/40 border border-white/5 rounded-[3rem] overflow-hidden shadow-2xl">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-white/5 border-b border-white/5 text-[10px] font-black text-slate-500 tracking-[0.3em]">
                        <th className="px-10 py-6">EMPLOYEE</th>
                        <th className="px-6 py-6">DEPARTMENT</th>
                        <th className="px-6 py-6">SHIFT</th>
                        <th className="px-6 py-6 text-center">TIME IN</th>
                        <th className="px-6 py-6 text-center">STATUS</th>
                        <th className="px-10 py-6 text-right">ACTION</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                    {globalAttendance.map((row) => (
                        <tr key={row.id} className="hover:bg-indigo-600/5 transition-colors group">
                            <td className="px-10 py-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center text-[10px] font-black text-slate-500">
                                        {row.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div>
                                        <p className="text-xs font-black text-white tracking-tight uppercase">{row.name}</p>
                                        <p className="text-[8px] font-bold text-slate-600 tracking-widest">{row.id}</p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-6 text-[10px] font-black text-slate-400">{row.dept}</td>
                            <td className="px-6 py-6 text-[10px] font-bold text-slate-500 tracking-tighter">{row.shift}</td>
                            <td className="px-6 py-6 text-[10px] font-black text-center text-white">{row.timeIn}</td>
                            <td className="px-6 py-6">
                                <div className="flex justify-center">
                                    <span className={`px-3 py-1 rounded-lg text-[8px] font-black tracking-widest border ${
                                        row.status === 'PRESENT' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' :
                                        row.status === 'LATE' ? 'bg-orange-500/10 text-orange-500 border-orange-500/20' :
                                        'bg-red-500/10 text-red-500 border-red-500/20'
                                    }`}>
                                        {row.status}
                                    </span>
                                </div>
                            </td>
                            <td className="px-10 py-6 text-right">
                                <button className="p-2 hover:bg-white/10 rounded-lg transition-all text-slate-600 hover:text-white">
                                    <MoreHorizontal className="w-5 h-5" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
          </div>

        </div>
      </section>
    </main>
  );
}
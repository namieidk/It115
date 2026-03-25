'use client';

import React from 'react';
import { ManagerSidebar } from '../../../components/(Manager)/Dashboard/ManagerSidebar';
import { 
  Users, 
  Clock, 
  Search, 
  Filter, 
  Download, 
  UserCheck, 
  UserMinus, 
  AlertTriangle,
  MoreHorizontal
} from 'lucide-react';

const teamAttendance = [
  { id: 'AX-01', name: 'MARIA SANTOS', shift: '22:00 - 07:00', login: '21:55', status: 'PRESENT', health: 'GOOD' },
  { id: 'AX-05', name: 'JONATHAN DEE', shift: '22:00 - 07:00', login: '22:15', status: 'LATE', health: 'WARNING' },
  { id: 'AX-12', name: 'KEVIN TAN', shift: '06:00 - 15:00', login: '--:--', status: 'ABSENT', health: 'CRITICAL' },
  { id: 'AX-09', name: 'SARAH JENKINS', shift: '22:00 - 07:00', login: '21:58', status: 'PRESENT', health: 'GOOD' },
  { id: 'AX-21', name: 'MIKE ROSS', shift: '22:00 - 07:00', login: '22:05', status: 'LATE', health: 'WARNING' },
];

export default function ManagerAttendancePage() {
  return (
    <main className="h-screen w-full flex bg-[#020617] text-slate-200 overflow-hidden font-sans uppercase">
      {/* GLOBAL MANAGER SIDEBAR */}
      <ManagerSidebar />

      <section className="flex-1 flex flex-col overflow-y-auto bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-blue-900/10 via-[#020617] to-[#020617]">
        
        {/* HEADER */}
        <header className="px-12 py-10 border-b border-white/5 flex justify-between items-end backdrop-blur-md sticky top-0 z-20 bg-[#020617]/80">
          <div>
            <div className="flex items-center gap-2 text-blue-500 mb-2">
                <Clock className="w-4 h-4" strokeWidth={3} />
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Team Chronology</span>
            </div>
            <h1 className="text-4xl font-black text-white tracking-tighter uppercase">
              Roster <span className="text-blue-600">Attendance</span>
            </h1>
          </div>

          <div className="flex gap-4">
            <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                <input 
                    placeholder="SEARCH AGENT..." 
                    className="bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-[10px] font-black tracking-widest outline-none focus:border-blue-500/50 transition-all min-w-[300px]"
                />
            </div>
            <button className="flex items-center gap-2 px-6 py-4 bg-blue-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20">
                <Download className="w-4 h-4" /> Export Daily Log
            </button>
          </div>
        </header>

        <div className="p-12 max-w-[1600px] w-full mx-auto space-y-10">
          
          {/* QUICK ROSTER METRICS */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { label: 'Total Roster', val: '42', icon: Users, color: 'text-white' },
              { label: 'Clocked In', val: '38', icon: UserCheck, color: 'text-emerald-500' },
              { label: 'Late/Tardy', val: '03', icon: AlertTriangle, color: 'text-orange-400' },
              { label: 'Unaccounted', val: '01', icon: UserMinus, color: 'text-red-500' },
            ].map((stat, i) => (
              <div key={i} className="bg-slate-900/40 border border-white/5 p-6 rounded-[2.5rem] flex items-center gap-5 backdrop-blur-3xl">
                <div className={`p-4 rounded-2xl bg-white/5 ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                </div>
                <div>
                    <p className="text-[9px] font-black text-slate-500 tracking-widest">{stat.label}</p>
                    <p className={`text-2xl font-black ${stat.color} tracking-tighter`}>{stat.val}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ATTENDANCE MONITORING TABLE */}
          <div className="bg-slate-900/20 border border-white/5 rounded-[3.5rem] overflow-hidden shadow-2xl">
            <div className="px-10 py-8 border-b border-white/5 flex justify-between items-center bg-white/5">
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Live Shift Monitoring // March 26, 2026</h3>
                <Filter className="w-5 h-5 text-slate-500 cursor-pointer hover:text-white transition-colors" />
            </div>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-[10px] uppercase tracking-[0.25em] text-slate-500 font-black border-b border-white/5">
                  <th className="px-10 py-6">Agent ID</th>
                  <th className="px-10 py-6">Agent Name</th>
                  <th className="px-10 py-6">Schedule</th>
                  <th className="px-10 py-6">Actual In</th>
                  <th className="px-10 py-6">Status</th>
                  <th className="px-10 py-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {teamAttendance.map((agent) => (
                  <tr key={agent.id} className="hover:bg-white/5 transition-all group">
                    <td className="px-10 py-7 text-[10px] font-black text-slate-500 font-mono tracking-widest">{agent.id}</td>
                    <td className="px-10 py-7">
                       <span className="text-xs font-black text-white tracking-tight uppercase group-hover:text-blue-400 transition-colors">{agent.name}</span>
                    </td>
                    <td className="px-10 py-7 text-[10px] font-black text-slate-500 font-mono">{agent.shift}</td>
                    <td className="px-10 py-7 text-sm font-black text-white font-mono">{agent.login}</td>
                    <td className="px-10 py-7">
                      <div className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                            agent.health === 'GOOD' ? 'bg-emerald-500' : 
                            agent.health === 'WARNING' ? 'bg-orange-400' : 'bg-red-500'
                        }`} />
                        <span className={`text-[10px] font-black tracking-widest ${
                            agent.health === 'GOOD' ? 'text-emerald-500' : 
                            agent.health === 'WARNING' ? 'text-orange-400' : 'text-red-500'
                        }`}>
                            {agent.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-10 py-7 text-right">
                        <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                            <MoreHorizontal className="w-5 h-5 text-slate-600" />
                        </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* MANAGER ADVISORY */}
          <div className="bg-blue-600/10 border border-blue-600/20 p-8 rounded-[2.5rem] flex items-center gap-6">
             <div className="h-12 w-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white">
                <AlertTriangle className="w-6 h-6" />
             </div>
             <div className="flex-1">
                <p className="text-[11px] font-black text-blue-400 uppercase tracking-widest leading-relaxed">
                  Compliance Alert: 3 Agents have exceeded the 15-minute grace period. System has automatically flagged these logs for <span className="underline decoration-blue-500/50 cursor-pointer">Disciplinary Review</span>.
                </p>
             </div>
          </div>

        </div>
      </section>
    </main>
  );
}
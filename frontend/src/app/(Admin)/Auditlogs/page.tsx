'use client';

import React, { useState } from 'react';
import { AdminSidebar } from '../../../components/(Admin)/Sidebar';
import { 
  History, 
  ShieldAlert, 
  Search, 
  Filter, 
  Calendar, 
  Globe, 
  UserRound, 
  FileText, 
  Download, 
  PlusCircle,
  LogIn,
  Activity,
  ChevronRight
} from 'lucide-react';

// --- TYPES ---
interface ActivityLog {
  id: string;
  user: string;
  role: string;
  dept: string;
  action: string;
  target: string;
  timestamp: string;
}

interface LoginLog {
  id: string;
  user: string;
  role: string;
  ipAddress: string;
  device: string;
  timestamp: string;
  status: 'SUCCESS' | 'FAILED';
}

type LogMode = 'activities' | 'logins';

export default function AuditLogsPage() {
  const [mode, setMode] = useState<LogMode>('activities');

  // --- MOCK DATA ---
  const activityLogs: ActivityLog[] = [
    { id: 'ACT-901', user: 'CLARA VALDEZ', role: 'HR', dept: 'HUMAN RESOURCES', action: 'DOWNLOADED REPORT', target: 'PAYROLL_MARCH.XLSX', timestamp: '2026-03-26 10:14:02' },
    { id: 'ACT-902', user: 'RICHARD STARK', role: 'MANAGER', dept: 'TECH OPS', action: 'CREATED EVALUATION', target: 'ALEX WRIGHT AUDIT', timestamp: '2026-03-26 09:45:22' },
    { id: 'ACT-903', user: 'SYSTEM ADMIN', role: 'ADMIN', dept: 'ROOT', action: 'PROVISIONED ACC', target: 'NEW_EMP_772', timestamp: '2026-03-26 08:20:11' },
  ];

  const loginLogs: LoginLog[] = [
    { id: 'LOG-101', user: 'SYSTEM ADMIN', role: 'ADMIN', ipAddress: '192.168.1.1', device: 'DESKTOP-W11 (CHROME)', timestamp: '2026-03-26 08:00:01', status: 'SUCCESS' },
    { id: 'LOG-102', user: 'SARAH JENKINS', role: 'MANAGER', ipAddress: '112.204.12.88', device: 'MACOS-SONOMA (SAFARI)', timestamp: '2026-03-26 08:15:44', status: 'SUCCESS' },
    { id: 'LOG-103', user: 'UNKNOWN_USER', role: 'N/A', ipAddress: '45.122.9.10', device: 'LINUX-UBUNTU (CURL)', timestamp: '2026-03-26 08:30:12', status: 'FAILED' },
  ];

  return (
    <main className="h-screen w-full flex bg-[#020617] text-slate-200 overflow-hidden font-sans uppercase">
      <AdminSidebar />
      <section className="flex-1 flex flex-col overflow-hidden bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-red-900/10 via-[#020617] to-[#020617]">
        
        {/* HEADER & MODE SWITCHER */}
        <header className="px-12 py-10 border-b border-white/5 flex justify-between items-end backdrop-blur-md bg-[#020617]/80">
          <div>
            <div className="flex items-center gap-2 text-red-500 mb-2">
                <History className="w-4 h-4" strokeWidth={3} />
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Forensic Audit Trail</span>
            </div>
            <h1 className="text-4xl font-black text-white tracking-tighter uppercase">System <span className="text-red-600">Logs</span></h1>
          </div>

          <div className="flex bg-white/5 p-1.5 rounded-2xl border border-white/5">
            <button 
                onClick={() => setMode('activities')}
                className={`px-8 py-3 rounded-xl text-[10px] font-black tracking-widest transition-all ${mode === 'activities' ? 'bg-red-600 text-white shadow-lg' : 'text-slate-500 hover:text-white'}`}
            >
                ACTIVITIES
            </button>
            <button 
                onClick={() => setMode('logins')}
                className={`px-8 py-3 rounded-xl text-[10px] font-black tracking-widest transition-all ${mode === 'logins' ? 'bg-red-600 text-white shadow-lg' : 'text-slate-500 hover:text-white'}`}
            >
                LOGINS
            </button>
          </div>
        </header>

        {/* FILTERS BAR */}
        <div className="px-12 py-6 bg-slate-950/50 border-b border-white/5 flex flex-wrap gap-6 items-center">
            <div className="flex items-center gap-4 bg-white/5 px-4 py-2 rounded-xl border border-white/5">
                <Filter className="w-4 h-4 text-red-500" />
                <select className="bg-transparent text-[10px] font-black text-slate-400 outline-none uppercase cursor-pointer">
                    <option>ALL DEPARTMENTS</option>
                    <option>TECH OPS</option>
                    <option>HR</option>
                </select>
            </div>
            <div className="flex items-center gap-4 bg-white/5 px-4 py-2 rounded-xl border border-white/5">
                <UserRound className="w-4 h-4 text-red-500" />
                <select className="bg-transparent text-[10px] font-black text-slate-400 outline-none uppercase cursor-pointer">
                    <option>ALL ROLES</option>
                    <option>ADMIN</option>
                    <option>HR</option>
                    <option>MANAGER</option>
                </select>
            </div>
            <div className="flex items-center gap-4 bg-white/5 px-4 py-2 rounded-xl border border-white/5">
                <Calendar className="w-4 h-4 text-red-500" />
                <input type="date" className="bg-transparent text-[10px] font-black text-slate-400 outline-none uppercase invert" />
            </div>
            <div className="ml-auto relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
                <input placeholder="SEARCH LOGS..." className="bg-white/5 border border-white/5 rounded-xl py-2 pl-10 pr-4 text-[10px] font-black text-white outline-none focus:border-red-500/50 w-64" />
            </div>
        </div>

        {/* LOGS TABLE */}
        <div className="flex-1 overflow-y-auto p-12">
            <div className="bg-slate-900/40 border border-white/5 rounded-[3rem] overflow-hidden shadow-2xl">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-white/5 text-[10px] font-black text-slate-500 tracking-[0.3em] uppercase">
                        {mode === 'activities' ? (
                            <tr>
                                <th className="px-10 py-6">TIMESTAMP</th>
                                <th className="px-6 py-6">ACTOR</th>
                                <th className="px-6 py-6">ACTION TYPE</th>
                                <th className="px-10 py-6 text-right">TARGET OBJECT</th>
                            </tr>
                        ) : (
                            <tr>
                                <th className="px-10 py-6">TIMESTAMP</th>
                                <th className="px-6 py-6">USER IDENTIFIER</th>
                                <th className="px-6 py-6">NETWORK IP</th>
                                <th className="px-10 py-6 text-right">DEVICE / STATUS</th>
                            </tr>
                        )}
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {mode === 'activities' ? (
                            activityLogs.map((log) => (
                                <tr key={log.id} className="hover:bg-red-600/5 transition-colors group">
                                    <td className="px-10 py-6 text-[10px] font-black text-slate-500">{log.timestamp}</td>
                                    <td className="px-6 py-6">
                                        <p className="text-xs font-black text-white tracking-tight">{log.user}</p>
                                        <p className="text-[8px] font-bold text-red-500/60 tracking-widest">{log.role} {log.dept}</p>
                                    </td>
                                    <td className="px-6 py-6">
                                        <div className="flex items-center gap-2">
                                            {log.action.includes('DOWNLOAD') ? <Download className="w-3 h-3 text-blue-500" /> : <PlusCircle className="w-3 h-3 text-emerald-500" />}
                                            <span className="text-[10px] font-black text-slate-300">{log.action}</span>
                                        </div>
                                    </td>
                                    <td className="px-10 py-6 text-right">
                                        <span className="text-[10px] font-black text-white bg-white/5 px-3 py-1 rounded-lg border border-white/5">{log.target}</span>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            loginLogs.map((log) => (
                                <tr key={log.id} className="hover:bg-red-600/5 transition-colors group">
                                    <td className="px-10 py-6 text-[10px] font-black text-slate-500">{log.timestamp}</td>
                                    <td className="px-6 py-6">
                                        <p className="text-xs font-black text-white tracking-tight">{log.user}</p>
                                        <p className="text-[8px] font-bold text-slate-600 tracking-widest">{log.role}</p>
                                    </td>
                                    <td className="px-6 py-6">
                                        <div className="flex items-center gap-2 text-indigo-400 font-mono text-[10px] font-black">
                                            <Globe className="w-3 h-3" /> {log.ipAddress}
                                        </div>
                                    </td>
                                    <td className="px-10 py-6 text-right flex flex-col items-end gap-1">
                                        <span className={`text-[8px] font-black px-2 py-0.5 rounded border ${log.status === 'SUCCESS' ? 'text-emerald-500 border-emerald-500/20 bg-emerald-500/5' : 'text-red-500 border-red-500/20 bg-red-500/5'}`}>
                                            {log.status}
                                        </span>
                                        <p className="text-[8px] font-black text-slate-600 tracking-tighter">{log.device}</p>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>

        {/* FOOTER AUDIT STAMP */}
        <footer className="px-12 py-6 border-t border-white/5 bg-[#020617] flex justify-between items-center">
            <p className="text-[8px] font-black text-slate-600 tracking-[0.4em]">SYSTEM LOGS ARE PERMANENT AND IMMUTABLE</p>
            <div className="flex items-center gap-2">
                <ShieldAlert className="w-3 h-3 text-red-600" />
                <span className="text-[8px] font-black text-red-600 tracking-widest">ENCRYPTED AT REST</span>
            </div>
        </footer>
      </section>
    </main>
  );
}
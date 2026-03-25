'use client';

import React from 'react';
import { AdminSidebar } from '../../../components/(Admin)/Sidebar';
import { 
  BarChart3, 
  Download, 
  ShieldCheck, 
  Database, 
  FileJson, 
  FileSpreadsheet, 
  FileText,
  Calendar,
  Lock,
  ChevronRight,
  Zap
} from 'lucide-react';

export default function AdminReportsPage() {
  return (
    <main className="h-screen w-full flex bg-[#020617] text-slate-200 overflow-hidden font-sans uppercase">
      <AdminSidebar />

      <section className="flex-1 flex flex-col overflow-y-auto bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-red-900/10 via-[#020617] to-[#020617]">
        
        {/* HEADER */}
        <header className="px-12 py-10 border-b border-white/5 flex justify-between items-end backdrop-blur-md sticky top-0 z-20 bg-[#020617]/80">
          <div>
            <div className="flex items-center gap-2 text-red-500 mb-2">
                <Database className="w-4 h-4" strokeWidth={3} />
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Master Data Access</span>
            </div>
            <h1 className="text-4xl font-black text-white tracking-tighter uppercase">
              Global <span className="text-red-600">Repository</span>
            </h1>
          </div>

          <div className="flex gap-4">
            <button className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">
                <Calendar className="w-4 h-4 text-red-500" /> FULL ARCHIVE 2026
            </button>
          </div>
        </header>

        <div className="p-12 max-w-[1600px] w-full mx-auto space-y-10">
          
          {/* SYSTEM INTEGRITY CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { label: 'DB UPTIME', val: '99.99%', icon: ShieldCheck, color: 'text-emerald-500' },
              { label: 'TOTAL ACCOUNTS', val: '1,284', icon: Zap, color: 'text-red-400' },
              { label: 'DATA BREACHES', val: '0', icon: Lock, color: 'text-white' },
              { label: 'STORAGE USED', val: '64.2GB', icon: Database, color: 'text-blue-400' },
            ].map((stat, i) => (
              <div key={i} className="bg-slate-900/40 border border-white/5 p-8 rounded-[2.5rem] backdrop-blur-3xl group hover:border-red-500/30 transition-all">
                <div className="flex justify-between items-start mb-6 text-slate-700 group-hover:text-red-500 transition-colors">
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <p className="text-[9px] font-black text-slate-500 tracking-widest mb-1">{stat.label}</p>
                <p className="text-3xl font-black tracking-tighter text-white">{stat.val}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            
            {/* MASTER DATA DOWNLOADS */}
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-xs font-black text-red-500 tracking-[0.4em] px-4 flex items-center gap-2">
                <FileText className="w-4 h-4" /> SECURE EXPORT CENTER
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'Full System Audit Log', type: 'JSON', size: '12.4MB', icon: FileJson },
                  { title: 'Global Payroll Ledger', type: 'XLSX', size: '4.8MB', icon: FileSpreadsheet },
                  { title: 'User Permission Map', type: 'PDF', size: '2.1MB', icon: FileText },
                  { title: 'Server Latency Trends', type: 'CSV', size: '540KB', icon: BarChart3 },
                  { title: 'Sensitive Data Access', type: 'PDF', size: '1.2MB', icon: Lock },
                  { title: 'Dept. Performance Agg.', type: 'XLSX', size: '3.5MB', icon: FileSpreadsheet },
                ].map((report, i) => (
                  <div key={i} className="bg-slate-900/20 border border-white/5 p-6 rounded-[2.5rem] flex items-center justify-between hover:bg-white/5 transition-all group">
                    <div className="flex items-center gap-5">
                        <div className="w-12 h-12 rounded-2xl bg-red-600/10 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all">
                            <report.icon className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="text-xs font-black text-white tracking-tight">{report.title}</h4>
                            <p className="text-[8px] font-bold text-slate-600 tracking-widest uppercase">{report.type} {report.size}</p>
                        </div>
                    </div>
                    <button title="DOWNLOAD SECURE" className="p-3 bg-white/5 rounded-xl text-slate-500 hover:text-red-500 transition-colors">
                        <Download className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* DOWNLOAD QUEUE / NOTIFICATIONS */}
            <div className="space-y-6">
              <h3 className="text-xs font-black text-slate-500 tracking-[0.4em] px-4">Export Queue</h3>
              <div className="bg-slate-900/40 border border-white/5 rounded-[3rem] p-8 space-y-8">
                <div className="flex flex-col items-center justify-center py-12 text-center border-2 border-dashed border-white/5 rounded-[2rem]">
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-4">
                        <Download className="w-5 h-5 text-slate-800" />
                    </div>
                    <p className="text-[10px] font-black text-slate-700 tracking-widest uppercase">No Active Downloads</p>
                </div>
                
                <div className="space-y-4">
                    <p className="text-[9px] font-black text-red-500 tracking-widest uppercase px-2">Recent Exports</p>
                    {[
                      { file: 'SYS_LOG_MAR26.JSON', time: '5 MIN AGO' },
                      { file: 'USER_TABLE_FULL.CSV', time: '1 HOUR AGO' },
                    ].map((log, i) => (
                      <div key={i} className="flex justify-between items-center p-4 bg-white/5 rounded-2xl">
                        <span className="text-[10px] font-black text-white tracking-tighter truncate w-32">{log.file}</span>
                        <span className="text-[8px] font-black text-slate-600">{log.time}</span>
                      </div>
                    ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}
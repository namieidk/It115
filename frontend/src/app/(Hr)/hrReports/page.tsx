'use client';

import React from 'react';
import { HRSidebar } from '../../../components/(Hr)/Dashboard/sidebar';
import { 
  BarChart3, 
  Download, 
  PieChart, 
  TrendingDown, 
  Users, 
  FileSpreadsheet, 
  FileText,
  Calendar,
  ChevronRight,
  Activity
} from 'lucide-react';

export default function HRReportsPage() {
  return (
    <main className="h-screen w-full flex bg-[#020617] text-slate-200 overflow-hidden font-sans uppercase">
      <HRSidebar />

      <section className="flex-1 flex flex-col overflow-y-auto bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-900/10 via-[#020617] to-[#020617]">
        
        {/* HEADER */}
        <header className="px-12 py-10 border-b border-white/5 flex justify-between items-end backdrop-blur-md sticky top-0 z-20 bg-[#020617]/80">
          <div>
            <div className="flex items-center gap-2 text-indigo-500 mb-2">
                <BarChart3 className="w-4 h-4" strokeWidth={3} />
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Analytics & Intelligence</span>
            </div>
            <h1 className="text-4xl font-black text-white tracking-tighter uppercase">
              Operational <span className="text-indigo-600">Reports</span>
            </h1>
          </div>

          <div className="flex gap-4">
            <button className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">
                <Calendar className="w-4 h-4 text-indigo-500" /> Q1 2026 PERIOD
            </button>
          </div>
        </header>

        <div className="p-12 max-w-[1600px] w-full mx-auto space-y-10">
          
          {/* ANALYTICS SUMMARY CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { label: 'RETENTION RATE', val: '94.2%', icon: Activity, color: 'text-emerald-500' },
              { label: 'AVG. TIME TO HIRE', val: '18 DAYS', icon: Users, color: 'text-indigo-400' },
              { label: 'LABOR COST VAR.', val: '+2.4%', icon: TrendingDown, color: 'text-orange-400' },
              { label: 'EVALUATION COMPLETION', val: '88%', icon: PieChart, color: 'text-blue-400' },
            ].map((stat, i) => (
              <div key={i} className="bg-slate-900/40 border border-white/5 p-8 rounded-[2.5rem] backdrop-blur-3xl group hover:border-indigo-500/30 transition-all">
                <div className="flex justify-between items-start mb-6">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                        <stat.icon className={`w-5 h-5 ${stat.color}`} />
                    </div>
                </div>
                <p className="text-[9px] font-black text-slate-500 tracking-widest mb-1">{stat.label}</p>
                <p className="text-3xl font-black tracking-tighter text-white">{stat.val}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            
            {/* GENERATE REPORTS SECTION */}
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-xs font-black text-indigo-500 tracking-[0.4em] px-4">Available Documentation</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'Full Employee Census', type: 'XLSX', size: '2.4MB', icon: FileSpreadsheet },
                  { title: 'Attendance Analytics', type: 'PDF', size: '1.1MB', icon: FileText },
                  { title: 'Payroll Summary (Current)', type: 'XLSX', size: '840KB', icon: FileSpreadsheet },
                  { title: 'Performance Review Audit', type: 'PDF', size: '4.2MB', icon: FileText },
                  { title: 'Attrition & Exit Survey', type: 'CSV', size: '150KB', icon: BarChart3 },
                  { title: 'Recruitment Funnel Report', type: 'PDF', size: '2.8MB', icon: FileText },
                ].map((report, i) => (
                  <div key={i} className="bg-slate-900/20 border border-white/5 p-6 rounded-[2.5rem] flex items-center justify-between hover:bg-white/5 transition-all group">
                    <div className="flex items-center gap-5">
                        <div className="w-12 h-12 rounded-2xl bg-indigo-600/10 flex items-center justify-center text-indigo-500 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                            <report.icon className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="text-xs font-black text-white tracking-tight">{report.title}</h4>
                            <p className="text-[8px] font-bold text-slate-600 tracking-widest">{report.type}  {report.size}</p>
                        </div>
                    </div>
                    <button className="p-3 bg-white/5 rounded-xl text-slate-500 hover:text-indigo-400 transition-colors">
                        <Download className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* RECENT DOWNLOADS & ACTIVITY */}
            <div className="space-y-6">
              <h3 className="text-xs font-black text-indigo-500 tracking-[0.4em] px-4">System Activity</h3>
              <div className="bg-slate-900/40 border border-white/5 rounded-[3rem] p-8 space-y-8">
                {[
                  { user: 'HR ADMIN 01', action: 'EXPORTED PAYROLL', time: '12 MIN AGO' },
                  { user: 'SYSTEM', action: 'AUTO-GEN ATTENDANCE', time: '1 HOUR AGO' },
                  { user: 'HR ADMIN 02', action: 'MODIFIED EVAL SCALE', time: '4 HOURS AGO' },
                  { user: 'HR ADMIN 01', action: 'PRINTED APPLICANT LIST', time: 'YESTERDAY' },
                ].map((log, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-white/5 pb-6 last:border-0 last:pb-0">
                    <div>
                        <p className="text-[10px] font-black text-white tracking-widest mb-1">{log.action}</p>
                        <p className="text-[8px] font-bold text-slate-600 tracking-widest">{log.user}</p>
                    </div>
                    <span className="text-[8px] font-black text-indigo-500">{log.time}</span>
                  </div>
                ))}
                <button className="w-full py-4 border border-white/5 rounded-2xl text-[8px] font-black text-slate-500 tracking-widest hover:bg-white/5 transition-all flex items-center justify-center gap-2">
                    VIEW GLOBAL AUDIT LOG <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}
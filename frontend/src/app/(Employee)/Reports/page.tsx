'use client';

import React from 'react';
import { Sidebar } from '../../../components/(Employee)/Dashboard/Sidebar'; 
import { 
  BarChart3, 
  FileText, 
  Download, 
  Filter, 
  Calendar, 
  TrendingUp, 
  PieChart, 
  ArrowUpRight,
  ExternalLink
} from 'lucide-react';

const reportLogs = [
  { id: 'REP-001', name: 'MONTHLY PERFORMANCE AUDIT', date: 'MAR 01, 2026', type: 'KPI SUMMARY', status: 'VERIFIED' },
  { id: 'REP-002', name: 'QA CALL MONITORING LOGS', date: 'FEB 25, 2026', type: 'QUALITY SCORE', status: 'VERIFIED' },
  { id: 'REP-003', name: 'ATTENDANCE DISCREPANCY', date: 'FEB 15, 2026', type: 'HR REPORT', status: 'PENDING' },
  { id: 'REP-004', name: 'ANNUAL COMPLIANCE CHECK', date: 'JAN 10, 2026', type: 'LEGAL', status: 'ARCHIVED' },
];

export default function ReportsPage() {
  return (
    <main className="h-screen w-full flex bg-[#020617] text-slate-200 overflow-hidden font-sans uppercase">
      {/* GLOBAL SIDEBAR */}
      <Sidebar />

      <section className="flex-1 flex flex-col overflow-y-auto bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/10 via-[#020617] to-[#020617]">
        
        {/* HEADER SECTION */}
        <header className="px-12 py-10 border-b border-white/5 flex justify-between items-end backdrop-blur-xl sticky top-0 z-20 bg-[#020617]/80">
          <div>
            <div className="flex items-center gap-2 text-emerald-500 mb-2">
                <BarChart3 className="w-4 h-4" strokeWidth={3} />
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Analytics Engine</span>
            </div>
            <h1 className="text-4xl font-black text-white tracking-tighter uppercase">
              System <span className="text-emerald-500">Reports</span>
            </h1>
          </div>

          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">
                <Filter className="w-4 h-4" /> Filter Category
            </button>
            <button className="flex items-center gap-2 px-6 py-4 bg-emerald-500 text-slate-950 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/20">
                <Calendar className="w-4 h-4" /> Date Range
            </button>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <div className="p-12 max-w-[1600px] w-full mx-auto space-y-10">
          
          {/* TOP TRENDS CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-900/40 border border-white/5 p-8 rounded-[3rem] relative overflow-hidden group">
               <TrendingUp className="absolute top-6 right-8 w-12 h-12 text-emerald-500/10 group-hover:scale-125 transition-transform duration-500" />
               <p className="text-[10px] font-black text-slate-500 tracking-[0.3em] mb-4">Overall KPI Trend</p>
               <div className="flex items-end gap-4">
                  <span className="text-5xl font-black text-white tracking-tighter">+12.4%</span>
                  <span className="text-emerald-500 font-black text-xs mb-2 flex items-center gap-1">
                    <ArrowUpRight className="w-4 h-4" /> GROWTH
                  </span>
               </div>
            </div>

            <div className="bg-slate-900/40 border border-white/5 p-8 rounded-[3rem] relative overflow-hidden group">
               <PieChart className="absolute top-6 right-8 w-12 h-12 text-blue-500/10 group-hover:scale-125 transition-transform duration-500" />
               <p className="text-[10px] font-black text-slate-500 tracking-[0.3em] mb-4">Quality Score AVG</p>
               <div className="flex items-end gap-4">
                  <span className="text-5xl font-black text-white tracking-tighter">98.2</span>
                  <span className="text-blue-400 font-black text-xs mb-2 uppercase tracking-widest">Target Met</span>
               </div>
            </div>

            <div className="bg-emerald-500 p-8 rounded-[3rem] text-slate-950 flex flex-col justify-between">
                <div>
                  <p className="text-[10px] font-black opacity-60 uppercase tracking-[0.3em] mb-2">Available Credits</p>
                  <p className="text-4xl font-black tracking-tighter uppercase">Annual Bonus</p>
                </div>
                <button className="mt-6 flex items-center justify-between bg-slate-950 text-white px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:scale-[1.02] transition-all">
                  Claim Breakdown <ExternalLink className="w-4 h-4" />
                </button>
            </div>
          </div>

          {/* GENERATED REPORTS TABLE */}
          <div className="bg-slate-900/20 border border-white/5 rounded-[3rem] overflow-hidden backdrop-blur-3xl shadow-2xl">
            <div className="px-10 py-8 border-b border-white/5 flex justify-between items-center bg-white/5">
                <h3 className="text-xs font-black uppercase tracking-[0.4em] text-white">Generated Document History</h3>
                <FileText className="w-5 h-5 text-slate-500" />
            </div>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-[10px] uppercase tracking-[0.25em] text-slate-500 font-black border-b border-white/5">
                  <th className="px-10 py-6 font-black">ID</th>
                  <th className="px-10 py-6 font-black">Document Name</th>
                  <th className="px-10 py-6 font-black">Generation Date</th>
                  <th className="px-10 py-6 font-black text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-bold">
                {reportLogs.map((report) => (
                  <tr key={report.id} className="hover:bg-white/5 transition-all group cursor-pointer">
                    <td className="px-10 py-8 text-[10px] font-black text-slate-500 font-mono tracking-widest">{report.id}</td>
                    <td className="px-10 py-8">
                      <div className="flex flex-col">
                        <span className="text-xs font-black text-white tracking-tight uppercase group-hover:text-emerald-400 transition-colors">{report.name}</span>
                        <span className="text-[9px] text-slate-600 font-black tracking-widest mt-1 uppercase">{report.type}</span>
                      </div>
                    </td>
                    <td className="px-10 py-8 text-[10px] font-black text-slate-500 tracking-tighter uppercase">{report.date}</td>
                    <td className="px-10 py-8 text-right">
                      <button className="inline-flex items-center gap-2 text-[10px] font-black text-emerald-500 uppercase tracking-[0.2em] border border-emerald-500/20 px-4 py-2 rounded-xl hover:bg-emerald-500 hover:text-slate-950 transition-all">
                        <Download className="w-3.5 h-3.5" /> GET PDF
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* SYSTEM FOOTER ALERT */}
          <div className="p-8 bg-slate-900/50 border border-white/5 rounded-[2.5rem] flex items-center gap-6">
            <div className="h-12 w-12 rounded-2xl bg-slate-950 flex items-center justify-center text-emerald-500 border border-white/10">
                <BarChart3 className="w-6 h-6" />
            </div>
            <div className="flex-1">
                <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest leading-relaxed">
                  Daily logs are archived every 24 hours. For customized report requests, please contact the <span className="text-emerald-500 underline cursor-pointer">Data Administration Unit</span>.
                </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
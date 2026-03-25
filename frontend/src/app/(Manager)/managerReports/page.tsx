'use client';

import React from 'react';
import { ManagerSidebar } from '../../../components/(Manager)/Dashboard/ManagerSidebar';
import { 
  BarChart3, 
  Download, 
  TrendingUp, 
  Users, 
  Clock, 
  FileText, 
  ChevronRight,
  PieChart,
  Activity
} from 'lucide-react';

// 1. Defined Interfaces for TypeScript compliance
interface ReportMetric {
  label: string;
  value: string;
  trend: string;
  isPositive: boolean;
}

const reportMetrics: ReportMetric[] = [
  { label: 'AVERAGE HANDLE TIME', value: '342S', trend: '-12%', isPositive: true },
  { label: 'TEAM ATTENDANCE RATE', value: '98.4%', trend: '+2.1%', isPositive: true },
  { label: 'CSAT SCORE AVG', value: '4.85', trend: '+0.05', isPositive: true },
  { label: 'ATTRITION RISK', value: 'LOW', trend: 'STABLE', isPositive: true },
];

export default function ManagerReportsPage() {
  return (
    <main className="h-screen w-full flex bg-[#020617] text-slate-200 overflow-hidden font-sans uppercase">
      {/* GLOBAL MANAGER SIDEBAR */}
      <ManagerSidebar />

      <section className="flex-1 flex flex-col overflow-y-auto bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-blue-900/10 via-[#020617] to-[#020617]">
        
        {/* HEADER */}
        <header className="px-12 py-10 border-b border-white/5 flex justify-between items-end backdrop-blur-md sticky top-0 z-20 bg-[#020617]/80">
          <div>
            <div className="flex items-center gap-2 text-blue-500 mb-2">
                <BarChart3 className="w-4 h-4" strokeWidth={3} />
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Data Intelligence</span>
            </div>
            <h1 className="text-4xl font-black text-white tracking-tighter uppercase">
              Operations <span className="text-blue-600">Analytics</span>
            </h1>
          </div>

          <div className="flex gap-4">
            <button className="flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20">
                <Download className="w-4 h-4" /> Generate Full Audit
            </button>
          </div>
        </header>

        <div className="p-12 max-w-[1600px] w-full mx-auto space-y-10">
          
          {/* TOP KPI ROW */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {reportMetrics.map((metric, i) => (
              <div key={i} className="bg-slate-900/40 border border-white/5 p-8 rounded-[2.5rem] backdrop-blur-3xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <p className="text-[9px] font-black text-slate-500 tracking-widest mb-3">{metric.label}</p>
                <div className="flex items-end justify-between">
                    <h2 className="text-3xl font-black text-white tracking-tighter">{metric.value}</h2>
                    <span className={`text-[10px] font-black ${metric.isPositive ? 'text-emerald-500' : 'text-red-500'}`}>
                        {metric.trend}
                    </span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* PERFORMANCE CHART PLACEHOLDER */}
            <div className="lg:col-span-2 bg-slate-900/20 border border-white/5 rounded-[3.5rem] p-10 flex flex-col justify-between min-h-[500px]">
               <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xs font-black text-white tracking-[0.3em] mb-1">PROFILING TRENDS</h3>
                    <p className="text-[9px] font-black text-slate-500 tracking-widest uppercase">MARCH 2026 PERFORMANCE OVERVIEW</p>
                  </div>
                  <div className="flex gap-2">
                     <div className="flex items-center gap-2 px-3 py-1 bg-blue-500/10 rounded-lg border border-blue-500/20">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        <span className="text-[8px] font-black text-blue-400">KPI TARGET</span>
                     </div>
                  </div>
               </div>

               {/* Mock Graph Visual */}
               <div className="flex-1 flex items-end gap-4 pt-12">
                  {[40, 70, 45, 90, 65, 85, 100, 75, 50, 80, 95, 60].map((height, i) => (
                    <div key={i} className="flex-1 bg-white/5 rounded-t-xl relative group">
                        <div 
                          className="absolute bottom-0 left-0 w-full bg-blue-600/40 group-hover:bg-blue-500 transition-all rounded-t-xl" 
                          style={{ height: `${height}%` }}
                        ></div>
                    </div>
                  ))}
               </div>
               <div className="flex justify-between pt-6 text-[8px] font-black text-slate-600 tracking-widest">
                  <span>WEEK 01</span>
                  <span>WEEK 02</span>
                  <span>WEEK 03</span>
                  <span>WEEK 04</span>
               </div>
            </div>

            {/* DOWNLOADABLE MODULES */}
            <div className="space-y-6">
               <h3 className="text-xs font-black text-blue-500 tracking-[0.4em] px-4 flex items-center gap-3">
                  <FileText className="w-4 h-4" /> Archive Retrieval
               </h3>
               <div className="space-y-4">
                  {[
                    { title: 'PAYROLL DISBURSEMENT LOGS', size: '2.4 MB', icon: Activity },
                    { title: 'TEAM EVALUATION SUMMARY', size: '1.1 MB', icon: PieChart },
                    { title: 'ATTENDANCE VIOLATION REPORT', size: '840 KB', icon: Clock },
                    { title: 'SYSTEM ACCESS AUDIT', size: '4.2 MB', icon: Users },
                  ].map((report, i) => (
                    <div key={i} className="bg-slate-900/40 border border-white/5 p-6 rounded-[2rem] flex items-center justify-between group hover:border-blue-500/30 transition-all cursor-pointer">
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-xl bg-white/5 text-slate-500 group-hover:text-blue-500 transition-colors">
                                <report.icon className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-white tracking-tight">{report.title}</p>
                                <p className="text-[8px] font-black text-slate-600 tracking-widest uppercase">{report.size}  PDF</p>
                            </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-700 group-hover:text-white" />
                    </div>
                  ))}
               </div>

               <div className="p-8 bg-blue-600/5 border border-blue-600/10 rounded-[2.5rem] flex items-start gap-4">
                  <TrendingUp className="w-5 h-5 text-blue-400 mt-1" />
                  <p className="text-[9px] font-black text-blue-400 tracking-widest leading-relaxed">
                    YOUR TEAM IS CURRENTLY PERFORMING 8% ABOVE THE DEPARTMENTAL QUOTA FOR Q1 2026.
                  </p>
               </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
'use client';
import { Sidebar } from '../../../components/(Employee)/Dashboard/Sidebar';
import { AttendanceTable } from '../../../components/(Employee)/Attendance/Attendancetable';
import { Calendar, Download, Filter, Info } from 'lucide-react';

export default function AttendancePage() {
  return (
    <main className="h-screen w-full flex bg-[#020617] text-slate-200 overflow-hidden font-sans">
      <Sidebar />
      <section className="flex-1 flex flex-col overflow-y-auto bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-900/10 via-[#020617] to-[#020617]">
        
        {/* Header */}
        <header className="px-10 py-8 flex justify-between items-end border-b border-white/5 backdrop-blur-md sticky top-0 z-20">
          <div>
            <div className="flex items-center gap-2 text-emerald-500 mb-2">
                <Calendar className="w-4 h-4" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">System Records</span>
            </div>
            <h1 className="text-3xl font-black text-white tracking-tighter uppercase">
              Attendance <span className="text-emerald-500">Logs</span>
            </h1>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-5 py-3 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition">
              <Filter className="w-4 h-4" /> Filter Period
            </button>
            <button className="flex items-center gap-2 px-5 py-3 bg-emerald-500 text-slate-950 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-400 transition shadow-lg shadow-emerald-500/20">
              <Download className="w-4 h-4" /> Export Data
            </button>
          </div>
        </header>

        {/* Content Area */}
        <div className="p-10 max-w-[1600px] w-full mx-auto space-y-8">
          {/* Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {[
               { label: 'Total Hours', val: '164.5', unit: 'HRS', color: 'text-white' },
               { label: 'Late Instances', val: '02', unit: 'SHIFTS', color: 'text-orange-400' },
               { label: 'Compliance Score', val: '94%', unit: 'EXCELLENT', color: 'text-emerald-400' }
             ].map((stat, i) => (
               <div key={i} className="bg-slate-900/60 p-7 rounded-[2.5rem] border border-white/5 backdrop-blur-3xl">
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">{stat.label}</p>
                  <p className={`text-3xl font-black ${stat.color} tracking-tighter`}>
                    {stat.val} <span className="text-[10px] text-slate-600 font-bold uppercase tracking-normal ml-1">{stat.unit}</span>
                  </p>
               </div>
             ))}
          </div>

          <AttendanceTable />

          {/* Info Banner */}
          <div className="flex items-start gap-4 p-6 bg-blue-500/5 border border-blue-500/10 rounded-[2rem]">
            <Info className="w-5 h-5 text-blue-400 flex-shrink-0" />
            <p className="text-[11px] text-slate-400 leading-relaxed font-bold uppercase tracking-tight">
                Attention: Discrepancies in shift logs must be reported to the HR department within 48 hours for payroll synchronization.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}   
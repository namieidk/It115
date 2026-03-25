'use client';

import React from 'react';
import { Sidebar } from '../../../components/(Employee)/Dashboard/Sidebar';
import { 
  FilePlus, 
  Send, 
  Calendar, 
  Info, 
  Clock, 
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export default function LeaveRequestPage() {
  return (
    <main className="h-screen w-full flex bg-[#020617] text-slate-200 overflow-hidden font-sans uppercase">
      <Sidebar />

      <section className="flex-1 flex flex-col overflow-y-auto bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/10 via-[#020617] to-[#020617]">
        
        {/* HEADER */}
        <header className="px-12 py-10 border-b border-white/5 flex justify-between items-end backdrop-blur-xl sticky top-0 z-20 bg-[#020617]/80">
          <div>
            <div className="flex items-center gap-2 text-emerald-500 mb-2">
                <FilePlus className="w-4 h-4" strokeWidth={3} />
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Request Submission</span>
            </div>
            <h1 className="text-4xl font-black text-white tracking-tighter uppercase">
              Apply For <span className="text-emerald-500">Leave</span>
            </h1>
          </div>
          
          <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl">
            <div className="text-right">
                <p className="text-[8px] font-black text-slate-500 tracking-widest">Available Credits</p>
                <p className="text-lg font-black text-white">12.5 DAYS</p>
            </div>
            <div className="h-8 w-px bg-white/10"></div>
            <Calendar className="text-emerald-500 w-6 h-6" />
          </div>
        </header>

        <div className="p-12 max-w-[1200px] w-full mx-auto space-y-10">
          
          {/* APPLICATION FORM */}
          <div className="bg-slate-900/40 border border-white/5 rounded-[3.5rem] p-12 shadow-2xl space-y-10">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Leave Type */}
              <div className="space-y-4">
                <label className="text-[10px] font-black text-emerald-500 tracking-[0.3em]">Select Leave Category</label>
                <select className="w-full bg-slate-950 border border-white/10 rounded-2xl p-5 text-xs font-black tracking-widest text-white outline-none focus:border-emerald-500/50 appearance-none">
                  <option>SICK LEAVE (SL)</option>
                  <option>VACATION LEAVE (VL)</option>
                  <option>EMERGENCY LEAVE (EL)</option>
                  <option>BEREAVEMENT LEAVE</option>
                  <option>MATERNITY/PATERNITY</option>
                </select>
              </div>

              {/* Date Selection */}
              <div className="space-y-4">
                <label className="text-[10px] font-black text-emerald-500 tracking-[0.3em]">Inclusive Dates</label>
                <div className="flex gap-4">
                    <input type="date" className="flex-1 bg-slate-950 border border-white/10 rounded-2xl p-5 text-xs font-black text-white outline-none focus:border-emerald-500/50" />
                    <div className="flex items-center text-slate-600 font-black">TO</div>
                    <input type="date" className="flex-1 bg-slate-950 border border-white/10 rounded-2xl p-5 text-xs font-black text-white outline-none focus:border-emerald-500/50" />
                </div>
              </div>
            </div>

            {/* Reason/Justification */}
            <div className="space-y-4">
                <label className="text-[10px] font-black text-emerald-500 tracking-[0.3em]">Justification / Reason for absence</label>
                <textarea 
                    placeholder="ENTER DETAILED REASON FOR LEAVE APPLICATION..."
                    className="w-full h-40 bg-slate-950 border border-white/10 rounded-[2.5rem] p-8 text-xs font-black tracking-widest text-white outline-none focus:border-emerald-500/50 placeholder:text-slate-800"
                />
            </div>

            {/* Submit Section */}
            <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-white/5 gap-6">
                <div className="flex items-center gap-4 text-slate-500">
                    <Info className="w-5 h-5 text-blue-400" />
                    <p className="text-[9px] font-black tracking-widest max-w-sm">
                        NOTE: APPROVAL IS SUBJECT TO OPERATIONS CAPACITY AND MANAGER REVIEW.
                    </p>
                </div>
                <button className="w-full md:w-auto flex items-center justify-center gap-3 px-12 py-5 bg-emerald-500 text-slate-950 rounded-2xl font-black text-xs tracking-[0.2em] hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/20 active:scale-95">
                    <Send className="w-4 h-4" strokeWidth={3} /> TRANSMIT REQUEST
                </button>
            </div>
          </div>

          {/* RECENT REQUEST STATUS */}
          <div className="space-y-6">
            <h3 className="text-xs font-black text-white tracking-[0.4em] px-4">Request History</h3>
            <div className="bg-slate-900/20 border border-white/5 rounded-[3rem] overflow-hidden">
                {[
                    { type: 'SICK LEAVE', date: 'MAR 10, 2026', status: 'APPROVED', color: 'text-emerald-500', icon: CheckCircle2 },
                    { type: 'VACATION LEAVE', date: 'FEB 14, 2026', status: 'PENDING', color: 'text-orange-400', icon: Clock },
                    { type: 'EMERGENCY LEAVE', date: 'JAN 05, 2026', status: 'DENIED', color: 'text-red-500', icon: AlertCircle },
                ].map((log, i) => (
                    <div key={i} className="px-10 py-6 flex justify-between items-center hover:bg-white/5 transition-all border-b border-white/5 last:border-0">
                        <div>
                            <p className="text-xs font-black text-white tracking-tight uppercase">{log.type}</p>
                            <p className="text-[9px] font-black text-slate-600 tracking-widest uppercase mt-1">SUBMITTED: {log.date}</p>
                        </div>
                        <div className={`flex items-center gap-2 text-[10px] font-black tracking-[0.2em] ${log.color}`}>
                            <log.icon className="w-4 h-4" />
                            {log.status}
                        </div>
                    </div>
                ))}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
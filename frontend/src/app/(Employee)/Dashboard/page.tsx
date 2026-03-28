'use client';

import React from 'react';
import { Zap, ExternalLink, BarChart3 } from 'lucide-react';

import { Sidebar } from '../../../components/(Employee)/Dashboard/Sidebar';
import { StatCards } from '../../../components/(Employee)/Dashboard/StatCard';
import { NavbarWrapper } from '../../../components/(Employee)/Dashboard/NavbarWrapper';
import { SessionGuard } from '@/src/components/SessionGuard';

export default function EmployeeDashboard() {
  return (
    <SessionGuard allowedRoles={['EMPLOYEE']}>
      <main className="h-screen w-full flex bg-[#020617] text-slate-200 overflow-hidden font-sans uppercase">
        <Sidebar />

        <section className="flex-1 flex flex-col overflow-y-auto bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/10 via-[#020617] to-[#020617] custom-scrollbar">
          
          {/* ✅ NavbarWrapper instead of Navbar — prevents hydration error */}
          <NavbarWrapper />

          <div className="p-10 max-w-[1600px] w-full mx-auto">
            <StatCards />

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
              {/* FEED AREA */}
              <div className="xl:col-span-2 space-y-6">
                <div className="bg-slate-900/40 border border-white/5 rounded-[3rem] p-10 backdrop-blur-3xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-[0.03]">
                    <Zap className="w-40 h-40 text-indigo-500" />
                  </div>
                  
                  <div className="flex justify-between items-center mb-8 relative z-10">
                    <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white">Performance Analytics Feed</h3>
                    <button className="text-[10px] font-bold text-slate-500 hover:text-indigo-400 flex items-center gap-1 uppercase tracking-widest transition-colors">
                      History <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>

                  <div className="space-y-4 relative z-10">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center justify-between p-5 bg-white/5 rounded-3xl border border-white/5 hover:border-indigo-500/30 transition-all cursor-pointer group/item">
                        <div className="flex items-center gap-5">
                          <div className="h-12 w-12 rounded-2xl bg-slate-950 flex items-center justify-center text-indigo-500 border border-white/5">
                            <BarChart3 className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-sm font-black text-white uppercase tracking-tight group-hover/item:text-indigo-400 transition-colors">Weekly Performance Audit</p>
                            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">System Verified // ID: {i}092</p>
                          </div>
                        </div>
                        <ExternalLink className="w-4 h-4 text-slate-700 group-hover/item:text-indigo-500 transition-colors" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* SHIFT STATUS */}
              <div className="space-y-6">
                <div className="bg-indigo-600 p-10 rounded-[3rem] text-white flex flex-col items-center text-center relative overflow-hidden shadow-2xl shadow-indigo-600/20">
                  <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/10 blur-[50px] rounded-full" />
                  <h3 className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 text-white/60 relative z-10 font-sans">Shift Timer</h3>
                  <div className="text-5xl font-black tracking-tighter mb-8 font-mono relative z-10">07:22:14</div>
                  <button className="w-full py-5 bg-slate-950 text-white rounded-[2rem] font-black uppercase text-[10px] tracking-[0.2em] flex items-center justify-center gap-3 shadow-2xl hover:bg-slate-900 transition-all relative z-10 border border-white/5">
                    <Zap className="w-4 h-4 text-indigo-400" fill="currentColor" />
                    Clock Out Securely
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </SessionGuard>
  );
}
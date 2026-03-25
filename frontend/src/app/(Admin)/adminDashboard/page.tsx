'use client';

import React from 'react';
import { AdminSidebar } from '../../../components/(Admin)/Sidebar';
import { 
  ShieldAlert, 
  Activity, 
  Users, 
  Server, 
  Lock, 
  Database, 
  Cpu, 
  Globe,
  ArrowUpRight,
  AlertCircle
} from 'lucide-react';

export default function AdminDashboardPage() {
  return (
    <main className="h-screen w-full flex bg-[#020617] text-slate-200 overflow-hidden font-sans uppercase">
      {/* SIDEBAR WITH REQUESTED LINKS */}
      <AdminSidebar />

      <section className="flex-1 flex flex-col overflow-y-auto bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-900/10 via-[#020617] to-[#020617]">
        
        {/* HEADER */}
        <header className="px-12 py-10 border-b border-white/5 flex justify-between items-end backdrop-blur-md sticky top-0 z-20 bg-[#020617]/80">
          <div>
            <div className="flex items-center gap-2 text-red-500 mb-2">
                <ShieldAlert className="w-4 h-4" strokeWidth={3} />
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Root Level Access</span>
            </div>
            <h1 className="text-4xl font-black text-white tracking-tighter uppercase">
              Admin <span className="text-red-600">Console</span>
            </h1>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-right">
                <p className="text-[8px] font-black text-slate-500 tracking-widest">SYSTEM STATUS</p>
                <p className="text-[10px] font-black text-emerald-500 tracking-widest flex items-center gap-2 justify-end">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" /> ALL SYSTEMS OPERATIONAL
                </p>
            </div>
          </div>
        </header>

        <div className="p-12 max-w-[1600px] w-full mx-auto space-y-10">
          
          {/* SYSTEM HEALTH METRICS */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { label: 'CPU LOAD', val: '12%', icon: Cpu, color: 'text-white' },
              { label: 'MEM USAGE', val: '4.2GB', icon: Database, color: 'text-white' },
              { label: 'ACTIVE SESSIONS', val: '842', icon: Globe, color: 'text-indigo-400' },
              { label: 'SECURITY ALERTS', val: '0', icon: Lock, color: 'text-emerald-500' },
            ].map((stat, i) => (
              <div key={i} className="bg-slate-900/40 border border-white/5 p-8 rounded-[2.5rem] backdrop-blur-3xl flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div>
                    <p className="text-[9px] font-black text-slate-500 tracking-widest mb-1">{stat.label}</p>
                    <p className="text-2xl font-black text-white tracking-tighter">{stat.val}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            
            {/* CORE ACTIONS */}
            <div className="lg:col-span-2 space-y-8">
              <h3 className="text-xs font-black text-red-500 tracking-[0.4em] px-4 flex items-center gap-3">
                <Server className="w-4 h-4" /> Infrastructure Management
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-900/20 border border-white/5 p-10 rounded-[3rem] hover:border-red-500/30 transition-all group">
                    <Users className="w-10 h-10 text-red-500 mb-6" />
                    <h4 className="text-xl font-black text-white mb-2">Manage Accounts</h4>
                    <p className="text-[9px] font-bold text-slate-500 tracking-widest leading-relaxed mb-6 uppercase">
                        Provision roles, reset credentials, and audit user permissions across the organization.
                    </p>
                    <button className="flex items-center gap-2 text-[10px] font-black text-red-500 tracking-widest group-hover:gap-4 transition-all">
                        ENTER MODULE <ArrowUpRight className="w-4 h-4" />
                    </button>
                </div>

                <div className="bg-slate-900/20 border border-white/5 p-10 rounded-[3rem] hover:border-red-500/30 transition-all group">
                    <Activity className="w-10 h-10 text-red-500 mb-6" />
                    <h4 className="text-xl font-black text-white mb-2">Audit Logs</h4>
                    <p className="text-[9px] font-bold text-slate-500 tracking-widest leading-relaxed mb-6 uppercase">
                        Real-time forensic tracking of every database transaction and system modification.
                    </p>
                    <button className="flex items-center gap-2 text-[10px] font-black text-red-500 tracking-widest group-hover:gap-4 transition-all">
                        VIEW LOGS <ArrowUpRight className="w-4 h-4" />
                    </button>
                </div>
              </div>

              {/* SECURITY OVERVIEW */}
              <div className="bg-red-600/5 border border-red-600/20 p-8 rounded-[3rem] flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-red-600 flex items-center justify-center text-white">
                        <AlertCircle className="w-8 h-8" />
                    </div>
                    <div>
                        <h4 className="text-xs font-black text-white tracking-widest uppercase mb-1">Last Security Patch: Mar 25, 2026</h4>
                        <p className="text-[9px] font-bold text-slate-500 tracking-widest uppercase">System kernel is up to date. No unauthorized login attempts detected.</p>
                    </div>
                </div>
              </div>
            </div>

            {/* RESOURCE USAGE PANEL */}
            <div className="space-y-8">
              <h3 className="text-xs font-black text-slate-500 tracking-[0.4em] px-4">Network Traffic</h3>
              <div className="bg-slate-900/40 border border-white/5 rounded-[3rem] p-10 space-y-10">
                {[
                    { label: 'Uptime', val: '99.99%', sub: '365 DAYS' },
                    { label: 'Latency', val: '14MS', sub: 'CLOUDFLARE EDGE' },
                    { label: 'API Calls', val: '1.2M', sub: 'LAST 24H' },
                ].map((item, i) => (
                    <div key={i} className="space-y-2">
                        <div className="flex justify-between items-end">
                            <span className="text-[9px] font-black text-slate-500 tracking-widest">{item.label}</span>
                            <span className="text-lg font-black text-white tracking-tighter">{item.val}</span>
                        </div>
                        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-red-600 w-3/4" />
                        </div>
                        <p className="text-[8px] font-black text-red-500 tracking-[0.2em]">{item.sub}</p>
                    </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}
'use client';

import React, { useState } from 'react';
import { ManagerSidebar } from '../../../components/(Manager)/Dashboard/ManagerSidebar';
import { 
  CheckSquare, 
  XCircle, 
  CheckCircle2, 
  Clock, 
  User, 
  FileText, 
  Filter,
  AlertCircle,
  Calendar
} from 'lucide-react';

const pendingApprovals = [
  { id: 'REQ-9901', name: 'JONATHAN DEE', type: 'SICK LEAVE', date: 'MAR 26 - 28', reason: 'MEDICAL EMERGENCY - DOCUMENTED', priority: 'HIGH' },
  { id: 'REQ-9902', name: 'MARIA SANTOS', type: 'VACATION LEAVE', date: 'APR 02 - 05', reason: 'FAMILY ENGAGEMENT', priority: 'NORMAL' },
  { id: 'REQ-9903', name: 'KEVIN TAN', type: 'OVERTIME (OT)', date: 'MAR 25', reason: 'PROJECT DEADLINE PUSH', priority: 'NORMAL' },
  { id: 'REQ-9904', name: 'SARAH JENKINS', type: 'LEAVE OF ABSENCE', date: 'MAR 30', reason: 'PERSONAL MATTERS', priority: 'LOW' },
];

export default function ApprovalsPage() {
  return (
    <main className="h-screen w-full flex bg-[#020617] text-slate-200 overflow-hidden font-sans uppercase">
      {/* GLOBAL MANAGER SIDEBAR */}
      <ManagerSidebar />

      <section className="flex-1 flex flex-col overflow-y-auto bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-[#020617] to-[#020617]">
        
        {/* HEADER */}
        <header className="px-12 py-10 border-b border-white/5 flex justify-between items-end backdrop-blur-md sticky top-0 z-20 bg-[#020617]/80">
          <div>
            <div className="flex items-center gap-2 text-blue-500 mb-2">
                <CheckSquare className="w-4 h-4" strokeWidth={3} />
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Administrative Queue</span>
            </div>
            <h1 className="text-4xl font-black text-white tracking-tighter uppercase">
              Pending <span className="text-blue-600">Approvals</span>
            </h1>
          </div>

          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">
                <Filter className="w-4 h-4" /> Filter Type
            </button>
            <div className="px-6 py-4 bg-blue-600/10 border border-blue-600/30 rounded-2xl text-[10px] font-black text-blue-400 tracking-widest">
                {pendingApprovals.length} REQUESTS WAITING
            </div>
          </div>
        </header>

        <div className="p-12 max-w-[1400px] w-full mx-auto space-y-8">
          
          {/* PRIORITY ALERT */}
          <div className="bg-orange-500/10 border border-orange-500/20 p-6 rounded-[2.5rem] flex items-center gap-5">
            <div className="h-12 w-12 rounded-2xl bg-orange-500 flex items-center justify-center text-slate-950 shadow-lg shadow-orange-500/20">
                <AlertCircle className="w-6 h-6" />
            </div>
            <p className="text-[11px] font-black text-orange-400 tracking-widest uppercase leading-tight">
              Action Required: High priority leave requests detected for the current shift cycle.
            </p>
          </div>

          {/* REQUESTS LIST */}
          <div className="space-y-6">
            {pendingApprovals.map((req) => (
              <div key={req.id} className="bg-slate-900/40 border border-white/5 p-8 rounded-[3rem] flex flex-col lg:flex-row lg:items-center justify-between gap-8 hover:border-blue-500/30 transition-all group">
                
                <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-[1.5rem] bg-slate-800 border border-white/5 flex items-center justify-center">
                        <User className="w-8 h-8 text-slate-600" />
                    </div>
                    <div>
                        <div className="flex items-center gap-3 mb-1">
                            <span className="text-xs font-black text-white tracking-tight">{req.name}</span>
                            <span className={`text-[8px] font-black px-2 py-0.5 rounded border ${
                                req.priority === 'HIGH' ? 'bg-red-500/10 text-red-500 border-red-500/20' : 'bg-slate-800 text-slate-500 border-white/5'
                            }`}>
                                {req.priority} PRIORITY
                            </span>
                        </div>
                        <h3 className="text-lg font-black text-blue-400 tracking-tighter mb-2">{req.type}</h3>
                        <div className="flex items-center gap-4 text-[10px] font-black text-slate-500 tracking-widest">
                            <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {req.date}</span>
                            <span className="flex items-center gap-1.5 font-mono">ID: {req.id}</span>
                        </div>
                    </div>
                </div>

                <div className="flex-1 max-w-md bg-white/5 p-5 rounded-2xl border border-white/5">
                    <p className="text-[9px] font-black text-slate-500 tracking-[0.2em] mb-1">REASON / JUSTIFICATION</p>
                    <p className="text-[10px] font-bold text-slate-300 tracking-widest leading-relaxed uppercase">{req.reason}</p>
                </div>

                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black text-red-400 hover:bg-red-500 hover:text-white transition-all tracking-widest group-hover:border-red-500/30">
                        <XCircle className="w-4 h-4" /> REJECT
                    </button>
                    <button className="flex items-center gap-2 px-8 py-4 bg-emerald-500 text-slate-950 rounded-2xl text-[10px] font-black tracking-widest hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/20">
                        <CheckCircle2 className="w-4 h-4" /> APPROVE
                    </button>
                </div>
              </div>
            ))}
          </div>

          {/* BOTTOM AUDIT FOOTER */}
          <div className="flex justify-center py-10">
            <div className="flex items-center gap-2 text-[10px] font-black text-slate-600 tracking-[0.5em] uppercase">
                <FileText className="w-4 h-4" /> All actions are logged for HR Audit
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
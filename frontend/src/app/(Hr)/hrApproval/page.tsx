'use client';

import React, { useState } from 'react';
import { HRSidebar } from '../../../components/(Hr)/Dashboard/sidebar';
import { 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Filter, 
  FileText, 
  User, 
  ShieldCheck,
  ArrowUpRight,
  AlertCircle
} from 'lucide-react';

interface HRApproval {
  id: string;
  requester: string;
  type: 'LEAVE' | 'PROMOTION' | 'RESIGNATION' | 'EXPENSE';
  manager: string;
  date: string;
  status: 'PENDING HR' | 'MANAGER APPROVED';
  priority: 'URGENT' | 'STANDARD';
}

const hrRequests: HRApproval[] = [
  { id: 'REQ-901', requester: 'ALEXANDER WRIGHT', type: 'PROMOTION', manager: 'RICHARD STARK', date: 'MAR 26, 2026', status: 'MANAGER APPROVED', priority: 'URGENT' },
  { id: 'REQ-902', requester: 'MARIA SANTOS', type: 'LEAVE', manager: 'RICHARD STARK', date: 'MAR 27, 2026', status: 'PENDING HR', priority: 'STANDARD' },
  { id: 'REQ-905', requester: 'KEVIN TAN', type: 'RESIGNATION', manager: 'SARAH JENKINS', date: 'APR 01, 2026', status: 'MANAGER APPROVED', priority: 'URGENT' },
  { id: 'REQ-908', requester: 'JULIA CHENG', type: 'EXPENSE', manager: 'SARAH JENKINS', date: 'MAR 25, 2026', status: 'PENDING HR', priority: 'STANDARD' },
];

export default function HRApprovalsPage() {
  const [filter, setFilter] = useState('ALL');

  return (
    <main className="h-screen w-full flex bg-[#020617] text-slate-200 overflow-hidden font-sans uppercase">
      <HRSidebar />

      <section className="flex-1 flex flex-col overflow-y-auto bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/10 via-[#020617] to-[#020617]">
        
        {/* HEADER */}
        <header className="px-12 py-10 border-b border-white/5 flex justify-between items-end backdrop-blur-md sticky top-0 z-20 bg-[#020617]/80">
          <div>
            <div className="flex items-center gap-2 text-indigo-500 mb-2">
                <ShieldCheck className="w-4 h-4" strokeWidth={3} />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-400">Governance & Compliance</span>
            </div>
            <h1 className="text-4xl font-black text-white tracking-tighter uppercase">
              Final <span className="text-indigo-600">Authorizations</span>
            </h1>
          </div>

          <div className="flex gap-4">
             <div className="flex bg-white/5 border border-white/10 rounded-2xl p-1">
                {['ALL', 'URGENT'].map((t) => (
                    <button 
                        key={t}
                        onClick={() => setFilter(t)}
                        className={`px-6 py-3 rounded-xl text-[9px] font-black tracking-[0.2em] transition-all ${
                            filter === t ? 'bg-indigo-600 text-white' : 'text-slate-500 hover:text-white'
                        }`}
                    >
                        {t}
                    </button>
                ))}
             </div>
          </div>
        </header>

        <div className="p-12 max-w-[1600px] w-full mx-auto space-y-10">
          
          {/* TOP ALERT SECTION */}
          <div className="bg-indigo-600/5 border border-indigo-600/20 p-8 rounded-[2.5rem] flex items-center gap-6">
            <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-indigo-600/20">
                <AlertCircle className="w-6 h-6" />
            </div>
            <div className="flex-1">
                <h4 className="text-xs font-black text-white tracking-widest mb-1 uppercase">Attention Required</h4>
                <p className="text-[10px] font-bold text-slate-500 tracking-widest leading-relaxed uppercase">
                    THERE ARE 2 PENDING PROMOTION REQUESTS THAT REQUIRE FINAL HR SIGN-OFF FOR THE UPCOMING PAYROLL CYCLE.
                </p>
            </div>
          </div>

          {/* REQUESTS LIST */}
          <div className="space-y-4">
            {hrRequests.map((req) => (
              <div key={req.id} className="bg-slate-900/40 border border-white/5 p-8 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8 group hover:border-indigo-500/30 transition-all">
                
                <div className="flex items-center gap-8 flex-1">
                    <div className="relative">
                        <div className={`w-16 h-16 rounded-3xl flex items-center justify-center border-2 ${
                            req.priority === 'URGENT' ? 'border-red-500/50 bg-red-500/10' : 'border-white/10 bg-slate-800'
                        }`}>
                            {req.type === 'LEAVE' && <Clock className="w-8 h-8 text-slate-400" />}
                            {req.type === 'PROMOTION' && <ArrowUpRight className="w-8 h-8 text-indigo-400" />}
                            {req.type === 'RESIGNATION' && <XCircle className="w-8 h-8 text-red-400" />}
                            {req.type === 'EXPENSE' && <FileText className="w-8 h-8 text-emerald-400" />}
                        </div>
                        {req.priority === 'URGENT' && (
                            <div className="absolute -top-2 -right-2 px-2 py-1 bg-red-600 text-white text-[7px] font-black rounded-md animate-pulse uppercase">Urgent</div>
                        )}
                    </div>
                    
                    <div className="space-y-1">
                        <div className="flex items-center gap-3">
                            <span className="text-[9px] font-black text-indigo-500 tracking-widest">{req.id}</span>
                            <span className="text-xs font-black text-white tracking-tight">{req.requester}</span>
                        </div>
                        <h3 className="text-lg font-black text-slate-300 tracking-tighter">{req.type} REQUEST</h3>
                        <div className="flex items-center gap-2 text-slate-600">
                            <User className="w-3 h-3" />
                            <p className="text-[9px] font-black tracking-widest uppercase">Manager: {req.manager}  {req.date}</p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-4 w-full md:w-auto">
                    <button className="flex-1 md:flex-none px-8 py-5 rounded-2xl border border-red-500/20 text-red-500 font-black text-[10px] tracking-[0.2em] hover:bg-red-500 hover:text-white transition-all uppercase">
                        DENY
                    </button>
                    <button className="flex-1 md:flex-none px-12 py-5 rounded-2xl bg-indigo-600 text-white font-black text-[10px] tracking-[0.2em] hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-600/20 flex items-center justify-center gap-3 uppercase">
                        <CheckCircle2 className="w-4 h-4" /> Final Approve
                    </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
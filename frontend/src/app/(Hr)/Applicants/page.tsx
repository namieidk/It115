'use client';

import React, { useState } from 'react';
import { HRSidebar } from '../../../components/(Hr)/Dashboard/sidebar';
import { 
  Search, 
  Filter, 
  UserPlus, 
  FileText, 
  CheckCircle2, 
  XCircle, 
  ExternalLink,
  Briefcase,
  Mail,
  Calendar
} from 'lucide-react';

interface Applicant {
  id: string;
  name: string;
  position: string;
  experience: string;
  source: string;
  appliedDate: string;
  status: 'PENDING' | 'INTERVIEWED' | 'SHORTLISTED';
}

const initialApplicants: Applicant[] = [
  { id: 'APP-2026-01', name: 'JULIA CHENG', position: 'UX DESIGNER', experience: '5 YRS', source: 'LINKEDIN', appliedDate: 'MAR 24, 2026', status: 'SHORTLISTED' },
  { id: 'APP-2026-02', name: 'LIAM O&apos;REILLY', position: 'SR. DEVELOPER', experience: '8 YRS', source: 'REFERRAL', appliedDate: 'MAR 25, 2026', status: 'PENDING' },
  { id: 'APP-2026-03', name: 'SAMANTHA VANE', position: 'HR GENERALIST', experience: '3 YRS', source: 'INDEED', appliedDate: 'MAR 25, 2026', status: 'INTERVIEWED' },
  { id: 'APP-2026-04', name: 'DAVID KHO', position: 'DATA ANALYST', experience: '4 YRS', source: 'DIRECT', appliedDate: 'MAR 26, 2026', status: 'PENDING' },
];

export default function HRApplicantListPage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <main className="h-screen w-full flex bg-[#020617] text-slate-200 overflow-hidden font-sans uppercase">
      <HRSidebar />

      <section className="flex-1 flex flex-col overflow-y-auto bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/10 via-[#020617] to-[#020617]">
        
        {/* HEADER */}
        <header className="px-12 py-10 border-b border-white/5 flex justify-between items-end backdrop-blur-md sticky top-0 z-20 bg-[#020617]/80">
          <div>
            <div className="flex items-center gap-2 text-indigo-500 mb-2">
                <UserPlus className="w-4 h-4" strokeWidth={3} />
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Talent Acquisition</span>
            </div>
            <h1 className="text-4xl font-black text-white tracking-tighter uppercase">
              Applicant <span className="text-indigo-600">Pipeline</span>
            </h1>
          </div>

          <div className="flex gap-4">
            <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
                <input 
                    placeholder="SEARCH CANDIDATES..." 
                    className="bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-[10px] font-black tracking-widest outline-none focus:border-indigo-500/50 w-64"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <button className="flex items-center gap-3 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-[9px] font-black tracking-widest hover:bg-white/10 transition-all">
                <Filter className="w-4 h-4" /> FILTERS
            </button>
          </div>
        </header>

        <div className="p-12 max-w-[1600px] w-full mx-auto space-y-6">
          
          {/* APPLICANT CARDS */}
          {initialApplicants.map((applicant) => (
            <div key={applicant.id} className="bg-slate-900/40 border border-white/5 p-8 rounded-[2.5rem] flex flex-col lg:flex-row items-center justify-between gap-8 group hover:border-indigo-500/30 transition-all backdrop-blur-3xl">
              
              <div className="flex items-center gap-8 flex-1">
                <div className="w-20 h-20 rounded-[2rem] bg-indigo-600/10 border border-indigo-600/20 flex items-center justify-center text-indigo-500 text-xl font-black">
                  {applicant.name.split(' ').map(n => n[0]).join('')}
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-4">
                    <h2 className="text-xl font-black text-white tracking-tight">{applicant.name}</h2>
                    <span className={`px-3 py-1 rounded-lg text-[8px] font-black tracking-widest border ${
                      applicant.status === 'SHORTLISTED' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' :
                      applicant.status === 'INTERVIEWED' ? 'bg-blue-500/10 text-blue-500 border-blue-500/20' :
                      'bg-slate-500/10 text-slate-500 border-white/10'
                    }`}>
                      {applicant.status}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-6 items-center text-slate-500">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-3.5 h-3.5" />
                      <p className="text-[10px] font-black tracking-widest uppercase">{applicant.position}  {applicant.experience}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5" />
                      <p className="text-[10px] font-black tracking-widest uppercase">APPLIED: {applicant.appliedDate}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <ExternalLink className="w-3.5 h-3.5" />
                      <p className="text-[10px] font-black tracking-widest uppercase">{applicant.source}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex items-center gap-4 w-full lg:w-auto border-t lg:border-t-0 lg:border-l border-white/5 pt-6 lg:pt-0 lg:pl-8">
                <button title="VIEW RESUME" className="p-4 bg-white/5 rounded-2xl text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                  <FileText className="w-5 h-5" />
                </button>
                <button title="CONTACT" className="p-4 bg-white/5 rounded-2xl text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                  <Mail className="w-5 h-5" />
                </button>
                <div className="h-10 w-[1px] bg-white/5 mx-2 hidden lg:block" />
                <button className="flex-1 lg:flex-none px-6 py-4 rounded-2xl border border-red-500/20 text-red-500 font-black text-[10px] tracking-widest hover:bg-red-500 hover:text-white transition-all flex items-center justify-center gap-2">
                  <XCircle className="w-4 h-4" /> DENY
                </button>
                <button className="flex-1 lg:flex-none px-10 py-4 rounded-2xl bg-indigo-600 text-white font-black text-[10px] tracking-widest hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-600/20 flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> APPROVE
                </button>
              </div>

            </div>
          ))}

          {/* EMPTY STATE HELPER */}
          {initialApplicants.length === 0 && (
            <div className="py-20 text-center border-2 border-dashed border-white/5 rounded-[3rem]">
              <p className="text-slate-600 font-black tracking-[0.5em] text-xs uppercase">No Active Applications in Queue</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
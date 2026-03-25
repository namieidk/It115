'use client';

import React, { useState } from 'react';
import { Sidebar } from '../../../components/(Employee)/Dashboard/Sidebar';
import { 
  Users, 
  UserCheck, 
  ShieldAlert, 
  ChevronRight, 
  Star, 
  Save, 
  ArrowLeft,
  ClipboardCheck
} from 'lucide-react';

export default function EvaluationPage() {
  const [selectedEval, setSelectedEval] = useState<string | null>(null);

  // Evaluation Categories
  const evalTypes = [
    { id: 'peer', title: 'Peer-to-Peer', desc: 'Team collaboration & support feedback', icon: Users, color: 'text-blue-400' },
    { id: 'manager', title: 'Managerial', desc: 'KPI performance & leadership alignment', icon: UserCheck, color: 'text-emerald-400' },
    { id: 'hr', title: 'HR Compliance', desc: 'Policy adherence & behavioral audit', icon: ShieldAlert, color: 'text-orange-400' },
  ];

  // If no evaluation is selected, show the Selection Hub
  if (!selectedEval) {
    return (
      <main className="h-screen w-full flex bg-[#020617] text-slate-200 overflow-hidden font-sans uppercase">
        <Sidebar />
        <section className="flex-1 p-12 overflow-y-auto bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-[#020617] to-[#020617]">
          <header className="mb-12">
            <p className="text-[10px] font-black text-emerald-500 tracking-[0.4em] mb-2">Performance Management</p>
            <h1 className="text-4xl font-black text-white tracking-tighter uppercase">Evaluation <span className="text-emerald-500">Center</span></h1>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
            {evalTypes.map((type) => (
              <button 
                key={type.id}
                onClick={() => setSelectedEval(type.id)}
                className="group bg-slate-900/40 border border-white/5 p-10 rounded-[3rem] text-left hover:border-emerald-500/40 transition-all hover:bg-slate-900/60 relative overflow-hidden"
              >
                <div className={`${type.color} mb-6 transition-transform group-hover:scale-110 duration-300`}>
                  <type.icon className="w-12 h-12" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-black text-white mb-2 tracking-tight">{type.title}</h3>
                <p className="text-[10px] font-bold text-slate-500 tracking-widest leading-relaxed mb-8">{type.desc}</p>
                <div className="flex items-center gap-2 text-[10px] font-black text-emerald-500 tracking-widest group-hover:gap-4 transition-all uppercase">
                  Open Assessment <ChevronRight className="w-4 h-4" />
                </div>
              </button>
            ))}
          </div>
        </section>
      </main>
    );
  }

  // Once selected, show the Form
  return (
    <main className="h-screen w-full flex bg-[#020617] text-slate-200 overflow-hidden font-sans uppercase">
      <Sidebar />
      <section className="flex-1 flex flex-col overflow-hidden bg-[#020617]">
        
        {/* Form Header */}
        <header className="px-12 py-8 border-b border-white/5 flex justify-between items-center backdrop-blur-xl">
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setSelectedEval(null)}
              className="p-3 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h2 className="text-xl font-black text-white tracking-tighter uppercase">
                {selectedEval} <span className="text-emerald-500">Assessment Form</span>
              </h2>
              <p className="text-[9px] font-black text-slate-500 tracking-[0.3em]">Session ID: AX-EVAL-2026-01</p>
            </div>
          </div>
          <button className="flex items-center gap-3 px-8 py-4 bg-emerald-500 text-slate-950 rounded-2xl font-black text-[10px] tracking-widest hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/20">
            <Save className="w-4 h-4" /> Submit Evaluation
          </button>
        </header>

        {/* Form Content */}
        <div className="flex-1 overflow-y-auto p-12 space-y-12">
          
          {/* Instructions */}
          <div className="bg-blue-500/5 border border-blue-500/10 p-6 rounded-3xl flex items-center gap-4">
            <ClipboardCheck className="w-6 h-6 text-blue-400" />
            <p className="text-[10px] font-bold text-slate-400 tracking-widest leading-relaxed">
              Please provide objective scores. Ratings are confidential and used for organizational growth.
            </p>
          </div>

          {/* Question Sections */}
          {[
            "Professionalism and Workplace Ethics",
            "Technical Proficiency and Quality of Work",
            "Communication and Team Integration"
          ].map((section, idx) => (
            <div key={idx} className="space-y-8">
              <h3 className="text-xs font-black text-emerald-500 tracking-[0.4em] border-l-4 border-emerald-500 pl-4">Section 0{idx + 1}: {section}</h3>
              
              {[1, 2].map((q) => (
                <div key={q} className="bg-slate-900/30 border border-white/5 p-8 rounded-[2.5rem] flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="max-w-xl">
                    <p className="text-sm font-black text-white tracking-tight mb-2 uppercase">Question Detail 0{q}</p>
                    <p className="text-[10px] font-bold text-slate-500 tracking-widest">How would you rate the subjects ability to handle high-pressure escalations effectively?</p>
                  </div>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <button 
                        key={num} 
                        className="w-12 h-12 rounded-xl border border-white/10 hover:border-emerald-500 flex items-center justify-center font-black text-xs hover:bg-emerald-500/10 transition-all text-slate-400 hover:text-emerald-400"
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}

          {/* Comment Box */}
          <div className="space-y-4">
            <h3 className="text-xs font-black text-emerald-500 tracking-[0.4em] border-l-4 border-emerald-500 pl-4 uppercase">Additional Observations</h3>
            <textarea 
              placeholder="ENTER QUALITATIVE FEEDBACK HERE..."
              className="w-full h-40 bg-slate-900/50 border border-white/5 rounded-[2rem] p-8 text-[11px] font-bold uppercase tracking-widest outline-none focus:border-emerald-500/30 text-white placeholder:text-slate-700 transition-all"
            />
          </div>

        </div>
      </section>
    </main>
  );
}
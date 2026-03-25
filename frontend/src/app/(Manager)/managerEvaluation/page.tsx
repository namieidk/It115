'use client';

import React, { useState } from 'react';
import { ManagerSidebar } from '../../../components/(Manager)/Dashboard/ManagerSidebar';
import { 
  UserCircle, 
  ShieldCheck, 
  BarChart, 
  Save, 
  ChevronRight,
  EyeOff,
  ClipboardCheck,
  Users
} from 'lucide-react';

interface Agent {
  id: string;
  name: string;
  role: string;
  peerScore: string;
}

const teamMembers: Agent[] = [
  { id: 'AX-01', name: 'ALEXANDER WRIGHT', role: 'L3 TECH SUPPORT', peerScore: '4.8' },
  { id: 'AX-05', name: 'MARIA SANTOS', role: 'L1 AGENT', peerScore: '4.2' },
  { id: 'AX-12', name: 'KEVIN TAN', role: 'L1 AGENT', peerScore: '3.9' },
];

type ViewMode = 'menu' | 'evaluate' | 'results';

export default function ManagerEvaluationPage() {
  const [view, setView] = useState<ViewMode>('menu');
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);

  // --- RENDER 1: MAIN NAVIGATION MENU ---
  if (view === 'menu') {
    return (
      <main className="h-screen w-full flex bg-[#020617] text-slate-200 overflow-hidden font-sans uppercase">
        <ManagerSidebar />
        <section className="flex-1 p-12 flex flex-col justify-center items-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-[#020617] to-[#020617]">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-black text-white tracking-tighter mb-4">PERFORMANCE <span className="text-blue-600">HUB</span></h1>
            <p className="text-[10px] font-black text-slate-500 tracking-[0.5em]">SELECT OPERATIONAL MODULE</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
            <button 
              onClick={() => setView('evaluate')}
              className="bg-slate-900/40 border border-white/5 p-12 rounded-[3rem] hover:border-blue-500/50 transition-all group text-left"
            >
              <ClipboardCheck className="w-12 h-12 text-blue-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-black text-white mb-2">EVALUATE TEAM</h3>
              <p className="text-[9px] font-bold text-slate-500 tracking-widest">SUBMIT OFFICIAL PERFORMANCE SCORES</p>
            </button>
            <button 
              onClick={() => setView('results')}
              className="bg-slate-900/40 border border-white/5 p-12 rounded-[3rem] hover:border-emerald-500/50 transition-all group text-left"
            >
              <Users className="w-12 h-12 text-emerald-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-black text-white mb-2">EMPLOYEE RESULTS</h3>
              <p className="text-[9px] font-bold text-slate-500 tracking-widest">VIEW ANONYMIZED PEER EVALUATIONS</p>
            </button>
          </div>
        </section>
      </main>
    );
  }

  // --- RENDER 2: LIST VIEW (For both Evaluate or Results) ---
  if (!selectedAgent) {
    return (
      <main className="h-screen w-full flex bg-[#020617] text-slate-200 overflow-hidden font-sans uppercase">
        <ManagerSidebar />
        <section className="flex-1 p-12 overflow-y-auto">
          <header className="flex justify-between items-center mb-12">
            <div>
              <button onClick={() => setView('menu')} className="text-[10px] font-black text-blue-500 mb-2 hover:underline tracking-widest">BACK TO HUB</button>
              <h1 className="text-4xl font-black text-white tracking-tighter uppercase">
                {view === 'evaluate' ? 'ACTIVE' : 'PEER'} <span className="text-blue-600">{view === 'evaluate' ? 'EVALUATION' : 'RESULTS'}</span>
              </h1>
            </div>
          </header>

          <div className="grid grid-cols-1 gap-4 max-w-4xl">
            {teamMembers.map((agent) => (
              <button 
                key={agent.id}
                onClick={() => setSelectedAgent(agent)}
                className="group flex items-center justify-between bg-slate-900/40 border border-white/5 p-8 rounded-[2.5rem] hover:border-blue-500/40 transition-all"
              >
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center text-slate-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <UserCircle className="w-8 h-8" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-black text-white tracking-tight">{agent.name}</h3>
                    <p className="text-[10px] font-bold text-slate-500 tracking-widest">{agent.role}</p>
                  </div>
                </div>
                <ChevronRight className="w-6 h-6 text-slate-700 group-hover:text-blue-500" />
              </button>
            ))}
          </div>
        </section>
      </main>
    );
  }

  // --- RENDER 3: DETAIL VIEW ---
  return (
    <main className="h-screen w-full flex bg-[#020617] text-slate-200 overflow-hidden font-sans uppercase">
      <ManagerSidebar />
      <section className="flex-1 flex flex-col overflow-hidden">
        <header className="px-12 py-8 border-b border-white/5 flex justify-between items-center bg-[#020617]">
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center font-black text-white">{selectedAgent.name[0]}</div>
            <div>
              <h2 className="text-xl font-black text-white tracking-tighter uppercase">{selectedAgent.name}  {view === 'evaluate' ? 'SCORECARD' : 'PEER FEEDBACK'}</h2>
              <p className="text-[9px] font-black text-slate-500 tracking-[0.3em]">SECURE ACCESS ID: {selectedAgent.id}</p>
            </div>
          </div>
          <button onClick={() => setSelectedAgent(null)} className="px-8 py-4 bg-white/5 rounded-2xl font-black text-[10px] tracking-widest text-slate-400 hover:text-white">CLOSE SESSION</button>
        </header>

        <div className="flex-1 overflow-y-auto p-12 space-y-12">
          {view === 'results' ? (
            // MODE: EMPLOYEE RESULTS (Peer View)
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-orange-400 mb-8">
                <EyeOff className="w-5 h-5" />
                <h3 className="text-xs font-black tracking-[0.4em]">BLIND PEER DATA (ANONYMOUS)</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[1, 2, 3, 4].map((peer) => (
                  <div key={peer} className="bg-slate-900/60 border border-white/5 p-8 rounded-[2.5rem]">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-[9px] font-black text-blue-500 tracking-[0.2em]">PEER SOURCE 0{peer}</span>
                      <div className="flex items-center gap-2 text-emerald-500">
                        <BarChart className="w-4 h-4" />
                        <span className="text-lg font-black">4.{peer + 2}</span>
                      </div>
                    </div>
                    <p className="text-[11px] font-bold text-slate-300 tracking-widest leading-relaxed">
                      &quot;CONSISTENT PERFORMANCE AND HIGH TECHNICAL KNOWLEDGE. RECOMMENDED FOR L3 PROMOTION PENDING LEADERSHIP TRAINING.&quot;
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            // MODE: EVALUATE (Manager Rubric)
            <div className="space-y-10">
              <div className="flex items-center gap-3 text-blue-500 mb-8">
                <ShieldCheck className="w-5 h-5" />
                <h3 className="text-xs font-black tracking-[0.4em]">EXECUTIVE SCORING MODULE</h3>
              </div>
              {["TECHNICAL PROFICIENCY", "SECURITY COMPLIANCE", "COMMUNICATION"].map((rubric, idx) => (
                <div key={idx} className="bg-slate-900/20 border border-white/5 p-10 rounded-[3rem] flex flex-col md:flex-row justify-between items-center gap-8">
                  <div className="max-w-xl">
                    <p className="text-sm font-black text-white tracking-tight mb-2 uppercase">{rubric}</p>
                    <p className="text-[10px] font-bold text-slate-500 tracking-widest">ASSIGN VALUE BASED ON QUARTERLY METRICS.</p>
                  </div>
                  <div className="flex gap-2 bg-slate-950 p-2 rounded-2xl border border-white/5">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <button key={num} className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-xs text-slate-600 hover:bg-blue-600 hover:text-white transition-all">
                        {num}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
              <div className="pt-10 border-t border-white/5">
                <button className="w-full py-6 bg-blue-600 text-white rounded-3xl font-black tracking-[0.3em] text-xs hover:bg-blue-500 transition-all flex items-center justify-center gap-4">
                  <Save className="w-5 h-5" /> COMMIT SCORECARD TO HR DATABASE
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
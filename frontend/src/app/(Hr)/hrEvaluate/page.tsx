'use client';

import React, { useState } from 'react';
import { HRSidebar } from '../../../components/(Hr)/Dashboard/sidebar';
import { 
  ShieldCheck, 
  BarChart, 
  ChevronRight,
  Eye,
  Layers,
  Users,
  Briefcase,
  ArrowLeft
} from 'lucide-react';

// --- 1. DEFINED STRICT INTERFACES TO REMOVE "ANY" ERRORS ---
interface Employee {
  id: string;
  name: string;
  role: string;
  peerAvg: string;
  mgrScore: string;
}

interface Manager {
  id: string;
  name: string;
  dept: string;
  employees: Employee[];
}

interface Department {
  name: string;
  manager: Manager;
}

// --- MOCK DATA ---
const departments: Department[] = [
  {
    name: 'TECH OPS',
    manager: {
      id: 'MGR-01',
      name: 'RICHARD STARK',
      dept: 'TECH OPS',
      employees: [
        { id: 'AX-01', name: 'ALEXANDER WRIGHT', role: 'L3 TECH', peerAvg: '4.8', mgrScore: '4.5' },
        { id: 'AX-12', name: 'KEVIN TAN', role: 'L1 AGENT', peerAvg: '3.9', mgrScore: '4.0' },
      ]
    }
  },
  {
    name: 'CUSTOMER CARE',
    manager: {
      id: 'MGR-05',
      name: 'SARAH JENKINS',
      dept: 'CUSTOMER CARE',
      employees: [
        { id: 'AX-05', name: 'MARIA SANTOS', role: 'L1 AGENT', peerAvg: '4.2', mgrScore: '4.1' },
      ]
    }
  }
];

type HRView = 'menu' | 'eval_list' | 'eval_form' | 'dept_list' | 'mgr_detail' | 'result_final';

export default function HREvaluationPage() {
  const [view, setView] = useState<HRView>('menu');
  
  // --- 2. APPLIED INTERFACES TO USESTATE ---
  const [selectedDept, setSelectedDept] = useState<Department | null>(null);
  const [selectedEmp, setSelectedEmp] = useState<Employee | null>(null);

  // --- RENDER 1: MAIN HUB ---
  if (view === 'menu') {
    return (
      <main className="h-screen w-full flex bg-[#020617] text-slate-200 overflow-hidden font-sans uppercase">
        <HRSidebar />
        <section className="flex-1 flex flex-col justify-center items-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-[#020617] to-[#020617]">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-black text-white tracking-tighter mb-4">GLOBAL <span className="text-indigo-600">AUDIT</span></h1>
            <p className="text-[10px] font-black text-slate-500 tracking-[0.5em]">HR EVALUATION AUTHORITY</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl px-6">
            <button onClick={() => setView('eval_list')} className="bg-slate-900/40 border border-white/5 p-12 rounded-[3rem] hover:border-indigo-500/50 transition-all group text-left">
              <ShieldCheck className="w-12 h-12 text-indigo-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-black text-white mb-2">EVALUATE MANAGERS</h3>
              <p className="text-[9px] font-bold text-slate-500 tracking-widest uppercase">Direct performance review for leadership</p>
            </button>
            <button onClick={() => setView('dept_list')} className="bg-slate-900/40 border border-white/5 p-12 rounded-[3rem] hover:border-emerald-500/50 transition-all group text-left">
              <Layers className="w-12 h-12 text-emerald-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-black text-white mb-2">ACCESS RESULTS</h3>
              <p className="text-[9px] font-bold text-slate-500 tracking-widest uppercase">Browse dept performance and peer logs</p>
            </button>
          </div>
        </section>
      </main>
    );
  }

  // --- RENDER 2: LIST DEPARTMENTS (Results Mode) ---
  if (view === 'dept_list') {
    return (
      <main className="h-screen w-full flex bg-[#020617] text-slate-200 overflow-hidden font-sans uppercase">
        <HRSidebar />
        <section className="flex-1 p-12 overflow-y-auto">
          <button onClick={() => setView('menu')} className="flex items-center gap-2 text-indigo-500 font-black text-[10px] tracking-widest mb-8"><ArrowLeft className="w-4 h-4" /> BACK TO HUB</button>
          <h2 className="text-3xl font-black text-white tracking-tighter mb-10">ORGANIZATIONAL <span className="text-indigo-600">DEPARTMENTS</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
            {departments.map((dept) => (
              <button key={dept.name} onClick={() => { setSelectedDept(dept); setView('mgr_detail'); }} className="bg-slate-900/40 border border-white/5 p-10 rounded-[2.5rem] flex justify-between items-center group hover:border-indigo-500/40 transition-all">
                <div>
                    <p className="text-[9px] font-black text-indigo-500 tracking-widest mb-1">SECURED DATA</p>
                    <h3 className="text-xl font-black text-white tracking-tight">{dept.name}</h3>
                </div>
                <ChevronRight className="w-6 h-6 text-slate-700 group-hover:text-indigo-500" />
              </button>
            ))}
          </div>
        </section>
      </main>
    );
  }

  // --- RENDER 3: MANAGER & EMPLOYEE LIST (Inside Dept) ---
  if (view === 'mgr_detail' && selectedDept) {
    return (
      <main className="h-screen w-full flex bg-[#020617] text-slate-200 overflow-hidden font-sans uppercase">
        <HRSidebar />
        <section className="flex-1 p-12 overflow-y-auto">
            <button onClick={() => setView('dept_list')} className="flex items-center gap-2 text-indigo-500 font-black text-[10px] tracking-widest mb-8"><ArrowLeft className="w-4 h-4" /> BACK TO DEPARTMENTS</button>
            <h2 className="text-3xl font-black text-white tracking-tighter mb-4">{selectedDept.name} <span className="text-indigo-600">AUDIT HIERARCHY</span></h2>
            
            <div className="mt-12 space-y-12">
                <div className="bg-indigo-600/5 border border-indigo-600/20 p-8 rounded-[2.5rem] flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-16 rounded-2xl bg-indigo-600 flex items-center justify-center text-white font-black text-xl">M</div>
                        <div>
                            <p className="text-[9px] font-black text-indigo-400 tracking-widest uppercase">DEPARTMENT MANAGER</p>
                            <h3 className="text-xl font-black text-white uppercase">{selectedDept.manager.name}</h3>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <p className="text-[10px] font-black text-slate-500 tracking-[0.4em] mb-4 flex items-center gap-2"><Users className="w-4 h-4" /> REPORTING SUBORDINATES</p>
                    {selectedDept.manager.employees.map((emp: Employee) => (
                        <button key={emp.id} onClick={() => { setSelectedEmp(emp); setView('result_final'); }} className="w-full bg-slate-900/20 border border-white/5 p-6 rounded-[2rem] flex justify-between items-center group hover:bg-white/5 transition-all text-left">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-[10px] font-black">{emp.name[0]}</div>
                                <div>
                                    <h4 className="text-xs font-black text-white">{emp.name}</h4>
                                    <p className="text-[8px] font-bold text-slate-600 tracking-widest">{emp.role}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-8">
                                <div className="text-right">
                                    <p className="text-[8px] font-black text-slate-500">MGR SCORE</p>
                                    <p className="text-xs font-black text-indigo-500">{emp.mgrScore}</p>
                                </div>
                                <Eye className="w-5 h-5 text-slate-700 group-hover:text-indigo-500" />
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </section>
      </main>
    );
  }

  // --- RENDER 4: FINAL RESULT VIEW (Peer + Mgr) ---
  if (view === 'result_final' && selectedEmp) {
    return (
        <main className="h-screen w-full flex bg-[#020617] text-slate-200 overflow-hidden font-sans uppercase">
          <HRSidebar />
          <section className="flex-1 flex flex-col overflow-hidden">
            <header className="p-12 border-b border-white/5 flex justify-between items-center">
                <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center font-black text-white text-xl">{selectedEmp.name[0]}</div>
                    <div>
                        <h2 className="text-2xl font-black text-white tracking-tighter">{selectedEmp.name} <span className="text-indigo-500">CONSOLIDATED AUDIT</span></h2>
                        <p className="text-[9px] font-black text-slate-500 tracking-[0.3em]">HR MASTER OVERRIDE ACCESS</p>
                    </div>
                </div>
                <button onClick={() => setView('mgr_detail')} className="px-8 py-4 bg-white/5 rounded-2xl font-black text-[10px] tracking-widest text-slate-400 hover:text-white uppercase">EXIT AUDIT</button>
            </header>
            <div className="flex-1 overflow-y-auto p-12 grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="bg-slate-900/40 border border-white/5 p-10 rounded-[3rem] space-y-8">
                    <h3 className="text-xs font-black text-indigo-500 tracking-[0.4em] flex items-center gap-3"><BarChart className="w-4 h-4" /> PEER EVALUATION LOGS</h3>
                    {[1, 2].map(i => (
                        <div key={i} className="border-l-2 border-indigo-500/30 pl-6 space-y-2">
                            <p className="text-[9px] font-black text-slate-600 tracking-widest">ANONYMOUS PEER 0{i}  SCORE: 4.8</p>
                            <p className="text-[11px] font-bold text-slate-400 tracking-widest leading-relaxed uppercase">
                              &quot;Consistently meets KPI targets and shows leadership potential in team syncs.&quot;
                            </p>
                        </div>
                    ))}
                </div>
                <div className="bg-indigo-600/5 border border-indigo-600/10 p-10 rounded-[3rem] space-y-8">
                    <h3 className="text-xs font-black text-indigo-500 tracking-[0.4em] flex items-center gap-3"><ShieldCheck className="w-4 h-4" /> MANAGER FINAL VERDICT</h3>
                    <div className="p-6 bg-slate-950 rounded-2xl border border-white/5">
                        <p className="text-[11px] font-black text-white leading-relaxed tracking-widest uppercase">
                            &quot;Employee is a top performer. Managed to maintain a 98% quality score despite high ticket volumes.&quot;
                        </p>
                    </div>
                    <div className="flex justify-between items-center pt-6 border-t border-white/5">
                        <span className="text-[10px] font-black text-slate-500">FINAL OFFICIAL SCORE</span>
                        <span className="text-3xl font-black text-indigo-500">{selectedEmp.mgrScore}</span>
                    </div>
                </div>
            </div>
          </section>
        </main>
    );
  }

  // --- RENDER 5: EVALUATE MANAGERS LIST ---
  return (
    <main className="h-screen w-full flex bg-[#020617] text-slate-200 overflow-hidden font-sans uppercase">
        <HRSidebar />
        <section className="flex-1 p-12 overflow-y-auto">
          <button onClick={() => setView('menu')} className="flex items-center gap-2 text-indigo-500 font-black text-[10px] tracking-widest mb-8 uppercase"><ArrowLeft className="w-4 h-4" /> BACK TO HUB</button>
          <header className="mb-12">
            <h1 className="text-4xl font-black text-white tracking-tighter uppercase">LEADERSHIP <span className="text-indigo-600">REVIEWS</span></h1>
            <p className="text-[10px] font-black text-slate-500 tracking-[0.4em] mt-2 uppercase">Evaluate your Department Managers</p>
          </header>
          <div className="grid grid-cols-1 gap-4 max-w-4xl">
            {departments.map((dept) => (
              <div key={dept.manager.id} className="bg-slate-900/40 border border-white/5 p-8 rounded-[2.5rem] flex items-center justify-between group">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-600/20 flex items-center justify-center text-indigo-500"><Briefcase className="w-8 h-8" /></div>
                  <div className="text-left">
                    <h3 className="text-lg font-black text-white tracking-tight">{dept.manager.name}</h3>
                    <p className="text-[10px] font-bold text-slate-500 tracking-widest">{dept.name}  MANAGER</p>
                  </div>
                </div>
                <button className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-black text-[10px] tracking-widest hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-600/20 uppercase">EVALUATE MGR</button>
              </div>
            ))}
          </div>
        </section>
    </main>
  );
}
'use client';

import React, { useState } from 'react';
import { HRSidebar } from '../../../components/(Hr)/Dashboard/sidebar';
import { 
  CreditCard, 
  UserPlus, 
  Search, 
  DollarSign, 
  ShieldCheck, 
  ArrowLeft,
  Save,
  FileText,
  TrendingUp,
  Fingerprint
} from 'lucide-react';

// --- TYPES ---
interface PayrollRecord {
  id: string;
  name: string;
  role: 'MANAGER' | 'EMPLOYEE';
  dept: string;
  basicSalary: number;
  status: 'PROCESSED' | 'PENDING';
}

type PayrollView = 'dashboard' | 'enrollment';

export default function HRPayrollPage() {
  const [view, setView] = useState<PayrollView>('dashboard');

  // --- MOCK DATA ---
  const payrollList: PayrollRecord[] = [
    { id: 'MGR-01', name: 'RICHARD STARK', role: 'MANAGER', dept: 'TECH OPS', basicSalary: 85000, status: 'PROCESSED' },
    { id: 'AX-01', name: 'ALEXANDER WRIGHT', role: 'EMPLOYEE', dept: 'TECH OPS', basicSalary: 45000, status: 'PENDING' },
    { id: 'MGR-05', name: 'SARAH JENKINS', role: 'MANAGER', dept: 'CUSTOMER CARE', basicSalary: 82000, status: 'PROCESSED' },
  ];

  // --- RENDER 1: PAYROLL DASHBOARD ---
  if (view === 'dashboard') {
    return (
      <main className="h-screen w-full flex bg-[#020617] text-slate-200 overflow-hidden font-sans uppercase">
        <HRSidebar />
        <section className="flex-1 flex flex-col overflow-y-auto bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/10 via-[#020617] to-[#020617]">
          
          <header className="px-12 py-10 border-b border-white/5 flex justify-between items-end backdrop-blur-md sticky top-0 z-20 bg-[#020617]/80">
            <div>
              <div className="flex items-center gap-2 text-indigo-500 mb-2">
                  <DollarSign className="w-4 h-4" strokeWidth={3} />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em]">Financial Governance</span>
              </div>
              <h1 className="text-4xl font-black text-white tracking-tighter uppercase">Payroll <span className="text-indigo-600">Master</span></h1>
            </div>

            <button 
              onClick={() => setView('enrollment')}
              className="flex items-center gap-3 px-8 py-4 bg-indigo-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-600/20"
            >
              <UserPlus className="w-4 h-4" /> Enroll New Payroll
            </button>
          </header>

          <div className="p-12 max-w-[1600px] w-full mx-auto space-y-10">
            {/* STATS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-900/40 border border-white/5 p-8 rounded-[2.5rem] backdrop-blur-3xl">
                <p className="text-[9px] font-black text-slate-500 tracking-widest mb-1">TOTAL DISBURSEMENT (MONTHLY)</p>
                <h3 className="text-3xl font-black text-white tracking-tighter">₱ 2,140,500.00</h3>
              </div>
              <div className="bg-slate-900/40 border border-white/5 p-8 rounded-[2.5rem] backdrop-blur-3xl">
                <p className="text-[9px] font-black text-slate-500 tracking-widest mb-1">PROCESSED ACCOUNTS</p>
                <h3 className="text-3xl font-black text-emerald-500 tracking-tighter">1,240 / 1,284</h3>
              </div>
              <div className="bg-slate-900/40 border border-white/5 p-8 rounded-[2.5rem] backdrop-blur-3xl">
                <p className="text-[9px] font-black text-slate-500 tracking-widest mb-1">STATUTORY REMITTANCE</p>
                <h3 className="text-3xl font-black text-indigo-500 tracking-tighter">₱ 412,000.00</h3>
              </div>
            </div>

            {/* LIST TABLE */}
            <div className="bg-slate-900/40 border border-white/5 rounded-[3rem] overflow-hidden shadow-2xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5 border-b border-white/5 text-[10px] font-black text-slate-500 tracking-[0.3em]">
                    <th className="px-10 py-6">ACCOUNT</th>
                    <th className="px-6 py-6">POSITION</th>
                    <th className="px-6 py-6">BASIC SALARY</th>
                    <th className="px-6 py-6 text-center">TAX STATUS</th>
                    <th className="px-10 py-6 text-right">ACTION</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {payrollList.map((row) => (
                    <tr key={row.id} className="hover:bg-indigo-600/5 transition-colors group">
                      <td className="px-10 py-6">
                        <p className="text-xs font-black text-white tracking-tight uppercase">{row.name}</p>
                        <p className="text-[8px] font-bold text-slate-600 tracking-widest">{row.id} {row.dept}</p>
                      </td>
                      <td className="px-6 py-6 text-[10px] font-black text-slate-400">
                        <span className={row.role === 'MANAGER' ? 'text-indigo-400' : 'text-slate-500'}>{row.role}</span>
                      </td>
                      <td className="px-6 py-6 text-xs font-black text-white">₱ {row.basicSalary.toLocaleString()}</td>
                      <td className="px-6 py-6 text-center">
                        <span className={`px-3 py-1 rounded-lg text-[8px] font-black tracking-widest border ${
                          row.status === 'PROCESSED' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' : 'bg-orange-500/10 text-orange-500 border-orange-500/20'
                        }`}>
                          {row.status}
                        </span>
                      </td>
                      <td className="px-10 py-6 text-right">
                        <button className="text-[9px] font-black text-indigo-500 hover:text-white transition-all tracking-widest">VIEW PAYSLIP</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    );
  }

  // --- RENDER 2: ENROLLMENT FORM ---
  return (
    <main className="h-screen w-full flex bg-[#020617] text-slate-200 overflow-hidden font-sans uppercase">
      <HRSidebar />
      <section className="flex-1 flex flex-col overflow-y-auto">
        <header className="p-12 border-b border-white/5 flex justify-between items-center bg-[#020617]">
          <button onClick={() => setView('dashboard')} className="flex items-center gap-2 text-indigo-500 font-black text-[10px] tracking-widest"><ArrowLeft className="w-4 h-4" /> CANCEL ENROLLMENT</button>
          <div className="text-right">
            <h2 className="text-xl font-black text-white tracking-tighter uppercase">Payroll Onboarding</h2>
            <p className="text-[8px] font-black text-slate-500 tracking-[0.3em]">SECURE FINANCIAL ENTRY</p>
          </div>
        </header>

        <div className="p-12 max-w-4xl mx-auto w-full space-y-12">
          
          <div className="grid grid-cols-2 gap-10">
            {/* BASIC SALARY INFO */}
            <div className="space-y-6">
              <h3 className="text-[10px] font-black text-indigo-500 tracking-[0.4em] flex items-center gap-2"><CreditCard className="w-4 h-4" /> COMPENSATION</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-[8px] font-black text-slate-500 tracking-widest ml-2">BASIC MONTHLY SALARY (PHP)</label>
                  <input type="number" placeholder="0.00" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-xs font-black text-white outline-none focus:border-indigo-500" />
                </div>
                <div className="space-y-2">
                  <label className="text-[8px] font-black text-slate-500 tracking-widest ml-2">ALLOWANCES / DE MINIMIS</label>
                  <input type="number" placeholder="0.00" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-xs font-black text-white outline-none focus:border-indigo-500" />
                </div>
              </div>
            </div>

            {/* STATUTORY DETAILS */}
            <div className="space-y-6">
              <h3 className="text-[10px] font-black text-indigo-500 tracking-[0.4em] flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> STATUTORY COMPLIANCE</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-[8px] font-black text-slate-500 tracking-widest ml-2">SSS NUMBER</label>
                  <input placeholder="00-0000000-0" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-xs font-black text-white outline-none focus:border-indigo-500" />
                </div>
                <div className="space-y-2">
                  <label className="text-[8px] font-black text-slate-500 tracking-widest ml-2">PAG-IBIG (HDMF) ID</label>
                  <input placeholder="0000-0000-0000" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-xs font-black text-white outline-none focus:border-indigo-500" />
                </div>
                <div className="space-y-2">
                  <label className="text-[8px] font-black text-slate-500 tracking-widest ml-2">PHILHEALTH NUMBER</label>
                  <input placeholder="00-000000000-0" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-xs font-black text-white outline-none focus:border-indigo-500" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-indigo-600/5 border border-indigo-600/20 p-8 rounded-[2.5rem] flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Fingerprint className="w-8 h-8 text-indigo-500" />
              <p className="text-[9px] font-black text-slate-400 tracking-widest uppercase leading-relaxed">
                By clicking Save, you authorize the system to calculate automatic <br /> tax deductions based on current BIR withholding tables.
              </p>
            </div>
            <button className="px-12 py-5 bg-indigo-600 text-white rounded-2xl font-black text-[10px] tracking-widest hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-600/20 flex items-center gap-2 uppercase">
              <Save className="w-4 h-4" /> Save Record
            </button>
          </div>

        </div>
      </section>
    </main>
  );
}
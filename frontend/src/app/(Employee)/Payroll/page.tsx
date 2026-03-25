'use client';

import React from 'react';
import { Sidebar } from '../../../components/(Employee)/Dashboard/Sidebar';
import { 
  CreditCard, 
  Download, 
  TrendingUp, 
  ShieldCheck, 
  Info, 
  ArrowDownRight,
  Wallet,
  Receipt,
  History
} from 'lucide-react';

export default function PayrollPage() {
  // Sample Data reflecting 2026 Philippine Rates
  const earnings = [
    { label: 'Basic Salary', amount: 25000.00 },
    { label: 'Night Differential (10%)', amount: 2450.00 },
    { label: 'Overtime Pay', amount: 1200.00 },
    { label: 'Rice/Laundry Allowance', amount: 2000.00 },
  ];

  const deductions = [
    { label: 'SSS Contribution (5%)', amount: 1250.00 },
    { label: 'PhilHealth (2.5%)', amount: 625.00 },
    { label: 'Pag-IBIG Fund', amount: 200.00 },
    { label: 'Withholding Tax (BIR)', amount: 1850.00 },
  ];

  const totalEarnings = earnings.reduce((acc, curr) => acc + curr.amount, 0);
  const totalDeductions = deductions.reduce((acc, curr) => acc + curr.amount, 0);
  const netPay = totalEarnings - totalDeductions;

  return (
    <main className="h-screen w-full flex bg-[#020617] text-slate-200 overflow-hidden font-sans uppercase">
      <Sidebar />

      <section className="flex-1 flex flex-col overflow-y-auto bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/10 via-[#020617] to-[#020617]">
        
        {/* HEADER */}
        <header className="px-12 py-10 border-b border-white/5 flex justify-between items-end backdrop-blur-xl sticky top-0 z-20 bg-[#020617]/80">
          <div>
            <div className="flex items-center gap-2 text-emerald-500 mb-2">
                <Wallet className="w-4 h-4" strokeWidth={3} />
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Financial Services</span>
            </div>
            <h1 className="text-4xl font-black text-white tracking-tighter uppercase">
              Payroll <span className="text-emerald-500">Breakdown</span>
            </h1>
          </div>

          <button className="flex items-center gap-3 px-8 py-4 bg-emerald-500 text-slate-950 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/20">
              <Download className="w-4 h-4" /> Download PDF Payslip
          </button>
        </header>

        <div className="p-12 max-w-[1400px] w-full mx-auto space-y-10">
          
          {/* NET PAY HERO CARD */}
          <div className="bg-slate-900/40 border border-white/5 rounded-[3.5rem] p-12 relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50"></div>
            
            <div className="z-10 text-center md:text-left">
              <p className="text-[10px] font-black text-slate-500 tracking-[0.4em] mb-4">Total Net Take-Home Pay</p>
              <h2 className="text-7xl font-black text-white tracking-tighter">
                ₱ {netPay.toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </h2>
              <p className="text-[10px] font-black text-emerald-500 mt-4 tracking-widest flex items-center justify-center md:justify-start gap-2">
                <ShieldCheck className="w-4 h-4" /> Period: March 01 - March 15, 2026
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-2xl text-center min-w-[240px]">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Payout Date</p>
                <p className="text-2xl font-black text-white tracking-tight">MAR 20, 2026</p>
                <div className="mt-4 px-4 py-2 bg-emerald-500/10 rounded-full border border-emerald-500/20 text-[9px] font-black text-emerald-400 tracking-widest">
                    STATUS: PROCESSED
                </div>
            </div>
          </div>

          {/* EARNINGS VS DEDUCTIONS GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* EARNINGS COLUMN */}
            <div className="space-y-6">
              <h3 className="text-xs font-black text-emerald-500 tracking-[0.4em] px-4 flex items-center gap-3">
                <TrendingUp className="w-4 h-4" /> Gross Earnings
              </h3>
              <div className="bg-slate-900/20 border border-white/5 rounded-[3rem] p-8 space-y-4">
                {earnings.map((item, i) => (
                  <div key={i} className="flex justify-between items-center p-5 bg-white/5 rounded-2xl border border-transparent hover:border-emerald-500/20 transition-all">
                    <span className="text-[10px] font-black text-slate-300 tracking-widest">{item.label}</span>
                    <span className="text-sm font-black text-white">₱ {item.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                  </div>
                ))}
                <div className="pt-6 mt-4 border-t border-white/5 flex justify-between items-center px-5">
                   <span className="text-xs font-black text-emerald-500 tracking-[0.2em]">Total Gross</span>
                   <span className="text-xl font-black text-emerald-400 font-mono">₱ {totalEarnings.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* DEDUCTIONS COLUMN */}
            <div className="space-y-6">
              <h3 className="text-xs font-black text-orange-400 tracking-[0.4em] px-4 flex items-center gap-3">
                <ArrowDownRight className="w-4 h-4" /> Statutory Deductions
              </h3>
              <div className="bg-slate-900/20 border border-white/5 rounded-[3rem] p-8 space-y-4">
                {deductions.map((item, i) => (
                  <div key={i} className="flex justify-between items-center p-5 bg-white/5 rounded-2xl border border-transparent hover:border-orange-500/20 transition-all">
                    <span className="text-[10px] font-black text-slate-300 tracking-widest">{item.label}</span>
                    <span className="text-sm font-black text-orange-400 font-mono">- ₱ {item.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                  </div>
                ))}
                <div className="pt-6 mt-4 border-t border-white/5 flex justify-between items-center px-5">
                   <span className="text-xs font-black text-orange-500 tracking-[0.2em]">Total Deductions</span>
                   <span className="text-xl font-black text-orange-400 font-mono">₱ {totalDeductions.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* HISTORICAL LOGS */}
          <div className="bg-slate-900/40 border border-white/5 rounded-[3rem] overflow-hidden">
             <div className="p-8 border-b border-white/5 flex items-center gap-4 bg-white/5">
                <History className="w-5 h-5 text-slate-500" />
                <h3 className="text-xs font-black text-white tracking-[0.3em]">Recent Payslips</h3>
             </div>
             <div className="divide-y divide-white/5">
                {[
                    { id: 'PAY-8821', period: 'FEB 15 - FEB 28, 2026', amount: '22,410.50' },
                    { id: 'PAY-8710', period: 'JAN 30 - FEB 14, 2026', amount: '21,900.00' }
                ].map((log, i) => (
                    <div key={i} className="px-10 py-6 flex justify-between items-center hover:bg-white/5 transition-all group">
                        <div className="flex flex-col">
                            <span className="text-[10px] font-black text-slate-500 tracking-widest">{log.id}</span>
                            <span className="text-xs font-black text-white tracking-tight mt-1">{log.period}</span>
                        </div>
                        <div className="flex items-center gap-8">
                            <span className="text-sm font-black text-slate-300">₱ {log.amount}</span>
                            <button className="p-3 bg-white/5 rounded-xl text-slate-500 group-hover:text-emerald-500 transition-colors">
                                <Receipt className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                ))}
             </div>
          </div>

          {/* TAX INFO BANNER */}
          <div className="p-10 bg-blue-500/5 border border-blue-500/10 rounded-[3rem] flex items-start gap-6">
            <Info className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
            <div className="space-y-2">
                <p className="text-[11px] font-black text-blue-400 tracking-[0.2em] uppercase">2026 Statutory Compliance Notice</p>
                <p className="text-[10px] text-slate-500 font-bold tracking-widest leading-relaxed uppercase">
                    Your deductions are computed based on the 2026 BIR Train Law & Statutory Rate Adjustments (SSS: 5% / PhilHealth: 2.5%). Night Differential is calculated at 110% of hourly rate for hours between 22:00 and 06:00.
                </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
'use client';

import React from 'react';
import { ManagerSidebar } from '../../../components/(Manager)/Dashboard/ManagerSidebar';
import { 
  User, 
  ShieldCheck, 
  Award, 
  Settings, 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase,
  Lock,
  ChevronRight,
  Fingerprint
} from 'lucide-react';

export default function ManagerProfilePage() {
  return (
    <main className="h-screen w-full flex bg-[#020617] text-slate-200 overflow-hidden font-sans uppercase">
      {/* GLOBAL MANAGER SIDEBAR */}
      <ManagerSidebar />

      <section className="flex-1 flex flex-col overflow-y-auto bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-[#020617] to-[#020617]">
        
        {/* HEADER / COVER AREA */}
        <div className="h-64 bg-slate-900/50 border-b border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
          <div className="absolute bottom-0 left-12 translate-y-1/2 flex items-end gap-8">
            <div className="w-40 h-40 rounded-[3rem] bg-blue-600 border-[8px] border-[#020617] flex items-center justify-center shadow-2xl relative group">
              <User className="w-20 h-20 text-white" />
              <div className="absolute inset-0 bg-black/40 rounded-[3rem] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                <Settings className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-1">
                <h1 className="text-4xl font-black text-white tracking-tighter">RICHARD STARK</h1>
                <div className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-lg flex items-center gap-2">
                  <ShieldCheck className="w-3 h-3 text-blue-400" />
                  <span className="text-[8px] font-black text-blue-400 tracking-widest uppercase">LEVEL 4 ACCESS</span>
                </div>
              </div>
              <p className="text-sm font-black text-slate-500 tracking-[0.3em]">OPERATIONS MANAGER // SITE DELTA</p>
            </div>
          </div>
        </div>

        <div className="p-12 mt-20 max-w-[1400px] w-full mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* LEFT COLUMN: OFFICIAL DATA */}
          <div className="space-y-8">
            <div className="bg-slate-900/40 border border-white/5 p-8 rounded-[2.5rem] backdrop-blur-3xl">
              <h3 className="text-[10px] font-black text-blue-500 tracking-[0.4em] mb-8 flex items-center gap-2">
                <Fingerprint className="w-4 h-4" /> BIOMETRIC IDENTITY
              </h3>
              <div className="space-y-6">
                {[
                  { label: 'EMPLOYEE ID', val: 'AX-MGR-001', icon: Lock },
                  { label: 'EMAIL ADDRESS', val: 'R.STARK@AXIOM.CORE', icon: Mail },
                  { label: 'DIRECT LINE', val: '+63 917 555 0101', icon: Phone },
                  { label: 'WORKSTATION', val: 'FLOOR 12 // SECTOR B', icon: MapPin },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="p-2 bg-white/5 rounded-lg text-slate-600">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[8px] font-black text-slate-600 tracking-widest">{item.label}</p>
                      <p className="text-[11px] font-black text-white tracking-tight">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-600/10 border border-blue-600/20 p-8 rounded-[2.5rem]">
               <div className="flex items-center gap-4 mb-4">
                  <Award className="w-6 h-6 text-blue-400" />
                  <h4 className="text-xs font-black text-white tracking-widest uppercase">Tenure Excellence</h4>
               </div>
               <p className="text-[10px] font-bold text-blue-400 tracking-widest leading-relaxed uppercase">
                 SERVING SINCE 2018. CERTIFIED SIX SIGMA BLACK BELT & ISO 27001 COMPLIANCE LEAD.
               </p>
            </div>
          </div>

          {/* RIGHT COLUMN: LEADERSHIP METRICS */}
          <div className="lg:col-span-2 space-y-8">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: 'TEAM SIZE', val: '42 AGENTS', sub: '3 SHIFT LEADS' },
                { label: 'DEPT COMPLIANCE', val: '99.2%', sub: 'TOP 5% IN REGION' },
              ].map((stat, i) => (
                <div key={i} className="bg-slate-900/20 border border-white/5 p-8 rounded-[3rem] hover:border-blue-500/30 transition-all">
                  <p className="text-[9px] font-black text-slate-500 tracking-[0.4em] mb-2">{stat.label}</p>
                  <h3 className="text-3xl font-black text-white tracking-tighter mb-1">{stat.val}</h3>
                  <p className="text-[9px] font-black text-blue-500 tracking-widest">{stat.sub}</p>
                </div>
              ))}
            </div>

            <div className="bg-slate-900/40 border border-white/5 rounded-[3.5rem] overflow-hidden">
               <div className="px-10 py-8 border-b border-white/5 flex justify-between items-center bg-white/5">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Direct Reports // Tier 1</h3>
                  <Briefcase className="w-5 h-5 text-slate-500" />
               </div>
               <div className="divide-y divide-white/5">
                  {[
                    { name: 'ALEXANDER WRIGHT', role: 'SHIFT LEAD', status: 'ON-SHIFT' },
                    { name: 'SARAH JENKINS', role: 'QUALITY ANALYST', status: 'ON-SHIFT' },
                    { name: 'MARCUS VANE', role: 'TRAINER', status: 'OFF-SHIFT' },
                  ].map((report, i) => (
                    <div key={i} className="px-10 py-6 flex justify-between items-center group cursor-pointer hover:bg-white/5 transition-all">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-[10px] font-black text-slate-500">
                          {report.name[0]}{report.name.split(' ')[1][0]}
                        </div>
                        <div>
                          <p className="text-xs font-black text-white tracking-tight">{report.name}</p>
                          <p className="text-[9px] font-bold text-slate-500 tracking-widest">{report.role}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <span className={`text-[8px] font-black tracking-widest ${report.status === 'ON-SHIFT' ? 'text-emerald-500' : 'text-slate-600'}`}>
                          {report.status}
                        </span>
                        <ChevronRight className="w-4 h-4 text-slate-800 group-hover:text-blue-500 transition-colors" />
                      </div>
                    </div>
                  ))}
               </div>
            </div>

            <div className="flex justify-end gap-4">
              <button className="px-10 py-5 bg-white/5 border border-white/10 rounded-2xl font-black text-[10px] tracking-[0.3em] hover:bg-white/10 transition-all uppercase">
                Download Resume
              </button>
              <button className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-black text-[10px] tracking-[0.3em] hover:bg-blue-500 transition-all uppercase shadow-xl shadow-blue-600/20">
                Edit Professional Profile
              </button>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}
'use client';

import React from 'react';
import { AdminSidebar } from '../../../components/(Admin)/Sidebar';
import { 
  Settings, 
  ShieldCheck, 
  Bell, 
  Database, 
  Lock, 
  UserRoundCog, 
  Cloud, 
  Save,
  RefreshCw,
  Fingerprint,
  HardDrive
} from 'lucide-react';

export default function AdminSettingsPage() {
  return (
    <main className="h-screen w-full flex bg-[#020617] text-slate-200 overflow-hidden font-sans uppercase">
      <AdminSidebar />
      <section className="flex-1 flex flex-col overflow-y-auto bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-900/10 via-[#020617] to-[#020617]">
        
        {/* HEADER */}
        <header className="px-12 py-10 border-b border-white/5 flex justify-between items-end backdrop-blur-md sticky top-0 z-20 bg-[#020617]/80">
          <div>
            <div className="flex items-center gap-2 text-red-500 mb-2">
                <Settings className="w-4 h-4" strokeWidth={3} />
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Core Configuration</span>
            </div>
            <h1 className="text-4xl font-black text-white tracking-tighter uppercase">System <span className="text-red-600">Settings</span></h1>
          </div>

          <button className="flex items-center gap-3 px-8 py-4 bg-red-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-red-500 transition-all shadow-xl shadow-red-600/20">
            <Save className="w-4 h-4" /> Save All Changes
          </button>
        </header>

        <div className="p-12 max-w-[1400px] w-full mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* LEFT COLUMN: SECURITY & ACCESS */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* GLOBAL SECURITY SETTINGS */}
            <div className="bg-slate-900/40 border border-white/5 rounded-[3rem] p-10 space-y-8">
              <h3 className="text-xs font-black text-red-500 tracking-[0.4em] flex items-center gap-3">
                <Lock className="w-4 h-4" /> Security Protocols
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[8px] font-black text-slate-500 tracking-widest ml-2">SESSION TIMEOUT (MINUTES)</label>
                  <input type="number" defaultValue="30" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-xs font-black text-white outline-none focus:border-red-500 transition-all" />
                </div>
                <div className="space-y-3">
                  <label className="text-[8px] font-black text-slate-500 tracking-widest ml-2">PASSWORD EXPIRY (DAYS)</label>
                  <input type="number" defaultValue="90" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-xs font-black text-white outline-none focus:border-red-500 transition-all" />
                </div>
              </div>

              <div className="flex items-center justify-between p-6 bg-red-600/5 border border-red-600/20 rounded-2xl">
                <div className="flex items-center gap-4">
                  <Fingerprint className="w-6 h-6 text-red-500" />
                  <div>
                    <p className="text-[10px] font-black text-white tracking-widest">FORCE MULTI-FACTOR AUTH (MFA)</p>
                    <p className="text-[8px] font-bold text-slate-600 tracking-widest">REQUIRE OTP FOR ALL HR AND ADMIN LOGINS</p>
                  </div>
                </div>
                <div className="w-12 h-6 bg-red-600 rounded-full relative p-1 cursor-pointer">
                    <div className="w-4 h-4 bg-white rounded-full ml-auto" />
                </div>
              </div>
            </div>

            {/* SYSTEM DATA MANAGEMENT */}
            <div className="bg-slate-900/40 border border-white/5 rounded-[3rem] p-10 space-y-8">
              <h3 className="text-xs font-black text-indigo-500 tracking-[0.4em] flex items-center gap-3">
                <Database className="w-4 h-4" /> Database Maintenance
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <button className="flex flex-col items-start gap-4 p-8 bg-white/5 border border-white/5 rounded-[2rem] hover:bg-white/10 transition-all text-left">
                  <RefreshCw className="w-6 h-6 text-indigo-400" />
                  <div>
                    <h4 className="text-[10px] font-black text-white tracking-widest mb-1">RE-INDEX DATABASE</h4>
                    <p className="text-[8px] font-bold text-slate-600 tracking-widest uppercase">OPTIMIZE QUERY PERFORMANCE</p>
                  </div>
                </button>
                <button className="flex flex-col items-start gap-4 p-8 bg-white/5 border border-white/5 rounded-[2rem] hover:bg-white/10 transition-all text-left">
                  <Cloud className="w-6 h-6 text-emerald-400" />
                  <div>
                    <h4 className="text-[10px] font-black text-white tracking-widest mb-1">BACKUP TO CLOUD</h4>
                    <p className="text-[8px] font-bold text-slate-600 tracking-widest uppercase">TRIGGER MANUAL SYSTEM SNAPSHOT</p>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: INFRASTRUCTURE & PROFILE */}
          <div className="space-y-10">
            
            {/* SERVER STATUS STAMP */}
            <div className="bg-slate-900/40 border border-white/5 rounded-[3rem] p-10 space-y-6">
              <h3 className="text-[10px] font-black text-slate-500 tracking-[0.4em]">Infrastructure</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-end">
                    <div className="flex items-center gap-3">
                        <HardDrive className="w-4 h-4 text-red-500" />
                        <span className="text-[10px] font-black text-white tracking-widest uppercase">Storage Capacity</span>
                    </div>
                    <span className="text-[10px] font-black text-red-500">84% FULL</span>
                </div>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-red-600 w-[84%]" />
                </div>
                <p className="text-[8px] font-bold text-slate-600 tracking-widest uppercase">AWS BUCKET: US-EAST-1-PROD-V4</p>
              </div>
            </div>

            {/* ADMIN PROFILE STUB */}
            <div className="bg-white/5 border border-white/10 rounded-[3rem] p-10 text-center space-y-6">
                <div className="w-24 h-24 bg-red-600 rounded-[2.5rem] mx-auto flex items-center justify-center shadow-2xl shadow-red-600/20">
                    <ShieldCheck className="w-12 h-12 text-white" />
                </div>
                <div>
                    <h2 className="text-xl font-black text-white tracking-tighter uppercase">Root Admin</h2>
                    <p className="text-[8px] font-black text-red-500 tracking-[0.4em] mt-2">ID: #SYS-001-ALPHA</p>
                </div>
                <button className="w-full py-4 bg-white text-black rounded-2xl text-[9px] font-black tracking-widest hover:bg-red-500 hover:text-white transition-all uppercase">
                    Change Access Key
                </button>
            </div>

            {/* NOTIFICATIONS */}
            <div className="bg-slate-900/40 border border-white/5 rounded-[3rem] p-10 space-y-6">
              <h3 className="text-[10px] font-black text-slate-500 tracking-[0.4em] flex items-center gap-2">
                <Bell className="w-3 h-3" /> System Alerts
              </h3>
              <div className="space-y-4">
                {['CRITICAL ERRORS', 'USER LOGINS', 'DAILY EXPORTS'].map((alert) => (
                  <div key={alert} className="flex items-center justify-between">
                    <span className="text-[9px] font-black text-slate-300 tracking-widest">{alert}</span>
                    <input type="checkbox" className="accent-red-600" defaultChecked />
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
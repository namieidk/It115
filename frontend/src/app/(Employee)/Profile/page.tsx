'use client';

import React from 'react';
import { Sidebar } from '../../../components/(Employee)/Dashboard/Sidebar';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  Calendar, 
  ShieldCheck, 
  Fingerprint, 
  Camera,
  Edit3,
  Award,
  Globe
} from 'lucide-react';

export default function ProfilePage() {
  const employeeData = {
    name: "ALEXANDER WRIGHT",
    id: "AX-2024-0912",
    role: "L3 SENIOR TECH SUPPORT",
    dept: "NORTH AMERICAN OPERATIONS",
    tenure: "2 YEARS, 4 MONTHS",
    status: "ACTIVE / FULL-TIME",
    email: "A.WRIGHT@AXIOM.CORP",
    phone: "+63 917 123 4567",
    address: "BGC, TAGUIG CITY, METRO MANILA",
    emergency: "SARAH WRIGHT (SPOUSE) - 0917-000-0000"
  };

  return (
    <main className="h-screen w-full flex bg-[#020617] text-slate-200 overflow-hidden font-sans uppercase">
      {/* GLOBAL SIDEBAR */}
      <Sidebar />

      <section className="flex-1 flex flex-col overflow-y-auto bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-[#020617] to-[#020617]">
        
        {/* HEADER */}
        <header className="px-12 py-10 border-b border-white/5 flex justify-between items-center backdrop-blur-xl sticky top-0 z-20 bg-[#020617]/80">
          <div className="flex items-center gap-2 text-emerald-500">
              <Fingerprint className="w-4 h-4" strokeWidth={3} />
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">Identity Management</span>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">
              <Edit3 className="w-4 h-4" /> Request Info Update
          </button>
        </header>

        <div className="p-12 max-w-[1200px] w-full mx-auto space-y-10">
          
          {/* PROFILE HERO SECTION */}
          <div className="flex flex-col md:flex-row items-center gap-10 bg-slate-900/40 border border-white/5 p-12 rounded-[4rem] relative overflow-hidden shadow-2xl">
             {/* Background Decoration */}
             <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>
             
             {/* Avatar Area */}
             <div className="relative group">
                <div className="w-48 h-48 rounded-[3rem] bg-slate-800 border-4 border-white/5 flex items-center justify-center overflow-hidden">
                    <User className="w-24 h-24 text-slate-600" />
                </div>
                <button className="absolute bottom-2 right-2 p-4 bg-emerald-500 rounded-2xl text-slate-950 shadow-xl group-hover:scale-110 transition-transform active:scale-95">
                    <Camera className="w-5 h-5" />
                </button>
             </div>

             {/* Basic Info */}
             <div className="text-center md:text-left space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-[9px] font-black text-emerald-500 tracking-widest">
                    <ShieldCheck className="w-3 h-3" /> VERIFIED EMPLOYEE
                </div>
                <h1 className="text-5xl font-black text-white tracking-tighter leading-none">{employeeData.name}</h1>
                <p className="text-sm font-black text-slate-500 tracking-widest uppercase">{employeeData.role}</p>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-6 pt-4">
                   <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-emerald-500" />
                      <span className="text-[10px] font-black tracking-widest text-slate-400">{employeeData.dept}</span>
                   </div>
                   <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-emerald-500" />
                      <span className="text-[10px] font-black tracking-widest text-slate-400">{employeeData.tenure}</span>
                   </div>
                </div>
             </div>
          </div>

          {/* INFORMATION GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* PERSONAL DATA */}
            <div className="space-y-6">
               <h3 className="text-xs font-black text-emerald-500 tracking-[0.4em] px-4 flex items-center gap-3 uppercase">
                 <User className="w-4 h-4" /> Personal Dossier
               </h3>
               <div className="bg-slate-900/20 border border-white/5 rounded-[3rem] p-10 space-y-8">
                  <div className="space-y-1">
                     <p className="text-[9px] font-black text-slate-600 tracking-[0.2em]">CONTACT EMAIL</p>
                     <p className="text-xs font-black text-white tracking-widest flex items-center gap-2">
                        <Mail className="w-3.5 h-3.5 text-emerald-500" /> {employeeData.email}
                     </p>
                  </div>
                  <div className="space-y-1">
                     <p className="text-[9px] font-black text-slate-600 tracking-[0.2em]">CONTACT NUMBER</p>
                     <p className="text-xs font-black text-white tracking-widest flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-emerald-500" /> {employeeData.phone}
                     </p>
                  </div>
                  <div className="space-y-1">
                     <p className="text-[9px] font-black text-slate-600 tracking-[0.2em]">RESIDENTIAL ADDRESS</p>
                     <p className="text-xs font-black text-white tracking-widest flex items-center gap-2 uppercase">
                        <MapPin className="w-3.5 h-3.5 text-emerald-500" /> {employeeData.address}
                     </p>
                  </div>
               </div>
            </div>

            {/* EMPLOYMENT DETAILS */}
            <div className="space-y-6">
               <h3 className="text-xs font-black text-blue-400 tracking-[0.4em] px-4 flex items-center gap-3 uppercase">
                 <Award className="w-4 h-4" /> Career Standing
               </h3>
               <div className="bg-slate-900/20 border border-white/5 rounded-[3rem] p-10 space-y-8">
                  <div className="space-y-1">
                     <p className="text-[9px] font-black text-slate-600 tracking-[0.2em]">EMPLOYEE SERIAL NUMBER</p>
                     <p className="text-xs font-black text-white tracking-widest flex items-center gap-2">
                        <Fingerprint className="w-3.5 h-3.5 text-blue-400" /> {employeeData.id}
                     </p>
                  </div>
                  <div className="space-y-1">
                     <p className="text-[9px] font-black text-slate-600 tracking-[0.2em]">EMPLOYMENT STATUS</p>
                     <p className="text-xs font-black text-white tracking-widest flex items-center gap-2">
                        <Globe className="w-3.5 h-3.5 text-blue-400" /> {employeeData.status}
                     </p>
                  </div>
                  <div className="space-y-1">
                     <p className="text-[9px] font-black text-slate-600 tracking-[0.2em]">EMERGENCY PROTOCOL</p>
                     <p className="text-xs font-black text-white tracking-widest flex items-center gap-2">
                        <ShieldCheck className="w-3.5 h-3.5 text-blue-400" /> {employeeData.emergency}
                     </p>
                  </div>
               </div>
            </div>

          </div>

          {/* ACCOUNT SECURITY FOOTER */}
          <div className="bg-white/5 border border-white/5 p-8 rounded-[2.5rem] flex items-center justify-between">
             <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-950 flex items-center justify-center border border-white/10">
                    <ShieldCheck className="w-5 h-5 text-emerald-500" />
                </div>
                <div>
                    <p className="text-[10px] font-black text-white uppercase tracking-widest">Password & Security</p>
                    <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Last updated 14 days ago</p>
                </div>
             </div>
             <button className="px-6 py-3 bg-white/10 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-white/20 transition-all text-white border border-white/10">
                Update Credentials
             </button>
          </div>

        </div>
      </section>
    </main>
  );
}
'use client';

import React, { useState } from 'react';
import { AdminSidebar } from '../../../components/(Admin)/Sidebar';
import { 
  UserPlus, 
  Search, 
  ShieldCheck, 
  UserRoundCog, 
  ArrowLeft,
  Save,
  Trash2,
  Fingerprint,
  UserCheck,
  ChevronRight
} from 'lucide-react';

// --- TYPES ---
interface UserAccount {
  id: string;
  name: string;
  email: string;
  role: 'ADMIN' | 'HR' | 'MANAGER' | 'EMPLOYEE';
  status: 'ACTIVE' | 'PENDING';
}

type AccountView = 'list' | 'create';

export default function ManageAccountsPage() {
  const [view, setView] = useState<AccountView>('list');

  // --- MOCK DATA ---
  const accounts: UserAccount[] = [
    { id: 'SYS-001', name: 'SYSTEM ADMIN', email: 'root@company.com', role: 'ADMIN', status: 'ACTIVE' },
    { id: 'HR-202', name: 'CLARA VALDEZ', email: 'c.valdez@hr.com', role: 'HR', status: 'ACTIVE' },
    { id: 'MGR-405', name: 'RICHARD STARK', email: 'r.stark@ops.com', role: 'MANAGER', status: 'ACTIVE' },
    { id: 'EMP-990', name: 'ALEX WRIGHT', email: 'a.wright@staff.com', role: 'EMPLOYEE', status: 'PENDING' },
  ];

  // --- RENDER 1: ACCOUNT LIST ---
  if (view === 'list') {
    return (
      <main className="h-screen w-full flex bg-[#020617] text-slate-200 overflow-hidden font-sans uppercase">
        <AdminSidebar />
        <section className="flex-1 flex flex-col overflow-y-auto bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-900/10 via-[#020617] to-[#020617]">
          
          <header className="px-12 py-10 border-b border-white/5 flex justify-between items-end backdrop-blur-md sticky top-0 z-20 bg-[#020617]/80">
            <div>
              <div className="flex items-center gap-2 text-red-500 mb-2">
                  <UserRoundCog className="w-4 h-4" strokeWidth={3} />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em]">Identity Management</span>
              </div>
              <h1 className="text-4xl font-black text-white tracking-tighter uppercase">Manage <span className="text-red-600">Accounts</span></h1>
            </div>

            <button 
              onClick={() => setView('create')}
              className="flex items-center gap-3 px-8 py-4 bg-red-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-red-500 transition-all shadow-xl shadow-red-600/20"
            >
              <UserPlus className="w-4 h-4" /> Provision New Acc
            </button>
          </header>

          <div className="p-12 max-w-[1600px] w-full mx-auto space-y-10">
            <div className="bg-slate-900/40 border border-white/5 rounded-[3rem] overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5 border-b border-white/5 text-[10px] font-black text-slate-500 tracking-[0.3em]">
                    <th className="px-10 py-6">IDENTIFIER / USER</th>
                    <th className="px-6 py-6">ROLE ASSIGNMENT</th>
                    <th className="px-6 py-6 text-center">STATUS</th>
                    <th className="px-10 py-6 text-right">COMMAND</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {accounts.map((acc) => (
                    <tr key={acc.id} className="hover:bg-red-600/5 transition-colors">
                      <td className="px-10 py-6">
                        <p className="text-xs font-black text-white tracking-tight">{acc.name}</p>
                        <p className="text-[8px] font-bold text-slate-600 tracking-widest">{acc.id}  {acc.email}</p>
                      </td>
                      <td className="px-6 py-6">
                        <span className={`text-[10px] font-black px-3 py-1 rounded-lg border ${
                          acc.role === 'ADMIN' ? 'text-red-500 border-red-500/20 bg-red-500/5' :
                          acc.role === 'HR' ? 'text-indigo-400 border-indigo-400/20 bg-indigo-400/5' :
                          'text-slate-500 border-white/5 bg-white/5'
                        }`}>
                          {acc.role}
                        </span>
                      </td>
                      <td className="px-6 py-6 text-center">
                        <span className={`text-[8px] font-black tracking-widest ${acc.status === 'ACTIVE' ? 'text-emerald-500' : 'text-orange-500'}`}>
                          ● {acc.status}
                        </span>
                      </td>
                      <td className="px-10 py-6 text-right space-x-4">
                        <button className="text-[9px] font-black text-slate-500 hover:text-white transition-all uppercase">Edit</button>
                        <button className="text-[9px] font-black text-red-500/50 hover:text-red-500 transition-all uppercase">Revoke</button>
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

  // --- RENDER 2: PROVISION FORM ---
  return (
    <main className="h-screen w-full flex bg-[#020617] text-slate-200 overflow-hidden font-sans uppercase">
      <AdminSidebar />
      <section className="flex-1 flex flex-col overflow-y-auto">
        <header className="p-12 border-b border-white/5 flex justify-between items-center bg-[#020617]">
          <button onClick={() => setView('list')} className="flex items-center gap-2 text-red-500 font-black text-[10px] tracking-widest uppercase">
            <ArrowLeft className="w-4 h-4" /> Abort Provisioning
          </button>
          <div className="text-right">
            <h2 className="text-xl font-black text-white tracking-tighter uppercase">Provision New Account</h2>
            <p className="text-[8px] font-black text-slate-500 tracking-[0.3em]">ROOT PRIVILEGE REQUIRED</p>
          </div>
        </header>

        <div className="p-12 max-w-4xl mx-auto w-full space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* PERSONAL DETAILS */}
            <div className="space-y-6">
              <h3 className="text-[10px] font-black text-red-500 tracking-[0.4em] flex items-center gap-2"><UserCheck className="w-4 h-4" /> Identity Details</h3>
              <div className="space-y-4 text-left">
                <div className="space-y-2">
                  <label className="text-[8px] font-black text-slate-600 tracking-widest ml-2">Full Legal Name</label>
                  <input placeholder="ENTER NAME..." className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-xs font-black text-white outline-none focus:border-red-500 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[8px] font-black text-slate-600 tracking-widest ml-2">Corporate Email</label>
                  <input type="email" placeholder="USER@COMPANY.COM" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-xs font-black text-white outline-none focus:border-red-500 transition-all" />
                </div>
              </div>
            </div>

            {/* ROLE & PERMISSIONS */}
            <div className="space-y-6">
              <h3 className="text-[10px] font-black text-red-500 tracking-[0.4em] flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Authority Level</h3>
              <div className="space-y-4 text-left">
                <div className="space-y-2">
                  <label className="text-[8px] font-black text-slate-600 tracking-widest ml-2">System Role</label>
                  <select className="w-full bg-slate-900 border border-white/10 rounded-2xl p-4 text-xs font-black text-white outline-none focus:border-red-500 appearance-none">
                    <option>SELECT ROLE...</option>
                    <option>ADMIN</option>
                    <option>HR</option>
                    <option>MANAGER</option>
                    <option>EMPLOYEE</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[8px] font-black text-slate-600 tracking-widest ml-2">Department Assignment</label>
                  <select className="w-full bg-slate-900 border border-white/10 rounded-2xl p-4 text-xs font-black text-white outline-none focus:border-red-500 appearance-none">
                    <option>SELECT DEPT...</option>
                    <option>TECH OPS</option>
                    <option>CUSTOMER CARE</option>
                    <option>FINANCE</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* CONFIRMATION BLOCK */}
          <div className="bg-red-600/5 border border-red-600/20 p-8 rounded-[2.5rem] flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Fingerprint className="w-8 h-8 text-red-500" />
              <p className="text-[9px] font-black text-slate-400 tracking-widest uppercase leading-relaxed">
                By provisionining this account, you grant access <br /> to internal system infrastructure. Proceed with caution.
              </p>
            </div>
            <button className="px-12 py-5 bg-red-600 text-white rounded-2xl font-black text-[10px] tracking-widest hover:bg-red-500 transition-all shadow-xl shadow-red-600/20 flex items-center gap-2 uppercase">
              <Save className="w-4 h-4" /> Commit Account
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
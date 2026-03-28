'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, Clock, MessageSquare, 
  Target, BarChart3, CreditCard, UserCircle, LogOut, ShieldAlert, 
  FilePlus 
} from 'lucide-react';

const menuItems = [
  { name: 'Dashboard', icon: LayoutDashboard, path: '/Dashboard' },
  { name: 'Attendance', icon: Clock, path: '/Attendance' },
  { name: 'Request Leave', icon: FilePlus, path: '/LeaveReq' },
  { name: 'Messages', icon: MessageSquare, path: '/Message' },
  { name: 'Evaluation', icon: Target, path: '/Evaluation' },
  { name: 'Reports', icon: BarChart3, path: '/Reports' },
  { name: 'Payroll', icon: CreditCard, path: '/Payroll' },
  { name: 'Profile', icon: UserCircle, path: '/Profile' },
];

export const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="w-72 h-screen bg-[#020617] border-r border-white/5 flex flex-col p-8 sticky top-0 shrink-0">
      <div className="flex items-center gap-3 mb-12">
        <div className="h-10 w-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-600/20">
          <ShieldAlert className="text-white w-6 h-6" strokeWidth={2.5} />
        </div>
        <div className="flex flex-col">
          <span className="text-white font-black tracking-tighter text-xl leading-none uppercase">Axiom</span>
          <span className="text-indigo-500 font-bold text-[10px] tracking-[0.4em] uppercase">Core</span>
        </div>
      </div>
      <nav className="flex-1 space-y-2 overflow-y-auto custom-scrollbar">
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link key={item.name} href={item.path}
              className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all font-bold text-sm border ${
                isActive 
                ? 'bg-indigo-600/10 text-indigo-400 border-indigo-600/20 shadow-lg shadow-indigo-900/10' 
                : 'text-slate-500 border-transparent hover:text-slate-200 hover:bg-white/5'
              }`}>
              <item.icon className={`w-5 h-5 ${isActive ? 'text-indigo-400' : ''}`} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[11px] font-black uppercase tracking-widest">{item.name}</span>
            </Link>
          );
        })}
      </nav>
      <button className="flex items-center gap-4 px-4 py-4 text-slate-600 hover:text-red-400 font-black text-[10px] uppercase tracking-widest transition-colors border-t border-white/5 mt-auto group">
        <LogOut className="w-5 h-5 group-hover:animate-pulse" /> Terminate Session
      </button>
    </aside>
  );
};
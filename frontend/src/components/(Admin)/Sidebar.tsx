'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  MessageSquare, 
  BarChart3, 
  UserRoundCog, // REPLACED HERE
  History, 
  Settings, 
  ShieldAlert,
  LogOut,
  Terminal
} from 'lucide-react';

const adminLinks = [
  { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
  { name: 'Message', href: '/admin/message', icon: MessageSquare },
  { name: 'Reports', href: '/admin/reports', icon: BarChart3 },
  { name: 'Manage Acc', href: '/admin/accounts', icon: UserRoundCog }, // REPLACED HERE
  { name: 'Audit Logs', href: '/admin/logs', icon: History },
  { name: 'Settings', href: '/admin/settings', icon: Settings },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-80 h-screen bg-[#020617] border-r border-white/5 flex flex-col font-sans uppercase">
      
      {/* BRANDING / LOGO AREA */}
      <div className="p-10">
        <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center shadow-lg shadow-red-600/20">
                <ShieldAlert className="w-5 h-5 text-white" strokeWidth={3} />
            </div>
            <span className="text-xl font-black text-white tracking-tighter uppercase">System <span className="text-red-600">Admin</span></span>
        </div>
        <p className="text-[8px] font-black text-slate-600 tracking-[0.5em] ml-1">Root Authority v4.0</p>
      </div>

      {/* NAVIGATION LINKS */}
      <nav className="flex-1 px-6 space-y-2">
        {adminLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link 
              key={link.name} 
              href={link.href}
              className={`flex items-center gap-4 px-6 py-4 rounded-2xl transition-all group ${
                isActive 
                ? 'bg-red-600 text-white shadow-xl shadow-red-600/20' 
                : 'text-slate-500 hover:bg-white/5 hover:text-white'
              }`}
            >
              <link.icon className={`w-5 h-5 ${isActive ? 'text-white' : 'group-hover:text-red-500 transition-colors'}`} />
              <span className="text-[10px] font-black tracking-[0.2em] uppercase">{link.name}</span>
              {isActive && (
                <div className="ml-auto w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* FOOTER / SYSTEM STATUS */}
      <div className="p-8 space-y-6">
        <div className="bg-slate-900/40 border border-white/5 p-5 rounded-[2rem] space-y-3">
            <div className="flex items-center justify-between">
                <span className="text-[8px] font-black text-slate-600 tracking-widest flex items-center gap-2">
                    <Terminal className="w-3 h-3" /> SYS CORE
                </span>
                <span className="text-[8px] font-black text-emerald-500">STABLE</span>
            </div>
            <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-red-600 w-full" />
            </div>
        </div>

        <button className="w-full flex items-center justify-center gap-3 px-6 py-5 rounded-2xl border border-red-500/10 text-red-500 font-black text-[10px] tracking-widest hover:bg-red-500 hover:text-white transition-all uppercase">
          <LogOut className="w-4 h-4" /> Terminate Session
        </button>
      </div>
    </aside>
  );
}
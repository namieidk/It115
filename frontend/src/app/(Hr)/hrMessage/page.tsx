'use client';

import React, { useState } from 'react';
import { HRSidebar } from '../../../components/(Hr)/Dashboard/sidebar';
import { 
  Send, 
  Search, 
  ShieldAlert, 
  MoreVertical, 
  Paperclip, 
  User,
  Lock,
  Globe,
  Briefcase
} from 'lucide-react';

interface Contact {
  id: number;
  name: string;
  role: string;
  status: 'online' | 'offline';
  lastMsg: string;
  type: 'ADMIN' | 'MANAGER';
}

const hrContacts: Contact[] = [
  { id: 1, name: 'SYSTEM ADMIN', role: 'Global Infrastructure', status: 'online', lastMsg: 'SERVER MIGRATION SCHEDULED FOR 02:00.', type: 'ADMIN' },
  { id: 2, name: 'RICHARD STARK', role: 'Operations Manager', status: 'online', lastMsg: 'EVALUATION OVERRIDE REQUESTED.', type: 'MANAGER' },
  { id: 3, name: 'SARAH JENKINS', role: 'L2 Manager', status: 'offline', lastMsg: 'LEAVE DISCREPANCY RESOLVED.', type: 'MANAGER' },
];

export default function HRMessagePage() {
  const [activeChat, setActiveChat] = useState<Contact>(hrContacts[0]);

  return (
    <main className="h-screen w-full flex bg-[#020617] text-slate-200 overflow-hidden font-sans uppercase">
      <HRSidebar />

      <section className="flex-1 flex overflow-hidden">
        
        {/* LEFT PANE: ENCRYPTED CHANNELS */}
        <div className="w-80 border-r border-white/5 flex flex-col bg-slate-950/20">
          <div className="p-8">
            <div className="flex items-center gap-2 mb-6 text-indigo-500">
                <Lock className="w-4 h-4" />
                <h2 className="text-[10px] font-black uppercase tracking-[0.4em]">Secure Comms</h2>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
              <input 
                placeholder="SEARCH CONTACTS..." 
                className="w-full bg-slate-900/50 border border-white/5 rounded-xl py-3 pl-10 pr-4 text-[10px] font-black uppercase tracking-widest outline-none focus:border-indigo-500/30 transition-all"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-4 space-y-2">
            {hrContacts.map((chat) => (
              <button 
                key={chat.id} 
                onClick={() => setActiveChat(chat)}
                className={`w-full flex items-center gap-4 p-4 rounded-3xl transition-all text-left border ${
                  activeChat.id === chat.id 
                  ? 'bg-indigo-600/10 border-indigo-600/20' 
                  : 'hover:bg-white/5 border-transparent'
                }`}
              >
                <div className="relative">
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center border border-white/10 ${
                    chat.type === 'ADMIN' ? 'bg-red-500/20 text-red-400' : 'bg-indigo-500/20 text-indigo-400'
                  }`}>
                    {chat.type === 'ADMIN' ? <Globe className="w-5 h-5" /> : <Briefcase className="w-5 h-5" />}
                  </div>
                  {chat.status === 'online' && (
                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#020617]" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-0.5">
                    <span className="text-xs font-black text-white tracking-tight">{chat.name}</span>
                    <span className="text-[8px] font-black text-slate-600">ACTIVE</span>
                  </div>
                  <p className="text-[10px] text-slate-500 font-bold tracking-tighter truncate">{chat.lastMsg}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT PANE: ACTIVE CHAT WINDOW */}
        <div className="flex-1 flex flex-col bg-[#020617]">
          
          {/* Chat Header */}
          <div className="px-10 py-6 border-b border-white/5 flex justify-between items-center backdrop-blur-md sticky top-0 bg-[#020617]/80 z-10">
            <div className="flex items-center gap-5">
              <div className={`w-11 h-11 rounded-2xl flex items-center justify-center font-black text-white ${
                activeChat.type === 'ADMIN' ? 'bg-red-600' : 'bg-indigo-600'
              }`}>
                {activeChat.name[0]}
              </div>
              <div>
                <h3 className="text-sm font-black text-white tracking-widest uppercase">{activeChat.name}</h3>
                <div className="flex items-center gap-2">
                    <ShieldAlert className="w-3 h-3 text-indigo-500" />
                    <p className="text-[9px] font-black text-slate-500 tracking-[0.2em]">{activeChat.role}  GLOBAL ACCESS</p>
                </div>
              </div>
            </div>
            <button className="p-2 hover:bg-white/5 rounded-xl transition-colors">
              <MoreVertical className="w-5 h-5 text-slate-500" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-10 space-y-8 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
            
            <div className="flex justify-center">
                <span className="text-[8px] font-black text-slate-600 border border-white/5 px-4 py-1 rounded-full bg-white/5 tracking-[0.3em]">SECURE {activeChat.type} PROTOCOL ACTIVE</span>
            </div>

            {/* Received Message */}
            <div className="flex flex-col items-start max-w-[60%]">
              <div className="bg-slate-900 border border-white/5 p-5 rounded-3xl rounded-bl-none shadow-2xl">
                <p className="text-xs font-bold text-slate-200 leading-relaxed tracking-tight uppercase">
                  {activeChat.lastMsg}
                </p>
              </div>
              <span className="text-[9px] font-black text-slate-600 mt-3 ml-2 tracking-widest">{activeChat.name}  RECEIVED</span>
            </div>

            {/* Sent Message */}
            <div className="flex flex-col items-end ml-auto max-w-[60%]">
              <div className="bg-indigo-600 p-5 rounded-3xl rounded-br-none shadow-xl shadow-indigo-500/10">
                <p className="text-xs font-black text-white leading-relaxed tracking-tight uppercase">
                  &quot;UNDERSTOOD. UPDATING SYSTEM LOGS AND NOTIFYING NECESSARY PERSONNEL.&quot;
                </p>
              </div>
              <span className="text-[9px] font-black text-slate-600 mt-3 mr-2 tracking-widest">HR ADMIN // DISPATCHED</span>
            </div>

          </div>

          {/* Input Area */}
          <div className="p-10 border-t border-white/5">
            <div className="bg-slate-900/50 border border-white/10 rounded-[2.5rem] p-2 flex items-center gap-2 focus-within:border-indigo-500/50 transition-all backdrop-blur-2xl shadow-inner">
              <button className="p-4 text-slate-500 hover:text-white transition-colors">
                <Paperclip className="w-5 h-5" />
              </button>
              <input 
                placeholder="TYPE AUTHORIZED MESSAGE..." 
                className="flex-1 bg-transparent outline-none text-[10px] font-black tracking-widest text-white px-4 placeholder:text-slate-800"
              />
              <button className="bg-indigo-600 p-4 rounded-full text-white hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-500/20">
                <Send className="w-5 h-5" strokeWidth={3} />
              </button>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
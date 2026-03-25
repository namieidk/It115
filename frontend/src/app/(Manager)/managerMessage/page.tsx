'use client';

import React, { useState } from 'react';
import { ManagerSidebar } from '../../../components/(Manager)/Dashboard/ManagerSidebar';
import { 
  Send, 
  Search, 
  ShieldCheck, 
  MoreVertical, 
  Paperclip, 
  User,
  MessageSquare,
  Lock,
  Building2
} from 'lucide-react';

const managerContacts = [
  { id: 1, name: 'HR DEPARTMENT', role: 'Compliance & Payroll', status: 'online', lastMsg: 'QUARTERLY AUDIT STARTING MONDAY.', type: 'HR' },
  { id: 2, name: 'ALEXANDER WRIGHT', role: 'L3 Tech Support', status: 'online', lastMsg: 'ACKNOWLEDGED. UPDATING LOGS NOW.', type: 'EMPLOYEE' },
  { id: 3, name: 'MARIA SANTOS', role: 'L1 Agent', status: 'offline', lastMsg: 'LEAVE REQUEST SUBMITTED.', type: 'EMPLOYEE' },
];

export default function ManagerMessagesPage() {
  const [activeChat, setActiveChat] = useState(managerContacts[0]);

  return (
    <main className="h-screen w-full flex bg-[#020617] text-slate-200 overflow-hidden font-sans uppercase">
      {/* MANAGER SIDEBAR */}
      <ManagerSidebar />

      <section className="flex-1 flex overflow-hidden">
        
        {/* LEFT PANE: ENCRYPTED THREADS */}
        <div className="w-80 border-r border-white/5 flex flex-col bg-slate-950/20">
          <div className="p-8">
            <div className="flex items-center gap-2 mb-6 text-blue-500">
                <Lock className="w-4 h-4" />
                <h2 className="text-[10px] font-black uppercase tracking-[0.4em]">Secure Channels</h2>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
              <input 
                placeholder="SEARCH DIRECTORY..." 
                className="w-full bg-slate-900/50 border border-white/5 rounded-xl py-3 pl-10 pr-4 text-[10px] font-black uppercase tracking-widest outline-none focus:border-blue-500/30 transition-all"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-4 space-y-2">
            {managerContacts.map((chat) => (
              <button 
                key={chat.id} 
                onClick={() => setActiveChat(chat)}
                className={`w-full flex items-center gap-4 p-4 rounded-3xl transition-all text-left border ${
                  activeChat.id === chat.id 
                  ? 'bg-blue-600/10 border-blue-600/20' 
                  : 'hover:bg-white/5 border-transparent'
                }`}
              >
                <div className="relative">
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center border border-white/10 ${
                    chat.type === 'HR' ? 'bg-orange-500/20 text-orange-400' : 'bg-slate-800 text-slate-500'
                  }`}>
                    {chat.type === 'HR' ? <Building2 className="w-5 h-5" /> : <User className="w-5 h-5" />}
                  </div>
                  {chat.status === 'online' && (
                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#020617]" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-0.5">
                    <span className="text-xs font-black text-white tracking-tight">{chat.name}</span>
                    <span className="text-[8px] font-black text-slate-600">NOW</span>
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
              <div className={`w-11 h-11 rounded-2xl flex items-center justify-center font-black text-slate-950 ${
                activeChat.type === 'HR' ? 'bg-orange-500' : 'bg-blue-600'
              }`}>
                {activeChat.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h3 className="text-sm font-black text-white tracking-widest">{activeChat.name}</h3>
                <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3 h-3 text-blue-500" />
                    <p className="text-[9px] font-black text-slate-500 tracking-[0.2em]">{activeChat.role}  LVL-2 ACCESS</p>
                </div>
              </div>
            </div>
            <button className="p-2 hover:bg-white/5 rounded-xl transition-colors">
              <MoreVertical className="w-5 h-5 text-slate-500" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-10 space-y-8 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
            
            {/* System Notification */}
            <div className="flex justify-center">
                <span className="text-[8px] font-black text-slate-600 border border-white/5 px-4 py-1 rounded-full bg-white/5 tracking-[0.3em]">ENCRYPTED BRIDGE ESTABLISHED // {activeChat.type} CHANNEL</span>
            </div>

            {/* Received Message (From HR or Employee) */}
            <div className="flex flex-col items-start max-w-[60%]">
              <div className="bg-slate-900 border border-white/5 p-5 rounded-3xl rounded-bl-none shadow-2xl">
                <p className="text-xs font-bold text-slate-200 leading-relaxed tracking-tight">
                  {activeChat.lastMsg}
                </p>
              </div>
              <span className="text-[9px] font-black text-slate-600 mt-3 ml-2 tracking-widest">{activeChat.name}  08:45 AM</span>
            </div>

            {/* Sent Message (From Manager) */}
            <div className="flex flex-col items-end ml-auto max-w-[60%]">
              <div className="bg-blue-600 p-5 rounded-3xl rounded-br-none shadow-xl shadow-blue-500/10">
                <p className="text-xs font-black text-white leading-relaxed tracking-tight">
                  ACKNOWLEDGED. I AM MONITORING THE SITUATION. ENSURE ALL SHIFT LOGS ARE FINALIZED.
                </p>
              </div>
              <span className="text-[9px] font-black text-slate-600 mt-3 mr-2 tracking-widest">MANAGER // SENT</span>
            </div>

          </div>

          {/* Input Area */}
          <div className="p-10 border-t border-white/5">
            <div className="bg-slate-900/50 border border-white/10 rounded-[2.5rem] p-2 flex items-center gap-2 focus-within:border-blue-500/50 transition-all backdrop-blur-2xl shadow-inner">
              <button className="p-4 text-slate-500 hover:text-white transition-colors">
                <Paperclip className="w-5 h-5" />
              </button>
              <input 
                placeholder="TYPE SECURE COMMAND OR MESSAGE..." 
                className="flex-1 bg-transparent outline-none text-[10px] font-black tracking-widest text-white px-4 placeholder:text-slate-700"
              />
              <button className="bg-blue-600 p-4 rounded-full text-white hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/20 active:scale-90">
                <Send className="w-5 h-5" strokeWidth={3} />
              </button>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
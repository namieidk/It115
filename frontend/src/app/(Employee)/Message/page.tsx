'use client';

import React, { useState } from 'react';
import { Sidebar } from '../../../components/(Employee)/Dashboard/Sidebar';  
import { 
  Send, 
  Search, 
  ShieldCheck, 
  MoreVertical, 
  Paperclip, 
  User,
  MessageSquare
} from 'lucide-react';

const chats = [
  { id: 1, name: 'Sarah Miller', role: 'Team Lead', status: 'online', lastMsg: 'Shift report received.', time: '06:12' },
  { id: 2, name: 'Mike Ross', role: 'Operations Manager', status: 'offline', lastMsg: 'Check the new KPI updates.', time: 'Yesterday' },
  { id: 3, name: 'System Admin', role: 'Security', status: 'online', lastMsg: 'Password expires in 3 days.', time: '09:45' },
];

export default function MessagesPage() {
  const [activeChat, setActiveChat] = useState(chats[0]);

  return (
    <main className="h-screen w-full flex bg-[#020617] text-slate-200 overflow-hidden font-sans uppercase">
      {/* SIDEBAR - Keep your existing component */}
      <Sidebar />

      {/* MESSAGING INTERFACE */}
      <section className="flex-1 flex overflow-hidden">
        
        {/* LEFT PANE: CONVERSATION LIST */}
        <div className="w-80 border-r border-white/5 flex flex-col bg-slate-950/20">
          <div className="p-8">
            <div className="flex items-center gap-2 mb-6 text-emerald-500">
                <MessageSquare className="w-4 h-4" />
                <h2 className="text-[10px] font-black uppercase tracking-[0.4em]">Internal Comms</h2>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
              <input 
                placeholder="Search threads..." 
                className="w-full bg-slate-900/50 border border-white/5 rounded-xl py-3 pl-10 pr-4 text-[10px] font-bold uppercase tracking-widest outline-none focus:border-emerald-500/30 transition-all"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-4 space-y-2">
            {chats.map((chat) => (
              <button 
                key={chat.id} 
                onClick={() => setActiveChat(chat)}
                className={`w-full flex items-center gap-4 p-4 rounded-3xl transition-all text-left border ${
                  activeChat.id === chat.id 
                  ? 'bg-emerald-500/10 border-emerald-500/20' 
                  : 'hover:bg-white/5 border-transparent'
                }`}
              >
                <div className="relative">
                  <div className="w-10 h-10 rounded-2xl bg-slate-800 border border-white/10 flex items-center justify-center">
                    <User className="w-5 h-5 text-slate-500" />
                  </div>
                  {chat.status === 'online' && (
                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#020617]" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-0.5">
                    <span className="text-xs font-black text-white tracking-tight">{chat.name}</span>
                    <span className="text-[8px] font-black text-slate-600">{chat.time}</span>
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
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center font-black text-slate-950">
                {activeChat.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h3 className="text-sm font-black text-white tracking-widest">{activeChat.name}</h3>
                <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3 h-3 text-emerald-500" />
                    <p className="text-[9px] font-black text-slate-500 tracking-[0.2em]">{activeChat.role} </p>
                </div>
              </div>
            </div>
            <button className="p-2 hover:bg-white/5 rounded-xl transition-colors">
              <MoreVertical className="w-5 h-5 text-slate-500" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-10 space-y-8 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/5 via-transparent to-transparent">
            
            {/* System Notification */}
            <div className="flex justify-center">
                <span className="text-[8px] font-black text-slate-600 border border-white/5 px-4 py-1 rounded-full bg-white/5 tracking-[0.3em]">Session Initialized // End-to-End Encrypted</span>
            </div>

            {/* Received Message */}
            <div className="flex flex-col items-start max-w-[60%]">
              <div className="bg-slate-900 border border-white/5 p-5 rounded-3xl rounded-bl-none shadow-2xl">
                <p className="text-xs font-bold text-slate-200 leading-relaxed tracking-tight">
                  THE PERFORMANCE REVIEW FOR Q1 HAS BEEN FINALIZED. PLEASE CHECK YOUR EVALUATION TAB FOR THE FINAL SCORE.
                </p>
              </div>
              <span className="text-[9px] font-black text-slate-600 mt-3 ml-2 tracking-widest">{activeChat.name} </span>
            </div>

            {/* Sent Message */}
            <div className="flex flex-col items-end ml-auto max-w-[60%]">
              <div className="bg-emerald-500 p-5 rounded-3xl rounded-br-none shadow-xl shadow-emerald-500/10">
                <p className="text-xs font-black text-slate-950 leading-relaxed tracking-tight">
                  ACKNOWLEDGED. I WILL REVIEW THE FEEDBACK AND UPDATE THE LOGS ACCORDINGLY.
                </p>
              </div>
              <span className="text-[9px] font-black text-slate-600 mt-3 mr-2 tracking-widest">YOU // 06:14 AM</span>
            </div>

          </div>

          {/* Input Area */}
          <div className="p-10 border-t border-white/5">
            <div className="bg-slate-900/50 border border-white/10 rounded-[2.5rem] p-2 flex items-center gap-2 focus-within:border-emerald-500/50 transition-all backdrop-blur-2xl shadow-inner">
              <button className="p-4 text-slate-500 hover:text-white transition-colors">
                <Paperclip className="w-5 h-5" />
              </button>
              <input 
                placeholder="TYPE SECURE SYSTEM MESSAGE..." 
                className="flex-1 bg-transparent outline-none text-[10px] font-black tracking-widest text-white px-4 placeholder:text-slate-700"
              />
              <button className="bg-emerald-500 p-4 rounded-full text-slate-950 hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/20 active:scale-90">
                <Send className="w-5 h-5" strokeWidth={3} />
              </button>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
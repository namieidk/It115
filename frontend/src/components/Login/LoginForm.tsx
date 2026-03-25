// src/components/login/LoginForm.tsx
'use client';

import React, { useState } from 'react';

export const LoginForm = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    await new Promise(res => setTimeout(res, 2000));
    setError('Invalid System Signature. Try again.');
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-5">
      <div className="space-y-1.5">
        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Employee ID</label>
        <input
          type="text"
          required
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
          placeholder="AX-0000"
          className="w-full px-5 py-3.5 bg-slate-800/50 border border-white/5 rounded-xl text-white outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all font-mono text-sm"
        />
      </div>

      <div className="space-y-1.5">
        <div className="flex justify-between items-center px-1">
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Password</label>
          <button type="button" className="text-[10px] font-bold text-emerald-500 uppercase tracking-tighter">Reset</button>
        </div>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••••••"
          className="w-full px-5 py-3.5 bg-slate-800/50 border border-white/5 rounded-xl text-white outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all font-mono text-sm"
        />
      </div>

      {error && (
        <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-2 animate-pulse">
          <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
          <span className="text-[11px] font-bold text-red-400">{error}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 disabled:bg-slate-800 disabled:text-slate-500 text-slate-950 font-black rounded-xl transition-all active:scale-[0.97] text-sm uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/10"
      >
        {isLoading ? <div className="h-4 w-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" /> : "Authenticate"}
      </button>
    </form>
  );
};
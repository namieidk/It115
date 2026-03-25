// src/components/signup/AdminSignupForm.tsx
'use client';

import React, { useState } from 'react';

export const AdminSignupForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    employeeId: '',
    adminKey: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Logic for ASP.NET Backend will go here
    await new Promise(res => setTimeout(res, 2000));
    setIsLoading(false);
  };

  const inputStyle = "w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-lg text-white outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all font-mono text-xs placeholder:text-slate-700";
  const labelStyle = "text-[9px] font-black uppercase tracking-[0.15em] text-slate-500 ml-1 mb-1.5 block";

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelStyle}>Full Name</label>
          <input 
            type="text" 
            required 
            placeholder="J. DOE"
            className={inputStyle}
            onChange={(e) => setFormData({...formData, fullName: e.target.value})}
          />
        </div>
        <div>
          <label className={labelStyle}>Staff ID</label>
          <input 
            type="text" 
            required 
            placeholder="AX-0000"
            className={inputStyle}
            onChange={(e) => setFormData({...formData, employeeId: e.target.value})}
          />
        </div>
      </div>

      <div>
        <label className={labelStyle}>Master Admin Key</label>
        <input 
          type="password" 
          required 
          placeholder="ENTER PROVISIONING KEY"
          className={inputStyle}
          onChange={(e) => setFormData({...formData, adminKey: e.target.value})}
        />
      </div>

      <div>
        <label className={labelStyle}>System Password</label>
        <input 
          type="password" 
          required 
          placeholder="••••••••••••"
          className={inputStyle}
          onChange={(e) => setFormData({...formData, password: e.target.value})}
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-4 mt-2 bg-white text-slate-950 font-black rounded-lg hover:bg-emerald-400 transition-all active:scale-[0.98] text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 shadow-xl shadow-white/5"
      >
        {isLoading ? (
          <div className="h-3 w-3 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
        ) : "Initialize Admin Account"}
      </button>
    </form>
  );
};
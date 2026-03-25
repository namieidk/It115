// src/components/login/LoginVisuals.tsx
export const LoginBackground = () => (
  <>
    <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-900 rounded-full blur-[120px] opacity-20 animate-pulse" />
    <div className="absolute bottom-[-10%] right-[-10%] w-80 h-80 bg-emerald-900 rounded-full blur-[100px] opacity-10" />
  </>
);

export const LoginHeader = () => (
  <div className="text-center mb-8 flex flex-col items-center">
    <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-500 mb-4 shadow-lg shadow-emerald-500/20">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-slate-950">
        <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
      </svg>
    </div>
    <h1 className="text-2xl font-black tracking-tighter text-white uppercase italic">
      Axiom <span className="font-light text-emerald-400 not-italic">Core</span>
    </h1>
    <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 mt-1 font-bold">Secure ERP Access</p>
  </div>
);
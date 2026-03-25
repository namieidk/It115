// src/components/signup/SignupHeader.tsx
export const SignupHeader = () => (
  <div className="text-center mb-6 flex flex-col items-center">
    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-800 border border-emerald-500/30 mb-4 shadow-inner">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-emerald-400">
        <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12c0 2.754 1.143 5.24 2.982 7.027a.75.75 0 0 0 1.014-1.037 8.23 8.23 0 0 1-2.246-5.99c0-4.556 3.694-8.25 8.25-8.25s8.25 3.694 8.25 8.25a8.23 8.23 0 0 1-2.246 5.99.75.75 0 0 0 1.014 1.037ZM12 2.25a.75.75 0 0 0 0 1.5c4.142 0 7.5 3.358 7.5 7.5a.75.75 0 0 0 1.5 0c0-4.97-4.03-9-9-9Z" clipRule="evenodd" />
        <path d="M12 8.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Z" />
      </svg>
    </div>
    <h1 className="text-xl font-black tracking-[0.2em] text-white uppercase">
      Admin <span className="text-emerald-500 font-light">Enrollment</span>
    </h1>
    <p className="text-[10px] uppercase tracking-widest text-slate-500 mt-2 font-bold bg-slate-950 px-3 py-1 rounded-full border border-white/5">
      Terminal ID: AX-SYS-77
    </p>
  </div>
);
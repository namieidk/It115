'use client';
import { CheckCircle2, XCircle, Clock, AlertCircle } from 'lucide-react';

const attendanceData = [
  { date: 'MAR 25, 2026', shift: '22:00 - 07:00', status: 'PRESENT', hours: '9.0', logs: '22:01 IN / 07:05 OUT', type: 'Success' },
  { date: 'MAR 24, 2026', shift: '22:00 - 07:00', status: 'LATE', hours: '8.5', logs: '22:30 IN / 07:00 OUT', type: 'Warning' },
  { date: 'MAR 23, 2026', shift: '22:00 - 07:00', status: 'PRESENT', hours: '9.0', logs: '21:55 IN / 07:02 OUT', type: 'Success' },
  { date: 'MAR 21, 2026', shift: '22:00 - 07:00', status: 'ABSENT', hours: '0.0', logs: 'NO LOG FOUND', type: 'Danger' },
];

export const AttendanceTable = () => (
  <div className="w-full bg-slate-900/40 border border-white/5 rounded-[3rem] overflow-hidden backdrop-blur-3xl shadow-2xl">
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="bg-white/5 text-[10px] uppercase tracking-[0.25em] text-slate-500 font-black">
          <th className="px-10 py-6">Date</th>
          <th className="px-10 py-6">Shift Schedule</th>
          <th className="px-10 py-6">Status</th>
          <th className="px-10 py-6">Activity Logs</th>
          <th className="px-10 py-6 text-right">Hours</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-white/5">
        {attendanceData.map((row, idx) => (
          <tr key={idx} className="hover:bg-white/5 transition-colors group">
            <td className="px-10 py-6 text-slate-300 font-black text-xs">{row.date}</td>
            <td className="px-10 py-6 text-slate-500 font-mono text-xs">{row.shift}</td>
            <td className="px-10 py-6">
              <span className={`flex items-center gap-2 font-black uppercase text-[10px] tracking-widest ${
                row.type === 'Success' ? 'text-emerald-400' : row.type === 'Warning' ? 'text-orange-400' : 'text-red-400'
              }`}>
                {row.type === 'Success' ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Clock className="w-3.5 h-3.5" />}
                {row.status}
              </span>
            </td>
            <td className="px-10 py-6 text-slate-500 font-mono text-[11px] tracking-tighter">{row.logs}</td>
            <td className="px-10 py-6 text-right font-black text-white text-sm">{row.hours}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
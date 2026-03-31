'use client';

import React, { useState, useEffect } from 'react';
import { AdminReportsUI } from '../../../components/(Admin)/Report/Reports';

export interface Report {
  id: string;
  reportNumber: string;
  name: string;
  type: string;
  status: string;
  createdAt: string;
  employeeId: string;
  department: string;
  downloadUrl: string;
}

export interface AdminStats {
  totalAccounts: number;
  storageUsedGB: string;
  dataBreaches: number;
}

export interface OrgSummary {
  total: number;
  approved: number;
  pending: number;
  rejected: number;
  byType: { type: string; count: number }[];
  byDepartment: { department: string; count: number }[];
  byMonth: { month: string; count: number }[];
}

export default function AdminReportsPage() {
  const [reports, setReports] = useState<Report[]>([]);
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [summary, setSummary] = useState<OrgSummary | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [statsLoading, setStatsLoading] = useState(true);
  const [adminName, setAdminName] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    const parsed = stored ? JSON.parse(stored) : {};
    setAdminName(parsed.name ?? 'Admin');

    const headers: HeadersInit = {
      'Authorization': `Bearer ${token}`,
    };

    const fetchAll = async (silent = false) => {
      try {
        if (!silent) {
          setIsLoading(true);
          setStatsLoading(true);
        }

        const [reportsRes, statsRes, summaryRes] = await Promise.all([
          fetch('http://localhost:5076/api/Reports/admin/all-reports', { headers }),
          fetch('http://localhost:5076/api/Reports/admin/stats', { headers }),
          fetch('http://localhost:5076/api/Reports/admin/summary', { headers }),
        ]);

        if (reportsRes.ok) setReports(await reportsRes.json());
        if (statsRes.ok) setStats(await statsRes.json());
        if (summaryRes.ok) setSummary(await summaryRes.json());
      } catch (err) {
        console.error('Admin reports fetch error:', err);
      } finally {
        setIsLoading(false);
        setStatsLoading(false);
      }
    };

    fetchAll(false);
    const interval = setInterval(() => fetchAll(true), 10000);
    return () => clearInterval(interval);
  }, []);

  const handleExportCSV = () => {
    if (reports.length === 0) return;
    const csv = [
      ['ReportNumber', 'Name', 'Type', 'Status', 'EmployeeId', 'Department', 'CreatedAt'].join(','),
      ...reports.map(r => [
        r.reportNumber, `"${r.name}"`, r.type, r.status,
        r.employeeId, r.department, new Date(r.createdAt).toLocaleString(),
      ].join(','))
    ].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = `admin-full-audit-${Date.now()}.csv`; a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <AdminReportsUI 
      reports={reports}
      stats={stats}
      summary={summary}
      isLoading={isLoading}
      statsLoading={statsLoading}
      adminName={adminName}
      onExportCSV={handleExportCSV}
    />
  );
}
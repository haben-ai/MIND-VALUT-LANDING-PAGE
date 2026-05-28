"use client";

import React, { useState } from "react";
import { Download, Search, RefreshCw, LogOut } from "lucide-react";
import { Button } from "./Button";

interface Signup {
  email: string;
  firstName: string;
  position: number;
  createdAt: string;
}

interface AdminDashboardProps {
  totalSignups: number;
  signups: Signup[];
  password?: string;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  totalSignups,
  signups,
  password = "",
}) => {
  const [filterText, setFilterText] = useState("");

  // Search filter matching emails or names
  const filteredSignups = signups.filter(
    (s) =>
      s.email.toLowerCase().includes(filterText.toLowerCase()) ||
      s.firstName.toLowerCase().includes(filterText.toLowerCase())
  );

  const handleDownloadCsv = () => {
    // Generate CSV string
    const headers = ["Position", "First Name", "Email", "Signed Up At"];
    const rows = signups.map((s) => [
      s.position,
      s.firstName,
      s.email,
      new Date(s.createdAt).toLocaleString(),
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((e) => e.map((val) => `"${val}"`).join(","))].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `vora_waitlist_${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleLogout = () => {
    // Simply reload to /admin without password query parameter
    window.location.href = "/admin";
  };

  return (
    <div className="min-h-screen bg-[#0A1208] text-[#E8F0EC] p-6 md:p-12 font-sans">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#2E6B3E]/20 pb-6">
          <div>
            <div className="text-forest-accent text-xs font-bold tracking-widest uppercase mb-1.5">
              Waitlist Control Console
            </div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[#E8F0EC]">
              Vora Administrator
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="border-red-500/20 hover:border-red-500/40 text-red-400 gap-1.5"
              onClick={handleLogout}
            >
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-[#0E1A12] border border-[#2E6B3E]/30 rounded-2xl p-6 shadow-md">
            <div className="text-sm font-semibold tracking-wider text-[#7A9482] uppercase mb-2">
              Total Signups
            </div>
            <div className="text-4xl md:text-5xl font-black text-forest-accent tracking-tighter">
              {totalSignups.toLocaleString()}
            </div>
            <p className="text-xs text-[#7A9482] mt-3">
              Total users who joined waitlist across landing page channels.
            </p>
          </div>

          <div className="bg-[#0E1A12] border border-[#2E6B3E]/30 rounded-2xl p-6 shadow-md flex flex-col justify-between">
            <div>
              <div className="text-sm font-semibold tracking-wider text-[#7A9482] uppercase mb-2">
                Export Waitlist
              </div>
              <p className="text-xs text-[#7A9482]">
                Generate and download the complete list of signed up users in a spreadsheet-ready
                CSV format.
              </p>
            </div>
            <Button
              onClick={handleDownloadCsv}
              className="mt-4 bg-[#3D9970] text-white hover:bg-[#5AB88A] gap-2 h-11"
            >
              <Download className="w-4 h-4" />
              Download CSV
            </Button>
          </div>
        </div>

        {/* Table Control and Search */}
        <div className="bg-[#0E1A12] border border-[#2E6B3E]/30 rounded-2xl p-6 shadow-md flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="text-lg font-semibold text-[#E8F0EC]">Recent Registrations</h2>
            {/* Search */}
            <div className="relative max-w-xs w-full bg-forest-base border border-[#2E6B3E]/30 rounded-xl flex items-center p-1.5 px-3">
              <Search className="w-4 h-4 text-[#7A9482] mr-2 shrink-0" />
              <input
                type="text"
                placeholder="Search by name or email..."
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
                className="bg-transparent border-none text-sm text-[#E8F0EC] placeholder-[#7A9482] focus:outline-none w-full"
              />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-xl border border-[#2E6B3E]/10">
            <table className="min-w-full divide-y divide-[#2E6B3E]/20 text-left text-sm">
              <thead className="bg-[#142B1A] text-[#7A9482] uppercase text-[10px] tracking-wider font-semibold">
                <tr>
                  <th className="p-4 px-6">Pos</th>
                  <th className="p-4 px-6">First Name</th>
                  <th className="p-4 px-6">Email</th>
                  <th className="p-4 px-6">Signed Up At</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2E6B3E]/10 bg-[#0E1A12]">
                {filteredSignups.length > 0 ? (
                  filteredSignups.map((signup) => (
                    <tr key={signup.position} className="hover:bg-[#142B1A]/40 transition-colors">
                      <td className="p-4 px-6 font-bold text-forest-accent">
                        #{signup.position.toLocaleString()}
                      </td>
                      <td className="p-4 px-6 font-medium text-[#E8F0EC]">{signup.firstName}</td>
                      <td className="p-4 px-6 text-[#A8BFB0] font-mono">{signup.email}</td>
                      <td className="p-4 px-6 text-[#7A9482]">
                        {new Date(signup.createdAt).toLocaleString()}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="p-8 text-center text-[#7A9482]">
                      No matching records found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

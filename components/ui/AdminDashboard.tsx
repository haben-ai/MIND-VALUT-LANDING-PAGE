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
  isMock?: boolean;
  errorMsg?: string | null;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  totalSignups,
  signups,
  password = "",
  isMock = false,
  errorMsg = null,
}) => {
  const [filterText, setFilterText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Search filter matching emails or names
  const filteredSignups = signups.filter(
    (s) =>
      s.email.toLowerCase().includes(filterText.toLowerCase()) ||
      s.firstName.toLowerCase().includes(filterText.toLowerCase())
  );

  const pageSize = 10;
  const totalPages = Math.max(1, Math.ceil(filteredSignups.length / pageSize));
  const activePage = Math.min(currentPage, totalPages);

  const startIndex = (activePage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, filteredSignups.length);
  const paginatedSignups = filteredSignups.slice(startIndex, endIndex);

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
    link.setAttribute("download", `index_waitlist_${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleLogout = () => {
    // Simply reload to /admin without password query parameter
    window.location.href = "/admin";
  };

  return (
    <div className="min-h-screen bg-[#060C02] text-[#EDF7E3] p-6 md:p-12 font-sans">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#294B0F]/20 pb-6">
          <div>
            <div className="text-forest-accent text-xs font-bold tracking-widest uppercase mb-1.5">
              Waitlist Control Console
            </div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[#E8F0EC]">
              Index Administrator
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

        {/* Warning Banner for Demo/Mock Mode */}
        {isMock && (
          <div className="bg-amber-950/20 border-2 border-amber-500/30 rounded-2xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-md">
            <div className="flex flex-col gap-1">
              <div className="text-amber-400 font-bold text-sm tracking-wide uppercase flex items-center gap-1.5">
                <span>⚠️ Demo Mode / Fallback Active</span>
              </div>
              <p className="text-xs text-amber-200/80 leading-relaxed max-w-2xl">
                {errorMsg || "The admin panel is currently running on mock demo data because it could not connect to your live database."}
              </p>
            </div>
            <div className="text-[10px] text-amber-400/70 font-semibold border border-amber-500/20 rounded px-2.5 py-1 bg-amber-500/5 select-none shrink-0 self-start md:self-center">
              LOCAL DEMO MODE
            </div>
          </div>
        )}

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-[#0E1A06] border border-[#294B0F]/30 rounded-2xl p-6 shadow-md">
            <div className="text-sm font-semibold tracking-wider text-[#708A58] uppercase mb-2">
              Total Signups
            </div>
            <div className="text-4xl md:text-5xl font-black text-forest-accent tracking-tighter">
              {totalSignups.toLocaleString()}
            </div>
            <p className="text-xs text-[#708A58] mt-3">
              Total users who joined waitlist across landing page channels.
            </p>
          </div>

          <div className="bg-[#0E1A06] border border-[#294B0F]/30 rounded-2xl p-6 shadow-md flex flex-col justify-between">
            <div>
              <div className="text-sm font-semibold tracking-wider text-[#708A58] uppercase mb-2">
                Export Waitlist
              </div>
              <p className="text-xs text-[#708A58]">
                Generate and download the complete list of signed up users in a spreadsheet-ready
                CSV format.
              </p>
            </div>
            <Button
              onClick={handleDownloadCsv}
              className="mt-4 bg-[#A3FF00] text-[#060C02] hover:bg-[#CCFF00] gap-2 h-11"
            >
              <Download className="w-4 h-4" />
              Download CSV
            </Button>
          </div>
        </div>

        {/* Table Control and Search */}
        <div className="bg-[#0E1A06] border border-[#294B0F]/30 rounded-2xl p-6 shadow-md flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="text-lg font-semibold text-[#EDF7E3]">Recent Registrations</h2>
            {/* Search */}
            <div className="relative max-w-xs w-full bg-forest-base border border-[#294B0F]/30 rounded-xl flex items-center p-1.5 px-3">
              <Search className="w-4 h-4 text-[#708A58] mr-2 shrink-0" />
              <input
                type="text"
                placeholder="Search by name or email..."
                value={filterText}
                onChange={(e) => {
                  setFilterText(e.target.value);
                  setCurrentPage(1);
                }}
                className="bg-transparent border-none text-sm text-[#EDF7E3] placeholder-[#708A58] focus:outline-none w-full"
              />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-xl border border-[#294B0F]/10">
            <table className="min-w-full divide-y divide-[#294B0F]/20 text-left text-sm">
              <thead className="bg-[#142B09] text-[#708A58] uppercase text-[10px] tracking-wider font-semibold">
                <tr>
                  <th className="p-4 px-6">Pos</th>
                  <th className="p-4 px-6">First Name</th>
                  <th className="p-4 px-6">Email</th>
                  <th className="p-4 px-6">Signed Up At</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#294B0F]/10 bg-[#0E1A06]">
                {paginatedSignups.length > 0 ? (
                  paginatedSignups.map((signup) => (
                    <tr key={signup.position} className="hover:bg-[#142B09]/40 transition-colors">
                      <td className="p-4 px-6 font-bold text-forest-accent">
                        #{signup.position.toLocaleString()}
                      </td>
                      <td className="p-4 px-6 font-medium text-[#EDF7E3]">{signup.firstName}</td>
                      <td className="p-4 px-6 text-[#A5C28C] font-mono">{signup.email}</td>
                      <td className="p-4 px-6 text-[#708A58]">
                        {new Date(signup.createdAt).toLocaleString()}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="p-8 text-center text-[#708A58]">
                      No matching records found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          {filteredSignups.length > 0 && (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#294B0F]/10 pt-6 mt-2">
              <div className="text-xs text-[#708A58]">
                Showing <span className="font-semibold text-[#EDF7E3]">{startIndex + 1}</span> to{" "}
                <span className="font-semibold text-[#EDF7E3]">{endIndex}</span> of{" "}
                <span className="font-semibold text-[#EDF7E3]">{filteredSignups.length}</span>{" "}
                registrations
                {filteredSignups.length < signups.length && (
                  <span className="text-[#A3FF00]"> (filtered from {signups.length} total)</span>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                  disabled={activePage === 1}
                  className="h-9 px-3.5 rounded-xl border border-[#294B0F]/30 bg-transparent text-xs font-semibold text-[#EDF7E3] transition-all hover:bg-[#142B09]/40 disabled:opacity-40 disabled:hover:bg-transparent disabled:cursor-not-allowed select-none active:scale-[0.98]"
                >
                  Previous
                </button>

                <div className="flex items-center gap-1.5">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`h-9 w-9 rounded-xl text-xs font-semibold transition-all select-none active:scale-[0.95] ${
                        activePage === pageNum
                          ? "bg-[#A3FF00] text-[#060C02] shadow-md shadow-[#A3FF00]/10"
                          : "bg-transparent border border-[#294B0F]/20 text-[#A5C28C] hover:border-[#A3FF00] hover:text-[#EDF7E3]"
                      }`}
                    >
                      {pageNum}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                  disabled={activePage === totalPages}
                  className="h-9 px-3.5 rounded-xl border border-[#294B0F]/30 bg-transparent text-xs font-semibold text-[#EDF7E3] transition-all hover:bg-[#142B09]/40 disabled:opacity-40 disabled:hover:bg-transparent disabled:cursor-not-allowed select-none active:scale-[0.98]"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

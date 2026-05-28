import React from "react";
import { supabaseAdmin, isSupabaseConfigured } from "@/lib/supabase";
import { AdminDashboard } from "@/components/ui/AdminDashboard";

interface AdminPageProps {
  searchParams: {
    password?: string;
  };
}

export default async function AdminPage({ searchParams }: AdminPageProps) {
  const adminPassword = process.env.ADMIN_PASSWORD || "vora_secret_admin_2026";
  const passwordQuery = searchParams.password || "";

  // 1. Password Verification (Securely on the server side)
  const isAuthenticated = passwordQuery === adminPassword;

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0A1208] text-[#E8F0EC] flex flex-col items-center justify-center p-6 font-sans">
        <div className="max-w-md w-full bg-[#0E1A12] border border-[#2E6B3E]/30 rounded-2xl p-8 shadow-xl text-center">
          <div className="text-forest-accent text-xl font-bold tracking-widest mb-6">VORA ADMIN</div>
          <h2 className="text-xl font-semibold mb-4 text-[#E8F0EC]">Enter Admin Password</h2>
          
          <form method="GET" action="/admin" className="flex flex-col gap-4">
            <input
              type="password"
              name="password"
              placeholder="Admin password"
              required
              className="h-12 bg-[#142B1A] border border-[#2E6B3E]/40 rounded-xl px-4 text-[#E8F0EC] placeholder-[#7A9482] focus:outline-none focus:border-[#3D9970]"
            />
            <button
              type="submit"
              className="h-12 bg-[#3D9970] text-white font-semibold rounded-xl hover:bg-[#5AB88A] transition-colors"
            >
              Authenticate
            </button>
          </form>
          
          <p className="text-xs text-[#7A9482] mt-6">
            Authentication is verified securely on the server-side.
          </p>
        </div>
      </div>
    );
  }

  // 2. Fetch data (Supabase or Mock fallback)
  let totalSignups = 2847;
  let signups: Array<{ email: string; firstName: string; position: number; createdAt: string }> = [];

  if (isSupabaseConfigured && supabaseAdmin) {
    try {
      // Get count
      const { count, error: countError } = await supabaseAdmin
        .from("waitlist")
        .select("*", { count: "exact", head: true });

      if (!countError && count !== null) {
        totalSignups = count;
      }

      // Get recent entries
      const { data, error: listError } = await supabaseAdmin
        .from("waitlist")
        .select("email, first_name, position, created_at")
        .order("created_at", { ascending: false })
        .limit(100);

      if (!listError && data) {
        signups = data.map((item) => ({
          email: item.email,
          firstName: item.first_name || "",
          position: item.position || 0,
          createdAt: item.created_at,
        }));
      }
    } catch (err) {
      console.error("Failed to query Supabase admin waitlist data", err);
    }
  } else {
    // Generate realistic looking mock database data if Supabase keys aren't set
    signups = [
      { email: "john.doe@gmail.com", firstName: "John", position: 2847, createdAt: new Date(Date.now() - 1000 * 60 * 10).toISOString() },
      { email: "alex.seo@vercel.com", firstName: "Alex", position: 2846, createdAt: new Date(Date.now() - 1000 * 60 * 45).toISOString() },
      { email: "sarah.inspo@creator.co", firstName: "Sarah", position: 2845, createdAt: new Date(Date.now() - 1000 * 60 * 120).toISOString() },
      { email: "marcus.dev@startup.io", firstName: "Marcus", position: 2844, createdAt: new Date(Date.now() - 1000 * 60 * 300).toISOString() },
      { email: "priya.nair@product.org", firstName: "Priya", position: 2843, createdAt: new Date(Date.now() - 1000 * 60 * 600).toISOString() },
    ];
    totalSignups = 2847;
  }

  // 3. Render Admin Panel Client Component
  return (
    <AdminDashboard
      totalSignups={totalSignups}
      signups={signups}
      password={passwordQuery}
    />
  );
}

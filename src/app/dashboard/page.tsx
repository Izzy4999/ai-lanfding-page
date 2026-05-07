"use client";

import { useState } from "react";

const applications = [
  { company: "Stripe", role: "Senior Frontend Engineer", status: "Interview", date: "May 6", match: 96, color: "#6366f1", init: "S" },
  { company: "Figma", role: "Product Designer", status: "Applied", date: "May 5", match: 92, color: "#0891b2", init: "F" },
  { company: "Vercel", role: "Developer Advocate", status: "Reviewing", date: "May 4", match: 88, color: "#111827", init: "V" },
  { company: "Linear", role: "Full Stack Engineer", status: "Applied", date: "May 3", match: 85, color: "#5b21b6", init: "L" },
  { company: "Notion", role: "Growth Engineer", status: "Rejected", date: "May 2", match: 79, color: "#ea580c", init: "N" },
  { company: "Loom", role: "Backend Engineer", status: "Applied", date: "May 1", match: 82, color: "#0f766e", init: "L" },
];

const todayMatches = [
  { company: "Anthropic", role: "Software Engineer, Tooling", match: 98, salary: "$180–240k", remote: true, init: "A", color: "#d97706" },
  { company: "OpenAI", role: "Full Stack Engineer", match: 94, salary: "$160–220k", remote: true, init: "O", color: "#059669" },
  { company: "Cursor", role: "Product Engineer", match: 91, salary: "$140–180k", remote: false, init: "C", color: "#7c3aed" },
  { company: "Replit", role: "Frontend Engineer", match: 87, salary: "$130–170k", remote: true, init: "R", color: "#2563eb" },
];

const statusColors: Record<string, { bg: string; text: string }> = {
  Interview: { bg: "#f0fdf4", text: "#16a34a" },
  Applied: { bg: "#eff6ff", text: "#2563eb" },
  Reviewing: { bg: "#fffbeb", text: "#d97706" },
  Rejected: { bg: "#fef2f2", text: "#dc2626" },
  Offer: { bg: "#f0fdf4", text: "#16a34a" },
};

function StatCard({ label, value, sub, icon, color }: { label: string; value: string; sub: string; icon: React.ReactNode; color: string }) {
  return (
    <div className="rounded-2xl p-6" style={{ background: "#fff", border: "1px solid #E5E7EB" }}>
      <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
        style={{ background: color + "18", color }}>{icon}</div>
      <div className="text-[28px] font-black mb-0.5" style={{ color: "#0D0D14", letterSpacing: "-0.04em" }}>{value}</div>
      <div className="text-sm font-semibold mb-1" style={{ color: "#374151" }}>{label}</div>
      <div className="text-xs" style={{ color: "#9CA3AF" }}>{sub}</div>
    </div>
  );
}

export default function DashboardOverview() {
  const [autoApply, setAutoApply] = useState(true);

  return (
    <>
      {/* Top bar */}
      <header className="h-16 flex items-center justify-between px-8 sticky top-0 z-30"
        style={{ background: "rgba(248,247,244,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid #E5E7EB" }}>
        <div>
          <h1 className="font-bold text-lg" style={{ color: "#0D0D14", letterSpacing: "-0.02em" }}>Good morning, Alex 👋</h1>
          <p className="text-xs" style={{ color: "#9CA3AF" }}>Wednesday, May 7 · 12 new matches today</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl" style={{ background: "#fff", border: "1px solid #E5E7EB" }}>
            <div className="w-2 h-2 rounded-full" style={{ background: autoApply ? "#16a34a" : "#9CA3AF", animation: autoApply ? "pulse-dot 2s infinite" : "none" }} />
            <span className="text-sm font-medium" style={{ color: "#374151" }}>Auto-Apply</span>
            <button onClick={() => setAutoApply(!autoApply)}
              className="relative w-9 h-5 rounded-full cursor-pointer transition-all"
              style={{ background: autoApply ? "#0D0D14" : "#D1D5DB" }}>
              <div className="absolute w-3.5 h-3.5 rounded-full top-0.5 transition-all"
                style={{ background: "#fff", left: autoApply ? "calc(100% - 18px)" : 3 }} />
            </button>
          </div>
          <button className="relative w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer"
            style={{ background: "#fff", border: "1px solid #E5E7EB", color: "#6B7280" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full" style={{ background: "#ef4444" }} />
          </button>
          <div className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm text-white" style={{ background: "#2563eb" }}>A</div>
        </div>
      </header>

      <main className="p-8">
        {/* Stats */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
          <StatCard label="Applications Sent" value="47" sub="+12 this week" color="#2563eb"
            icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 2L11 13"/><path d="M22 2L15 22 11 13 2 9l20-7z"/></svg>} />
          <StatCard label="Interviews Landed" value="6" sub="3× better than avg" color="#059669"
            icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/></svg>} />
          <StatCard label="Response Rate" value="28%" sub="Industry avg: 8%" color="#d97706"
            icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>} />
          <StatCard label="Avg. Match Score" value="91%" sub="Top 5% of users" color="#7c3aed"
            icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>} />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Applications */}
          <div className="xl:col-span-2 rounded-2xl overflow-hidden" style={{ background: "#fff", border: "1px solid #E5E7EB" }}>
            <div className="flex items-center justify-between px-6 py-5" style={{ borderBottom: "1px solid #F3F4F6" }}>
              <div>
                <h2 className="font-bold text-base" style={{ color: "#0D0D14", letterSpacing: "-0.02em" }}>Active Applications</h2>
                <p className="text-xs mt-0.5" style={{ color: "#9CA3AF" }}>47 total · 6 in progress</p>
              </div>
              <a href="/dashboard/applications" className="text-sm font-semibold px-4 py-2 rounded-xl no-underline"
                style={{ background: "#0D0D14", color: "#fff" }}>View All</a>
            </div>
            {applications.map((app, i) => (
              <div key={i} className="flex items-center gap-4 px-6 py-4 cursor-pointer transition-colors"
                style={{ borderBottom: i < applications.length - 1 ? "1px solid #F9FAFB" : undefined }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#FAFAFA")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs text-white flex-shrink-0"
                  style={{ background: app.color }}>{app.init}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm" style={{ color: "#0D0D14" }}>{app.company}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full font-semibold"
                      style={{ background: statusColors[app.status]?.bg, color: statusColors[app.status]?.text }}>{app.status}</span>
                  </div>
                  <div className="text-xs mt-0.5 truncate" style={{ color: "#9CA3AF" }}>{app.role}</div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-sm font-bold" style={{ color: app.match >= 90 ? "#059669" : "#d97706" }}>{app.match}%</div>
                  <div className="text-xs" style={{ color: "#9CA3AF" }}>{app.date}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-4">
            {/* Resume score */}
            <div className="rounded-2xl p-6" style={{ background: "#0D0D14" }}>
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm font-bold text-white">Resume Score</div>
                <span className="text-xs px-2 py-0.5 rounded-full font-medium"
                  style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.6)" }}>ATS Ready</span>
              </div>
              <div className="flex items-center gap-5">
                <div className="relative w-20 h-20 flex-shrink-0">
                  <svg viewBox="0 0 36 36" className="w-20 h-20 -rotate-90">
                    <circle cx="18" cy="18" r="15.5" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
                    <circle cx="18" cy="18" r="15.5" fill="none" stroke="#4ade80" strokeWidth="3"
                      strokeDasharray={`${89 * 0.975} ${100 * 0.975}`} strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-black text-white">89</span>
                  </div>
                </div>
                <div>
                  <div className="text-xs mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>Areas to improve</div>
                  {["Add more metrics", "Add certifications"].map((t) => (
                    <div key={t} className="flex items-center gap-1.5 mb-1">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#fbbf24" }} />
                      <span className="text-xs" style={{ color: "rgba(255,255,255,0.65)" }}>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
              <a href="/dashboard/profile" className="mt-4 block text-center py-2.5 rounded-xl text-sm font-bold no-underline"
                style={{ background: "rgba(255,255,255,0.1)", color: "#fff", border: "1px solid rgba(255,255,255,0.1)" }}>
                Optimize Resume
              </a>
            </div>

            {/* Today's matches */}
            <div className="rounded-2xl overflow-hidden flex-1" style={{ background: "#fff", border: "1px solid #E5E7EB" }}>
              <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: "1px solid #F3F4F6" }}>
                <h2 className="font-bold text-sm" style={{ color: "#0D0D14" }}>Today&apos;s Top Matches</h2>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: "#fef9c3", color: "#a16207" }}>12 new</span>
              </div>
              {todayMatches.map((m, i) => (
                <div key={i} className="flex items-center gap-3 px-5 py-3.5 cursor-pointer transition-colors"
                  style={{ borderBottom: i < todayMatches.length - 1 ? "1px solid #F9FAFB" : undefined }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#FAFAFA")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs text-white flex-shrink-0"
                    style={{ background: m.color }}>{m.init}</div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-xs" style={{ color: "#0D0D14" }}>{m.company}</div>
                    <div className="text-xs truncate" style={{ color: "#9CA3AF" }}>{m.role}</div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-[11px]" style={{ color: "#6B7280" }}>{m.salary}</span>
                      {m.remote && <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full" style={{ background: "#f0fdf4", color: "#16a34a" }}>Remote</span>}
                    </div>
                  </div>
                  <div className="text-sm font-bold flex-shrink-0" style={{ color: "#059669" }}>{m.match}%</div>
                </div>
              ))}
              <div className="px-5 py-3" style={{ borderTop: "1px solid #F3F4F6" }}>
                <a href="/dashboard/matches" className="block text-center text-sm font-semibold py-2 rounded-xl no-underline"
                  style={{ background: "#F3F4F6", color: "#374151" }}>View All Matches</a>
              </div>
            </div>
          </div>
        </div>

        {/* Activity */}
        <div className="mt-6 rounded-2xl p-6" style={{ background: "#fff", border: "1px solid #E5E7EB" }}>
          <h2 className="font-bold text-base mb-5" style={{ color: "#0D0D14", letterSpacing: "-0.02em" }}>Recent Activity</h2>
          <div className="flex flex-col gap-3">
            {[
              { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M22 2L11 13"/><path d="M22 2L15 22 11 13 2 9l20-7z"/></svg>, color: "#2563eb", bg: "#eff6ff", text: "Auto-applied to Senior Frontend Engineer at Stripe", time: "2 hours ago" },
              { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>, color: "#059669", bg: "#f0fdf4", text: "Resume score improved from 71% to 89% after AI optimization", time: "5 hours ago" },
              { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>, color: "#7c3aed", bg: "#f5f3ff", text: "Interview scheduled with Figma — AI prep guide ready", time: "Yesterday" },
              { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>, color: "#d97706", bg: "#fffbeb", text: "12 new job matches found based on your updated preferences", time: "Yesterday" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: item.bg, color: item.color }}>{item.icon}</div>
                <span className="flex-1 text-sm" style={{ color: "#374151" }}>{item.text}</span>
                <span className="text-xs flex-shrink-0" style={{ color: "#9CA3AF" }}>{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

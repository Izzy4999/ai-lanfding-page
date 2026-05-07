"use client";

import { useState } from "react";

const weeklyData = [
  { week: "Apr 7", apps: 4, responses: 1 },
  { week: "Apr 14", apps: 7, responses: 2 },
  { week: "Apr 21", apps: 11, responses: 2 },
  { week: "Apr 28", apps: 9, responses: 3 },
  { week: "May 5", apps: 16, responses: 5 },
];

const topCompanies = [
  { company: "Stripe", init: "S", color: "#6366f1", apps: 2, status: "Interview" },
  { company: "Figma", init: "F", color: "#0891b2", apps: 1, status: "Interview" },
  { company: "Anthropic", init: "A", color: "#d97706", apps: 1, status: "Applied" },
  { company: "OpenAI", init: "O", color: "#059669", apps: 1, status: "Applied" },
  { company: "Linear", init: "L", color: "#5b21b6", apps: 1, status: "Reviewing" },
];

const funnelSteps = [
  { label: "Applications Sent", value: 47, pct: 100, color: "#2563eb" },
  { label: "Viewed by Recruiter", value: 38, pct: 81, color: "#7c3aed" },
  { label: "Responses Received", value: 13, pct: 28, color: "#d97706" },
  { label: "Interviews", value: 6, pct: 13, color: "#059669" },
  { label: "Offers", value: 1, pct: 2, color: "#16a34a" },
];

const maxApps = Math.max(...weeklyData.map((d) => d.apps));

export default function Analytics() {
  const [range, setRange] = useState("30d");

  return (
    <>
      <header className="px-8 py-6" style={{ borderBottom: "1px solid #E5E7EB", background: "rgba(248,247,244,0.92)", backdropFilter: "blur(12px)" }}>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-bold text-xl" style={{ color: "#0D0D14", letterSpacing: "-0.02em" }}>Analytics</h1>
            <p className="text-xs mt-0.5" style={{ color: "#9CA3AF" }}>Your job search performance at a glance</p>
          </div>
          <div className="flex items-center gap-1 p-1 rounded-xl" style={{ background: "#fff", border: "1px solid #E5E7EB" }}>
            {["7d", "30d", "90d", "All"].map((r) => (
              <button key={r} onClick={() => setRange(r)}
                className="px-3.5 py-1.5 rounded-lg text-xs font-semibold cursor-pointer"
                style={{ background: range === r ? "#0D0D14" : "transparent", color: range === r ? "#fff" : "#6B7280" }}>
                {r}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="p-8">
        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Applied", value: "47", delta: "+16 this week", color: "#2563eb", up: true },
            { label: "Response Rate", value: "28%", delta: "Industry avg 8%", color: "#059669", up: true },
            { label: "Interview Rate", value: "13%", delta: "Top 10% of users", color: "#7c3aed", up: true },
            { label: "Avg. Time to Response", value: "4.2 days", delta: "−1.3 days vs last mo.", color: "#d97706", up: true },
          ].map((stat, i) => (
            <div key={i} className="rounded-2xl p-5" style={{ background: "#fff", border: "1px solid #E5E7EB" }}>
              <div className="text-xs font-semibold mb-2" style={{ color: "#9CA3AF" }}>{stat.label}</div>
              <div className="text-2xl font-black mb-1" style={{ color: "#0D0D14", letterSpacing: "-0.04em" }}>{stat.value}</div>
              <div className="flex items-center gap-1">
                <span className="text-xs font-medium" style={{ color: stat.color }}>↑ {stat.delta}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Bar chart */}
          <div className="xl:col-span-2 rounded-2xl p-6" style={{ background: "#fff", border: "1px solid #E5E7EB" }}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-bold text-base" style={{ color: "#0D0D14", letterSpacing: "-0.02em" }}>Applications Per Week</h2>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-sm" style={{ background: "#2563eb" }} />
                  <span className="text-xs" style={{ color: "#6B7280" }}>Applied</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-sm" style={{ background: "#bbf7d0" }} />
                  <span className="text-xs" style={{ color: "#6B7280" }}>Responses</span>
                </div>
              </div>
            </div>
            <div className="flex items-end justify-between gap-3" style={{ height: 180 }}>
              {weeklyData.map((d, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full flex flex-col gap-1 items-center justify-end" style={{ height: 150 }}>
                    {/* Applied bar */}
                    <div className="w-full rounded-lg transition-all"
                      style={{ height: `${(d.apps / maxApps) * 130}px`, background: "#2563eb", minHeight: 4 }} />
                    {/* Response bar */}
                    <div className="w-full rounded-lg"
                      style={{ height: `${(d.responses / maxApps) * 130}px`, background: "#bbf7d0", minHeight: 2 }} />
                  </div>
                  <div className="text-[11px]" style={{ color: "#9CA3AF" }}>{d.week}</div>
                  <div className="text-xs font-bold" style={{ color: "#0D0D14" }}>{d.apps}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Funnel */}
          <div className="rounded-2xl p-6" style={{ background: "#fff", border: "1px solid #E5E7EB" }}>
            <h2 className="font-bold text-base mb-5" style={{ color: "#0D0D14", letterSpacing: "-0.02em" }}>Application Funnel</h2>
            <div className="flex flex-col gap-3">
              {funnelSteps.map((step, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-medium" style={{ color: "#374151" }}>{step.label}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold" style={{ color: "#0D0D14" }}>{step.value}</span>
                      <span className="text-xs" style={{ color: "#9CA3AF" }}>{step.pct}%</span>
                    </div>
                  </div>
                  <div className="h-1.5 rounded-full" style={{ background: "#F3F4F6" }}>
                    <div className="h-full rounded-full" style={{ width: `${step.pct}%`, background: step.color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top companies */}
        <div className="mt-6 rounded-2xl overflow-hidden" style={{ background: "#fff", border: "1px solid #E5E7EB" }}>
          <div className="px-6 py-5" style={{ borderBottom: "1px solid #F3F4F6" }}>
            <h2 className="font-bold text-base" style={{ color: "#0D0D14", letterSpacing: "-0.02em" }}>Top Companies Applied To</h2>
          </div>
          <div>
            {topCompanies.map((c, i) => (
              <div key={i} className="flex items-center gap-4 px-6 py-4"
                style={{ borderBottom: i < topCompanies.length - 1 ? "1px solid #F9FAFB" : undefined }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs text-white"
                  style={{ background: c.color }}>{c.init}</div>
                <div className="flex-1">
                  <div className="font-semibold text-sm" style={{ color: "#0D0D14" }}>{c.company}</div>
                </div>
                <div className="text-xs" style={{ color: "#9CA3AF" }}>{c.apps} application{c.apps > 1 ? "s" : ""}</div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{
                    background: c.status === "Interview" ? "#f0fdf4" : c.status === "Reviewing" ? "#fffbeb" : "#eff6ff",
                    color: c.status === "Interview" ? "#16a34a" : c.status === "Reviewing" ? "#d97706" : "#2563eb",
                  }}>{c.status}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

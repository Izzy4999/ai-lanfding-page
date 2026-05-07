"use client";

import { useState } from "react";

const jobs = [
  { company: "Anthropic", init: "A", color: "#d97706", role: "Software Engineer, Tooling", salary: "$180–240k", location: "San Francisco / Remote", match: 98, remote: true, tags: ["TypeScript", "Python", "LLMs"], desc: "Build developer tools and internal infrastructure for one of the world's leading AI safety companies." },
  { company: "OpenAI", init: "O", color: "#059669", role: "Full Stack Engineer", salary: "$160–220k", location: "San Francisco", match: 94, remote: true, tags: ["React", "Node.js", "PostgreSQL"], desc: "Join the team building the web interfaces and APIs that power ChatGPT and the OpenAI platform." },
  { company: "Cursor", init: "C", color: "#7c3aed", role: "Product Engineer", salary: "$140–180k", location: "San Francisco", match: 91, remote: false, tags: ["TypeScript", "Electron", "VS Code"], desc: "Shape the future of AI-assisted coding in a product used by hundreds of thousands of developers." },
  { company: "Replit", init: "R", color: "#2563eb", role: "Frontend Engineer", salary: "$130–170k", location: "Remote", match: 87, remote: true, tags: ["React", "WebAssembly", "TypeScript"], desc: "Make collaborative coding more accessible for millions of users around the world." },
  { company: "Linear", init: "L", color: "#5b21b6", role: "Full Stack Engineer", salary: "$150–190k", location: "Remote", match: 85, remote: true, tags: ["React", "GraphQL", "Rust"], desc: "Work on a beloved product used by engineering teams at the world's best startups." },
  { company: "Vercel", init: "V", color: "#111827", role: "Developer Experience Engineer", salary: "$140–175k", location: "Remote", match: 83, remote: true, tags: ["Next.js", "Edge", "TypeScript"], desc: "Improve the experience for millions of developers building on the Vercel platform every day." },
  { company: "Figma", init: "F", color: "#0891b2", role: "Software Engineer, Editor", salary: "$160–200k", location: "San Francisco / Remote", match: 80, remote: true, tags: ["C++", "WebGL", "TypeScript"], desc: "Work on the rendering engine behind one of the world's most beloved design tools." },
  { company: "Stripe", init: "S", color: "#6366f1", role: "Infrastructure Engineer", salary: "$170–230k", location: "Remote", match: 78, remote: true, tags: ["Go", "Kubernetes", "PostgreSQL"], desc: "Build the systems that process billions of dollars in payments with five-nines reliability." },
];

const filters = ["All", "Remote", "$100k+", "Engineering", "Product", "Design"];

export default function Matches() {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");
  const [applied, setApplied] = useState<Set<number>>(new Set());

  const filtered = jobs.filter(j => {
    if (search && !j.role.toLowerCase().includes(search.toLowerCase()) && !j.company.toLowerCase().includes(search.toLowerCase())) return false;
    if (active === "Remote" && !j.remote) return false;
    return true;
  });

  return (
    <>
      {/* Header */}
      <header className="px-8 py-6 sticky top-0 z-30"
        style={{ background: "rgba(248,247,244,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid #E5E7EB" }}>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="font-bold text-xl" style={{ color: "#0D0D14", letterSpacing: "-0.02em" }}>Job Matches</h1>
            <p className="text-xs mt-0.5" style={{ color: "#9CA3AF" }}>AI-curated for your skills and goals · 12 new today</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold cursor-pointer"
            style={{ background: "#0D0D14", color: "#fff" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            Auto-Apply All
          </button>
        </div>
        {/* Search + filters */}
        <div className="flex items-center gap-3">
          <div className="relative flex-1 max-w-sm">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search roles or companies…"
              className="w-full pl-9 pr-4 py-2.5 rounded-xl text-sm outline-none"
              style={{ background: "#fff", border: "1.5px solid #E5E7EB", color: "#0D0D14" }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "#0D0D14")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "#E5E7EB")} />
          </div>
          <div className="flex items-center gap-2">
            {filters.map((f) => (
              <button key={f} onClick={() => setActive(f)}
                className="px-3.5 py-2 rounded-xl text-sm font-medium cursor-pointer transition-all"
                style={{ background: active === f ? "#0D0D14" : "#fff", color: active === f ? "#fff" : "#6B7280", border: `1px solid ${active === f ? "#0D0D14" : "#E5E7EB"}` }}>
                {f}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {filtered.map((job, i) => (
            <div key={i} className="rounded-2xl p-6 cursor-pointer transition-all"
              style={{ background: "#fff", border: "1px solid #E5E7EB" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#D1D5DB"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#E5E7EB"; e.currentTarget.style.boxShadow = "none"; }}>
              {/* Top row */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center font-bold text-sm text-white flex-shrink-0"
                    style={{ background: job.color }}>{job.init}</div>
                  <div>
                    <div className="font-bold text-sm" style={{ color: "#0D0D14" }}>{job.company}</div>
                    <div className="text-xs" style={{ color: "#9CA3AF" }}>{job.location}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {job.remote && (
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ background: "#f0fdf4", color: "#16a34a" }}>Remote</span>
                  )}
                  <span className="text-sm font-bold" style={{ color: job.match >= 90 ? "#059669" : job.match >= 80 ? "#d97706" : "#6B7280" }}>
                    {job.match}% match
                  </span>
                </div>
              </div>
              {/* Role */}
              <h3 className="font-bold text-base mb-1" style={{ color: "#0D0D14", letterSpacing: "-0.02em" }}>{job.role}</h3>
              <div className="text-sm font-semibold mb-3" style={{ color: "#374151" }}>{job.salary}</div>
              <p className="text-sm mb-4 leading-relaxed" style={{ color: "#6B7280", lineHeight: 1.6 }}>{job.desc}</p>
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {job.tags.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full font-medium"
                    style={{ background: "#F3F4F6", color: "#374151" }}>{t}</span>
                ))}
              </div>
              {/* Actions */}
              <div className="flex gap-2">
                <button
                  onClick={() => setApplied(prev => { const s = new Set(prev); s.has(i) ? s.delete(i) : s.add(i); return s; })}
                  className="flex-1 py-2.5 rounded-xl text-sm font-bold cursor-pointer transition-all"
                  style={{
                    background: applied.has(i) ? "#f0fdf4" : "#0D0D14",
                    color: applied.has(i) ? "#16a34a" : "#fff",
                  }}>
                  {applied.has(i) ? "✓ Applied" : "Apply Now"}
                </button>
                <button className="w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer"
                  style={{ background: "#F3F4F6", color: "#6B7280" }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

"use client";

import { useState } from "react";

const skills = ["TypeScript", "React", "Next.js", "Node.js", "GraphQL", "PostgreSQL", "Tailwind CSS", "Git", "REST APIs", "Python"];
const experience = [
  { title: "Senior Frontend Engineer", company: "TechCorp", period: "2022 – Present", desc: "Led redesign of core checkout flow, reducing drop-off by 34%. Managed a team of 3 engineers.", color: "#2563eb", init: "T" },
  { title: "Frontend Developer", company: "StartupXYZ", period: "2020 – 2022", desc: "Built real-time dashboard features serving 10k+ daily users. Migrated legacy codebase to React.", color: "#059669", init: "S" },
  { title: "Junior Developer", company: "Agency Co.", period: "2018 – 2020", desc: "Developed 20+ client websites. Introduced component library that cut delivery time by 40%.", color: "#7c3aed", init: "A" },
];

export default function Profile() {
  const [activeSkills, setActiveSkills] = useState<Set<string>>(new Set(skills));
  const [editingBio, setEditingBio] = useState(false);
  const [bio, setBio] = useState("Senior Frontend Engineer with 6+ years building fast, accessible web applications. Passionate about great DX and pixel-perfect UIs. Looking for my next challenge at a high-growth startup or tech company.");

  return (
    <>
      <header className="px-8 py-6" style={{ borderBottom: "1px solid #E5E7EB", background: "rgba(248,247,244,0.92)", backdropFilter: "blur(12px)" }}>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-bold text-xl" style={{ color: "#0D0D14", letterSpacing: "-0.02em" }}>Profile</h1>
            <p className="text-xs mt-0.5" style={{ color: "#9CA3AF" }}>Your career profile · Last updated May 5</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold cursor-pointer"
            style={{ background: "#0D0D14", color: "#fff" }}>
            Save Changes
          </button>
        </div>
      </header>

      <main className="p-8 max-w-4xl">
        {/* Identity */}
        <div className="rounded-2xl p-7 mb-5" style={{ background: "#fff", border: "1px solid #E5E7EB" }}>
          <div className="flex items-center gap-5 mb-6">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center font-black text-3xl text-white flex-shrink-0"
              style={{ background: "#2563eb" }}>A</div>
            <div className="flex-1">
              <div className="font-bold text-xl mb-0.5" style={{ color: "#0D0D14", letterSpacing: "-0.03em" }}>Alex Johnson</div>
              <div className="text-sm mb-3" style={{ color: "#6B7280" }}>Senior Frontend Engineer · San Francisco, CA</div>
              <div className="flex gap-2">
                <span className="text-xs font-medium px-2.5 py-1 rounded-full" style={{ background: "#f0fdf4", color: "#16a34a" }}>Open to work</span>
                <span className="text-xs font-medium px-2.5 py-1 rounded-full" style={{ background: "#eff6ff", color: "#2563eb" }}>Free Plan</span>
              </div>
            </div>
            <button className="px-4 py-2 rounded-xl text-sm font-semibold cursor-pointer"
              style={{ background: "#F3F4F6", color: "#374151" }}>Change Photo</button>
          </div>

          {/* Bio */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-semibold" style={{ color: "#374151" }}>Bio</label>
              <button onClick={() => setEditingBio(!editingBio)} className="text-xs font-medium cursor-pointer"
                style={{ color: "#2563eb" }}>{editingBio ? "Done" : "Edit"}</button>
            </div>
            {editingBio
              ? <textarea value={bio} onChange={(e) => setBio(e.target.value)} rows={3}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                  style={{ border: "1.5px solid #0D0D14", background: "#FAFAFA", color: "#374151", lineHeight: 1.7 }} />
              : <p className="text-sm" style={{ color: "#374151", lineHeight: 1.7 }}>{bio}</p>}
          </div>
        </div>

        {/* Resume */}
        <div className="rounded-2xl p-7 mb-5" style={{ background: "#fff", border: "1px solid #E5E7EB" }}>
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-bold text-base" style={{ color: "#0D0D14", letterSpacing: "-0.02em" }}>Resume</h2>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: "#f0fdf4", color: "#16a34a" }}>Score: 89 / 100</span>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-xl" style={{ background: "#F9FAFB", border: "1px solid #E5E7EB" }}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#eff6ff" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            </div>
            <div className="flex-1">
              <div className="font-semibold text-sm" style={{ color: "#0D0D14" }}>Alex_Johnson_Resume_2024.pdf</div>
              <div className="text-xs" style={{ color: "#9CA3AF" }}>Uploaded May 1 · 142 KB</div>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer" style={{ background: "#fff", border: "1px solid #E5E7EB", color: "#374151" }}>View</button>
              <button className="px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer" style={{ background: "#fff", border: "1px solid #E5E7EB", color: "#374151" }}>Replace</button>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="rounded-2xl p-7 mb-5" style={{ background: "#fff", border: "1px solid #E5E7EB" }}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-base" style={{ color: "#0D0D14", letterSpacing: "-0.02em" }}>Skills</h2>
            <span className="text-xs" style={{ color: "#9CA3AF" }}>Click to remove</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <button key={s} onClick={() => setActiveSkills(prev => { const n = new Set(prev); n.has(s) ? n.delete(s) : n.add(s); return n; })}
                className="px-3.5 py-2 rounded-xl text-sm font-medium cursor-pointer transition-all"
                style={{
                  background: activeSkills.has(s) ? "#0D0D14" : "#F3F4F6",
                  color: activeSkills.has(s) ? "#fff" : "#9CA3AF",
                }}>
                {s}
              </button>
            ))}
            <button className="px-3.5 py-2 rounded-xl text-sm font-medium cursor-pointer"
              style={{ border: "1.5px dashed #E5E7EB", color: "#9CA3AF" }}>
              + Add skill
            </button>
          </div>
        </div>

        {/* Experience */}
        <div className="rounded-2xl p-7 mb-5" style={{ background: "#fff", border: "1px solid #E5E7EB" }}>
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-bold text-base" style={{ color: "#0D0D14", letterSpacing: "-0.02em" }}>Experience</h2>
            <button className="text-xs font-semibold cursor-pointer" style={{ color: "#2563eb" }}>+ Add</button>
          </div>
          <div className="flex flex-col gap-5">
            {experience.map((ex, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs text-white flex-shrink-0 mt-0.5"
                  style={{ background: ex.color }}>{ex.init}</div>
                <div className="flex-1">
                  <div className="font-bold text-sm" style={{ color: "#0D0D14" }}>{ex.title}</div>
                  <div className="text-xs mb-1" style={{ color: "#9CA3AF" }}>{ex.company} · {ex.period}</div>
                  <div className="text-sm" style={{ color: "#6B7280", lineHeight: 1.6 }}>{ex.desc}</div>
                </div>
                <button className="self-start p-1.5 cursor-pointer" style={{ color: "#9CA3AF" }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Job preferences */}
        <div className="rounded-2xl p-7" style={{ background: "#fff", border: "1px solid #E5E7EB" }}>
          <h2 className="font-bold text-base mb-5" style={{ color: "#0D0D14", letterSpacing: "-0.02em" }}>Job Preferences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { label: "Target Roles", value: "Frontend Engineer, Full Stack Engineer" },
              { label: "Desired Salary", value: "$140,000 – $200,000" },
              { label: "Preferred Locations", value: "Remote, San Francisco, New York" },
              { label: "Company Size", value: "Startup (1–200), Scale-up (200–1000)" },
            ].map((pref) => (
              <div key={pref.label}>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: "#374151" }}>{pref.label}</label>
                <input defaultValue={pref.value}
                  className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                  style={{ border: "1.5px solid #E5E7EB", background: "#FAFAFA", color: "#374151" }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#0D0D14")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "#E5E7EB")} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

"use client";

import { useState } from "react";

const letters = [
  { company: "Stripe", role: "Senior Frontend Engineer", date: "May 6", color: "#6366f1", init: "S", status: "Submitted",
    body: `Dear Stripe Team,

I'm excited to apply for the Senior Frontend Engineer position at Stripe. Having followed your work closely — from your beautifully engineered Dashboard to the thoughtful API design philosophy that's made Stripe synonymous with developer experience — I believe my background is a strong match for what you're building.

Over the past four years at TechCorp, I've led the redesign of our core checkout flow, reducing drop-off by 34% through performance optimizations and careful UX iteration. I've built complex, real-time interfaces that handle thousands of concurrent users, and I deeply care about the kind of details that differentiate a good product from a great one.

What excites me most about Stripe is the opportunity to work on infrastructure that millions of businesses depend on daily. The bar for reliability, clarity, and craftsmanship is uniquely high — and that's exactly the environment where I do my best work.

I'd love to discuss how my experience can contribute to the next chapter of Stripe's frontend platform.

Warm regards,
Alex Johnson` },
  { company: "Figma", role: "Product Designer", date: "May 5", color: "#0891b2", init: "F", status: "Submitted",
    body: `Dear Figma Team,

Figma has fundamentally changed how designers and engineers collaborate — and as someone who uses it every day, I've experienced that transformation firsthand. I'd love to bring my design skills to the team that's continuing to push that evolution forward.

My background spans product design, design systems, and cross-functional collaboration across B2B and consumer products. I've shipped features used by tens of thousands of users, run design sprints that accelerated decision-making by weeks, and maintained design systems that scaled across 6+ product teams.

What resonates most with me about Figma's culture is the commitment to building tools that get out of the way and let people create. That philosophy aligns deeply with how I approach my own work — every interaction should feel earned and intentional.

I'd be honored to explore how I can contribute to Figma's mission.

Best,
Alex Johnson` },
  { company: "Vercel", role: "Developer Advocate", date: "May 4", color: "#111827", init: "V", status: "Draft" ,
    body: `Dear Vercel Team,

As a developer who has deployed dozens of projects on Vercel and regularly recommends it to teammates, I have a genuine passion for the platform that I'd love to channel into the Developer Advocate role...` },
  { company: "Linear", role: "Full Stack Engineer", date: "May 3", color: "#5b21b6", init: "L", status: "Submitted",
    body: `Dear Linear Team,

Linear's obsession with speed and quality mirrors my own values as an engineer...` },
];

const statusColors: Record<string, { bg: string; text: string }> = {
  Submitted: { bg: "#f0fdf4", text: "#16a34a" },
  Draft: { bg: "#fffbeb", text: "#d97706" },
  Rejected: { bg: "#fef2f2", text: "#dc2626" },
};

export default function CoverLetters() {
  const [selected, setSelected] = useState(0);
  const letter = letters[selected];

  return (
    <>
      <header className="px-8 py-6" style={{ borderBottom: "1px solid #E5E7EB", background: "rgba(248,247,244,0.92)", backdropFilter: "blur(12px)" }}>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-bold text-xl" style={{ color: "#0D0D14", letterSpacing: "-0.02em" }}>Cover Letters</h1>
            <p className="text-xs mt-0.5" style={{ color: "#9CA3AF" }}>4 letters · 3 submitted · AI-personalized for each role</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold cursor-pointer"
            style={{ background: "#0D0D14", color: "#fff" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            Generate New
          </button>
        </div>
      </header>

      <main className="p-8">
        <div className="flex gap-5" style={{ height: "calc(100vh - 160px)" }}>
          {/* List */}
          <div className="flex flex-col gap-2.5 flex-shrink-0" style={{ width: 280 }}>
            {letters.map((l, i) => (
              <button key={i} onClick={() => setSelected(i)}
                className="flex items-center gap-3 p-4 rounded-2xl text-left w-full cursor-pointer transition-all"
                style={{
                  background: selected === i ? "#fff" : "transparent",
                  border: `1px solid ${selected === i ? "#D1D5DB" : "transparent"}`,
                  boxShadow: selected === i ? "0 2px 12px rgba(0,0,0,0.06)" : "none",
                }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm text-white flex-shrink-0"
                  style={{ background: l.color }}>{l.init}</div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm truncate" style={{ color: "#0D0D14" }}>{l.company}</div>
                  <div className="text-xs truncate" style={{ color: "#9CA3AF" }}>{l.role}</div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs" style={{ color: "#9CA3AF" }}>{l.date}</span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                      style={{ background: statusColors[l.status]?.bg, color: statusColors[l.status]?.text }}>{l.status}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Preview */}
          <div className="flex-1 rounded-2xl flex flex-col overflow-hidden" style={{ background: "#fff", border: "1px solid #E5E7EB" }}>
            {/* Preview header */}
            <div className="flex items-center justify-between px-6 py-4 flex-shrink-0" style={{ borderBottom: "1px solid #F3F4F6" }}>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm text-white"
                  style={{ background: letter.color }}>{letter.init}</div>
                <div>
                  <div className="font-bold text-sm" style={{ color: "#0D0D14" }}>{letter.company} — {letter.role}</div>
                  <div className="text-xs" style={{ color: "#9CA3AF" }}>Generated {letter.date}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold cursor-pointer"
                  style={{ background: "#F3F4F6", color: "#374151" }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                  Edit
                </button>
                <button className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold cursor-pointer"
                  style={{ background: "#F3F4F6", color: "#374151" }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                  Copy
                </button>
                <button className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold cursor-pointer"
                  style={{ background: "#0D0D14", color: "#fff" }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  Export
                </button>
              </div>
            </div>
            {/* Letter content */}
            <div className="flex-1 overflow-y-auto p-8">
              <div className="max-w-2xl mx-auto">
                <pre className="whitespace-pre-wrap text-sm leading-relaxed font-sans" style={{ color: "#374151", lineHeight: 1.8 }}>
                  {letter.body}
                </pre>
              </div>
            </div>
            {/* Regenerate banner */}
            <div className="px-6 py-4 flex items-center justify-between flex-shrink-0" style={{ borderTop: "1px solid #F3F4F6", background: "#FAFAFA" }}>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ background: "#16a34a" }} />
                <span className="text-xs" style={{ color: "#6B7280" }}>AI-generated and personalized · Sounds like you, not a robot</span>
              </div>
              <button className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold cursor-pointer"
                style={{ background: "#eff6ff", color: "#2563eb" }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
                Regenerate
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

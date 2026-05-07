"use client";

import { useState } from "react";

const upcoming = [
  { company: "Stripe", role: "Senior Frontend Engineer", date: "May 9, 2:00 PM", type: "Technical", color: "#6366f1", init: "S", ready: 82 },
  { company: "Figma", role: "Product Designer", date: "May 11, 11:00 AM", type: "Portfolio Review", color: "#0891b2", init: "F", ready: 65 },
];

const questionSets = [
  {
    company: "Stripe", color: "#6366f1", init: "S",
    questions: [
      { q: "How would you design a real-time payment status dashboard?", category: "System Design" },
      { q: "Explain how you'd handle optimistic UI updates in a payments flow.", category: "Frontend" },
      { q: "What are the key considerations for accessibility in financial UIs?", category: "Frontend" },
      { q: "How would you approach state management in a complex checkout flow?", category: "Architecture" },
    ],
  },
  {
    company: "Figma", color: "#0891b2", init: "F",
    questions: [
      { q: "Walk us through your design process for a complex feature.", category: "Process" },
      { q: "How do you balance user needs with technical constraints?", category: "Product Thinking" },
      { q: "Describe a time you pushed back on a product requirement.", category: "Collaboration" },
    ],
  },
];

const tips = [
  { title: "Use the STAR method", desc: "Structure answers as Situation, Task, Action, Result for behavioral questions.", icon: "⭐" },
  { title: "Research the company deeply", desc: "Know their recent product launches, blog posts, and mission statement.", icon: "🔍" },
  { title: "Prepare 3 smart questions", desc: "Ask about team culture, biggest technical challenges, and career growth.", icon: "💬" },
  { title: "Practice out loud", desc: "Hearing yourself answer is very different from thinking through an answer silently.", icon: "🎤" },
];

export default function InterviewPrep() {
  const [activeCompany, setActiveCompany] = useState(0);
  const [practiced, setPracticed] = useState<Set<string>>(new Set());

  return (
    <>
      <header className="px-8 py-6" style={{ borderBottom: "1px solid #E5E7EB", background: "rgba(248,247,244,0.92)", backdropFilter: "blur(12px)" }}>
        <h1 className="font-bold text-xl" style={{ color: "#0D0D14", letterSpacing: "-0.02em" }}>Interview Prep</h1>
        <p className="text-xs mt-0.5" style={{ color: "#9CA3AF" }}>2 upcoming interviews · AI-generated questions for each role</p>
      </header>

      <main className="p-8">
        {/* Upcoming interviews */}
        <div className="mb-8">
          <h2 className="font-bold text-base mb-4" style={{ color: "#0D0D14", letterSpacing: "-0.02em" }}>Upcoming Interviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {upcoming.map((i, idx) => (
              <div key={idx} className="rounded-2xl p-6" style={{ background: "#fff", border: "1px solid #E5E7EB" }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center font-bold text-sm text-white"
                    style={{ background: i.color }}>{i.init}</div>
                  <div>
                    <div className="font-bold text-sm" style={{ color: "#0D0D14" }}>{i.company}</div>
                    <div className="text-xs" style={{ color: "#9CA3AF" }}>{i.role}</div>
                  </div>
                  <span className="ml-auto text-xs font-medium px-2.5 py-1 rounded-full"
                    style={{ background: "#eff6ff", color: "#2563eb" }}>{i.type}</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  <span className="text-sm font-medium" style={{ color: "#374151" }}>{i.date}</span>
                </div>
                {/* Readiness bar */}
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-xs" style={{ color: "#6B7280" }}>Readiness</span>
                  <span className="text-xs font-bold" style={{ color: i.ready >= 80 ? "#16a34a" : "#d97706" }}>{i.ready}%</span>
                </div>
                <div className="h-1.5 rounded-full mb-4" style={{ background: "#F3F4F6" }}>
                  <div className="h-full rounded-full transition-all"
                    style={{ width: `${i.ready}%`, background: i.ready >= 80 ? "#16a34a" : "#d97706" }} />
                </div>
                <button onClick={() => setActiveCompany(idx)}
                  className="w-full py-2.5 rounded-xl text-sm font-bold cursor-pointer"
                  style={{ background: activeCompany === idx ? i.color : "#F3F4F6", color: activeCompany === idx ? "#fff" : "#374151" }}>
                  {activeCompany === idx ? "Viewing Questions ✓" : "Practice Questions"}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Questions */}
          <div className="xl:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <h2 className="font-bold text-base" style={{ color: "#0D0D14", letterSpacing: "-0.02em" }}>Practice Questions</h2>
              <div className="flex gap-1">
                {questionSets.map((qs, idx) => (
                  <button key={idx} onClick={() => setActiveCompany(idx)}
                    className="px-3 py-1.5 rounded-xl text-xs font-semibold cursor-pointer"
                    style={{ background: activeCompany === idx ? qs.color : "#F3F4F6", color: activeCompany === idx ? "#fff" : "#6B7280" }}>
                    {qs.company}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {questionSets[activeCompany].questions.map((q, i) => {
                const key = `${activeCompany}-${i}`;
                const done = practiced.has(key);
                return (
                  <div key={i} className="rounded-2xl p-5" style={{ background: "#fff", border: `1px solid ${done ? "#bbf7d0" : "#E5E7EB"}` }}>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full mb-2 inline-block"
                          style={{ background: "#F3F4F6", color: "#6B7280" }}>{q.category}</span>
                        <p className="text-sm font-medium" style={{ color: "#0D0D14", lineHeight: 1.6 }}>{q.q}</p>
                      </div>
                      <button onClick={() => setPracticed(prev => { const s = new Set(prev); s.has(key) ? s.delete(key) : s.add(key); return s; })}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold cursor-pointer flex-shrink-0 transition-all"
                        style={{ background: done ? "#f0fdf4" : "#F3F4F6", color: done ? "#16a34a" : "#6B7280" }}>
                        {done ? "✓ Practiced" : "Mark Done"}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tips */}
          <div>
            <h2 className="font-bold text-base mb-4" style={{ color: "#0D0D14", letterSpacing: "-0.02em" }}>Pro Tips</h2>
            <div className="flex flex-col gap-3">
              {tips.map((tip, i) => (
                <div key={i} className="rounded-2xl p-4" style={{ background: "#fff", border: "1px solid #E5E7EB" }}>
                  <div className="flex items-start gap-3">
                    <div className="text-xl flex-shrink-0">{tip.icon}</div>
                    <div>
                      <div className="font-semibold text-sm mb-1" style={{ color: "#0D0D14" }}>{tip.title}</div>
                      <div className="text-xs leading-relaxed" style={{ color: "#6B7280", lineHeight: 1.6 }}>{tip.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Mock interview CTA */}
            <div className="mt-4 rounded-2xl p-5" style={{ background: "#0D0D14" }}>
              <div className="font-bold text-sm text-white mb-1">Mock Interview</div>
              <div className="text-xs mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>Practice with our AI interviewer and get real-time feedback on your answers.</div>
              <button className="w-full py-2.5 rounded-xl text-sm font-bold cursor-pointer"
                style={{ background: "#fff", color: "#0D0D14" }}>Start Mock Interview</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

"use client";

import { useState } from "react";

type Status = "Applied" | "Reviewing" | "Interview" | "Offer" | "Rejected";

const initialCards: { company: string; role: string; date: string; match: number; color: string; init: string; status: Status }[] = [
  { company: "Stripe", role: "Senior Frontend Engineer", date: "May 6", match: 96, color: "#6366f1", init: "S", status: "Interview" },
  { company: "Figma", role: "Product Designer", date: "May 5", match: 92, color: "#0891b2", init: "F", status: "Interview" },
  { company: "Vercel", role: "Developer Advocate", date: "May 4", match: 88, color: "#111827", init: "V", status: "Reviewing" },
  { company: "Linear", role: "Full Stack Engineer", date: "May 3", match: 85, color: "#5b21b6", init: "L", status: "Reviewing" },
  { company: "Anthropic", role: "Software Engineer", date: "May 2", match: 98, color: "#d97706", init: "A", status: "Reviewing" },
  { company: "OpenAI", role: "Full Stack Engineer", date: "May 1", match: 94, color: "#059669", init: "O", status: "Applied" },
  { company: "Cursor", role: "Product Engineer", date: "Apr 30", match: 91, color: "#7c3aed", init: "C", status: "Applied" },
  { company: "Replit", role: "Frontend Engineer", date: "Apr 29", match: 87, color: "#2563eb", init: "R", status: "Applied" },
  { company: "Loom", role: "Backend Engineer", date: "Apr 28", match: 82, color: "#0f766e", init: "L", status: "Applied" },
  { company: "Notion", role: "Growth Engineer", date: "Apr 27", match: 79, color: "#ea580c", init: "N", status: "Rejected" },
  { company: "Intercom", role: "Frontend Engineer", date: "Apr 26", match: 75, color: "#374151", init: "I", status: "Rejected" },
  { company: "Shopify", role: "Full Stack Developer", date: "Apr 25", match: 83, color: "#059669", init: "S", status: "Offer" },
];

const columns: { id: Status; label: string; color: string; bg: string }[] = [
  { id: "Applied", label: "Applied", color: "#2563eb", bg: "#eff6ff" },
  { id: "Reviewing", label: "Reviewing", color: "#d97706", bg: "#fffbeb" },
  { id: "Interview", label: "Interview", color: "#7c3aed", bg: "#f5f3ff" },
  { id: "Offer", label: "Offer", color: "#16a34a", bg: "#f0fdf4" },
  { id: "Rejected", label: "Rejected", color: "#dc2626", bg: "#fef2f2" },
];

export default function Applications() {
  const [cards] = useState(initialCards);
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <header className="px-8 py-6" style={{ borderBottom: "1px solid #E5E7EB", background: "rgba(248,247,244,0.92)", backdropFilter: "blur(12px)" }}>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-bold text-xl" style={{ color: "#0D0D14", letterSpacing: "-0.02em" }}>Applications</h1>
            <p className="text-xs mt-0.5" style={{ color: "#9CA3AF" }}>47 total · 3 interviews · 1 offer</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold cursor-pointer"
              style={{ background: "#fff", border: "1px solid #E5E7EB", color: "#374151" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
              List View
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold cursor-pointer"
              style={{ background: "#0D0D14", color: "#fff" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              Add Application
            </button>
          </div>
        </div>
      </header>

      <main className="p-6 overflow-x-auto">
        <div className="flex gap-4 min-w-max">
          {columns.map((col) => {
            const colCards = cards.filter((c) => c.status === col.id);
            return (
              <div key={col.id} className="flex flex-col" style={{ width: 270 }}>
                {/* Column header */}
                <div className="flex items-center justify-between mb-3 px-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold" style={{ color: "#0D0D14" }}>{col.label}</span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full"
                      style={{ background: col.bg, color: col.color }}>{colCards.length}</span>
                  </div>
                </div>
                {/* Cards */}
                <div className="flex flex-col gap-2.5">
                  {colCards.map((card, i) => {
                    const idx = cards.indexOf(card);
                    const isSelected = selected === idx;
                    return (
                      <div key={i}
                        onClick={() => setSelected(isSelected ? null : idx)}
                        className="rounded-2xl p-4 cursor-pointer transition-all"
                        style={{
                          background: "#fff",
                          border: `1px solid ${isSelected ? col.color + "60" : "#E5E7EB"}`,
                          boxShadow: isSelected ? `0 0 0 2px ${col.color}20` : "none",
                        }}>
                        <div className="flex items-center gap-2.5 mb-3">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs text-white flex-shrink-0"
                            style={{ background: card.color }}>{card.init}</div>
                          <div className="flex-1 min-w-0">
                            <div className="font-bold text-sm truncate" style={{ color: "#0D0D14" }}>{card.company}</div>
                            <div className="text-xs truncate" style={{ color: "#9CA3AF" }}>{card.role}</div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs" style={{ color: "#9CA3AF" }}>{card.date}</span>
                          <span className="text-xs font-bold" style={{ color: card.match >= 90 ? "#059669" : "#d97706" }}>{card.match}%</span>
                        </div>
                        {isSelected && (
                          <div className="mt-3 pt-3 flex gap-2" style={{ borderTop: "1px solid #F3F4F6" }}>
                            <button className="flex-1 py-1.5 rounded-lg text-xs font-semibold cursor-pointer"
                              style={{ background: col.bg, color: col.color }}>View Details</button>
                            <button className="w-7 h-7 rounded-lg flex items-center justify-center cursor-pointer"
                              style={{ background: "#fef2f2", color: "#dc2626" }}>
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/></svg>
                            </button>
                          </div>
                        )}
                      </div>
                    );
                  })}
                  {/* Empty state */}
                  {colCards.length === 0 && (
                    <div className="rounded-2xl p-6 text-center" style={{ border: "1.5px dashed #E5E7EB" }}>
                      <div className="text-xs" style={{ color: "#9CA3AF" }}>No applications</div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}

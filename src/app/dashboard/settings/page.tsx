"use client";

import { useState } from "react";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("account");
  const [notifs, setNotifs] = useState({ newMatches: true, interviews: true, autoApplyReport: true, weeklyDigest: false, marketing: false });
  const [autoApplyOn, setAutoApplyOn] = useState(true);
  const [dailyLimit, setDailyLimit] = useState(10);
  const [minMatch, setMinMatch] = useState(80);

  const tabs = [
    { id: "account", label: "Account" },
    { id: "notifications", label: "Notifications" },
    { id: "autoapply", label: "Auto-Apply" },
    { id: "subscription", label: "Subscription" },
    { id: "integrations", label: "Integrations" },
  ];

  return (
    <>
      <header className="px-8 py-6" style={{ borderBottom: "1px solid #E5E7EB", background: "rgba(248,247,244,0.92)", backdropFilter: "blur(12px)" }}>
        <h1 className="font-bold text-xl" style={{ color: "#0D0D14", letterSpacing: "-0.02em" }}>Settings</h1>
        <p className="text-xs mt-0.5" style={{ color: "#9CA3AF" }}>Manage your account and preferences</p>
      </header>

      <main className="p-8 max-w-3xl">
        {/* Tabs */}
        <div className="flex gap-1 p-1 rounded-xl mb-8" style={{ background: "#fff", border: "1px solid #E5E7EB", width: "fit-content" }}>
          {tabs.map((t) => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              className="px-4 py-2 rounded-lg text-sm font-semibold cursor-pointer transition-all"
              style={{ background: activeTab === t.id ? "#0D0D14" : "transparent", color: activeTab === t.id ? "#fff" : "#6B7280" }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* Account */}
        {activeTab === "account" && (
          <div className="flex flex-col gap-5">
            <div className="rounded-2xl p-7" style={{ background: "#fff", border: "1px solid #E5E7EB" }}>
              <h2 className="font-bold text-base mb-5" style={{ color: "#0D0D14", letterSpacing: "-0.02em" }}>Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                {[
                  { label: "First Name", value: "Alex" },
                  { label: "Last Name", value: "Johnson" },
                  { label: "Email Address", value: "alex@example.com" },
                  { label: "Phone Number", value: "+1 (415) 555-0123" },
                ].map((f) => (
                  <div key={f.label}>
                    <label className="block text-sm font-semibold mb-1.5" style={{ color: "#374151" }}>{f.label}</label>
                    <input defaultValue={f.value}
                      className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                      style={{ border: "1.5px solid #E5E7EB", background: "#FAFAFA", color: "#374151" }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#0D0D14")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "#E5E7EB")} />
                  </div>
                ))}
              </div>
              <button className="px-5 py-2.5 rounded-xl text-sm font-bold cursor-pointer"
                style={{ background: "#0D0D14", color: "#fff" }}>Save Changes</button>
            </div>
            <div className="rounded-2xl p-7" style={{ background: "#fff", border: "1px solid #E5E7EB" }}>
              <h2 className="font-bold text-base mb-5" style={{ color: "#0D0D14", letterSpacing: "-0.02em" }}>Change Password</h2>
              <div className="flex flex-col gap-4 mb-5">
                {["Current Password", "New Password", "Confirm New Password"].map((f) => (
                  <div key={f}>
                    <label className="block text-sm font-semibold mb-1.5" style={{ color: "#374151" }}>{f}</label>
                    <input type="password" placeholder="••••••••"
                      className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                      style={{ border: "1.5px solid #E5E7EB", background: "#FAFAFA", color: "#374151" }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#0D0D14")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "#E5E7EB")} />
                  </div>
                ))}
              </div>
              <button className="px-5 py-2.5 rounded-xl text-sm font-bold cursor-pointer"
                style={{ background: "#0D0D14", color: "#fff" }}>Update Password</button>
            </div>
            <div className="rounded-2xl p-7" style={{ background: "#fef2f2", border: "1px solid #fecaca" }}>
              <h2 className="font-bold text-base mb-2" style={{ color: "#dc2626" }}>Danger Zone</h2>
              <p className="text-sm mb-4" style={{ color: "#9CA3AF" }}>Permanently delete your account and all associated data. This cannot be undone.</p>
              <button className="px-5 py-2.5 rounded-xl text-sm font-bold cursor-pointer"
                style={{ background: "#dc2626", color: "#fff" }}>Delete Account</button>
            </div>
          </div>
        )}

        {/* Notifications */}
        {activeTab === "notifications" && (
          <div className="rounded-2xl overflow-hidden" style={{ background: "#fff", border: "1px solid #E5E7EB" }}>
            <div className="px-7 py-5" style={{ borderBottom: "1px solid #F3F4F6" }}>
              <h2 className="font-bold text-base" style={{ color: "#0D0D14" }}>Email Notifications</h2>
            </div>
            {[
              { key: "newMatches" as const, label: "New Job Matches", desc: "Get notified when Snaziffied finds new matches for you" },
              { key: "interviews" as const, label: "Interview Requests", desc: "Alerts when a company wants to schedule an interview" },
              { key: "autoApplyReport" as const, label: "Daily Auto-Apply Report", desc: "Summary of applications submitted automatically each day" },
              { key: "weeklyDigest" as const, label: "Weekly Digest", desc: "Weekly summary of your job search progress" },
              { key: "marketing" as const, label: "Product Updates", desc: "New features, tips, and product announcements" },
            ].map((item, i, arr) => (
              <div key={item.key} className="flex items-center justify-between px-7 py-5"
                style={{ borderBottom: i < arr.length - 1 ? "1px solid #F9FAFB" : undefined }}>
                <div>
                  <div className="font-semibold text-sm mb-0.5" style={{ color: "#0D0D14" }}>{item.label}</div>
                  <div className="text-xs" style={{ color: "#9CA3AF" }}>{item.desc}</div>
                </div>
                <button onClick={() => setNotifs(prev => ({ ...prev, [item.key]: !prev[item.key] }))}
                  className="relative w-10 h-6 rounded-full cursor-pointer transition-all flex-shrink-0"
                  style={{ background: notifs[item.key] ? "#0D0D14" : "#D1D5DB" }}>
                  <div className="absolute w-4 h-4 rounded-full top-1 transition-all"
                    style={{ background: "#fff", left: notifs[item.key] ? "calc(100% - 20px)" : 4 }} />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Auto-Apply */}
        {activeTab === "autoapply" && (
          <div className="flex flex-col gap-5">
            <div className="rounded-2xl p-7" style={{ background: "#fff", border: "1px solid #E5E7EB" }}>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="font-bold text-base mb-0.5" style={{ color: "#0D0D14" }}>Auto-Apply Status</h2>
                  <p className="text-sm" style={{ color: "#9CA3AF" }}>Automatically apply to matching jobs on your behalf</p>
                </div>
                <button onClick={() => setAutoApplyOn(!autoApplyOn)}
                  className="relative w-12 h-7 rounded-full cursor-pointer transition-all"
                  style={{ background: autoApplyOn ? "#0D0D14" : "#D1D5DB" }}>
                  <div className="absolute w-5 h-5 rounded-full top-1 transition-all"
                    style={{ background: "#fff", left: autoApplyOn ? "calc(100% - 24px)" : 4 }} />
                </button>
              </div>
              <div className="flex flex-col gap-5">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-semibold" style={{ color: "#374151" }}>Daily application limit</label>
                    <span className="text-sm font-bold" style={{ color: "#0D0D14" }}>{dailyLimit} / day</span>
                  </div>
                  <input type="range" min={1} max={50} value={dailyLimit} onChange={(e) => setDailyLimit(+e.target.value)}
                    className="w-full cursor-pointer" style={{ accentColor: "#0D0D14" }} />
                  <div className="flex justify-between text-xs mt-1" style={{ color: "#9CA3AF" }}>
                    <span>1</span><span>50</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-semibold" style={{ color: "#374151" }}>Minimum match score</label>
                    <span className="text-sm font-bold" style={{ color: "#0D0D14" }}>{minMatch}%</span>
                  </div>
                  <input type="range" min={50} max={99} value={minMatch} onChange={(e) => setMinMatch(+e.target.value)}
                    className="w-full cursor-pointer" style={{ accentColor: "#0D0D14" }} />
                  <div className="flex justify-between text-xs mt-1" style={{ color: "#9CA3AF" }}>
                    <span>50%</span><span>99%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Subscription */}
        {activeTab === "subscription" && (
          <div className="flex flex-col gap-5">
            <div className="rounded-2xl p-7" style={{ background: "#fff", border: "1px solid #E5E7EB" }}>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: "#9CA3AF" }}>Current Plan</div>
                  <div className="font-black text-2xl" style={{ color: "#0D0D14", letterSpacing: "-0.04em" }}>Free</div>
                </div>
                <span className="text-xs font-bold px-3 py-1.5 rounded-full" style={{ background: "#F3F4F6", color: "#6B7280" }}>Active</span>
              </div>
              <div className="flex flex-col gap-2 mb-6">
                {["5 AI job matches / day", "Basic resume analysis", "1 cover letter / week", "Application tracking board"].map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-md flex items-center justify-center" style={{ background: "#f0fdf4" }}>
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <span className="text-sm" style={{ color: "#374151" }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl p-7" style={{ background: "#0D0D14" }}>
              <div className="font-black text-xl text-white mb-1" style={{ letterSpacing: "-0.04em" }}>Upgrade to Pro</div>
              <div className="text-sm mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>$29/month · Cancel anytime</div>
              <div className="text-3xl font-black text-white mb-5" style={{ letterSpacing: "-0.06em" }}>$20<span className="text-base font-normal" style={{ color: "rgba(255,255,255,0.4)" }}>/mo billed annually</span></div>
              <div className="flex flex-col gap-2 mb-6">
                {["Unlimited job matches", "Advanced resume optimizer", "Auto-apply (50/month)", "Interview preparation", "Priority support"].map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-md flex items-center justify-center" style={{ background: "rgba(255,255,255,0.1)" }}>
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <span className="text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>{f}</span>
                  </div>
                ))}
              </div>
              <a href="/signup" className="block text-center py-3.5 rounded-2xl font-bold text-sm no-underline"
                style={{ background: "#fff", color: "#0D0D14" }}>Start Pro Trial — 7 Days Free</a>
            </div>
          </div>
        )}

        {/* Integrations */}
        {activeTab === "integrations" && (
          <div className="rounded-2xl overflow-hidden" style={{ background: "#fff", border: "1px solid #E5E7EB" }}>
            <div className="px-7 py-5" style={{ borderBottom: "1px solid #F3F4F6" }}>
              <h2 className="font-bold text-base" style={{ color: "#0D0D14" }}>Connected Apps</h2>
            </div>
            {[
              { name: "LinkedIn", desc: "Import your profile and apply via LinkedIn Easy Apply", color: "#0077B5", connected: true },
              { name: "Google", desc: "Sign in with Google and import contacts", color: "#EA4335", connected: true },
              { name: "GitHub", desc: "Showcase your repos and verify technical skills", color: "#111827", connected: false },
              { name: "Notion", desc: "Sync your job search notes and research", color: "#111827", connected: false },
              { name: "Slack", desc: "Get job alerts and updates in your Slack workspace", color: "#4A154B", connected: false },
            ].map((item, i, arr) => (
              <div key={item.name} className="flex items-center justify-between px-7 py-5"
                style={{ borderBottom: i < arr.length - 1 ? "1px solid #F9FAFB" : undefined }}>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs text-white"
                    style={{ background: item.color }}>{item.name[0]}</div>
                  <div>
                    <div className="font-semibold text-sm" style={{ color: "#0D0D14" }}>{item.name}</div>
                    <div className="text-xs" style={{ color: "#9CA3AF" }}>{item.desc}</div>
                  </div>
                </div>
                <button className="px-4 py-1.5 rounded-xl text-xs font-semibold cursor-pointer"
                  style={{
                    background: item.connected ? "#fef2f2" : "#0D0D14",
                    color: item.connected ? "#dc2626" : "#fff",
                  }}>
                  {item.connected ? "Disconnect" : "Connect"}
                </button>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );
}

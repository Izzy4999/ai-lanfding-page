"use client";

import { usePathname } from "next/navigation";

const navMain = [
  {
    href: "/dashboard", label: "Overview", exact: true,
    icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>,
  },
  {
    href: "/dashboard/matches", label: "Job Matches", badge: "12",
    icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  },
  {
    href: "/dashboard/applications", label: "Applications",
    icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>,
  },
  {
    href: "/dashboard/interview", label: "Interview Prep",
    icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  },
  {
    href: "/dashboard/letters", label: "Cover Letters",
    icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  },
  {
    href: "/dashboard/analytics", label: "Analytics",
    icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
  },
];

const navAccount = [
  {
    href: "/dashboard/profile", label: "Profile",
    icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 1 0-16 0"/></svg>,
  },
  {
    href: "/dashboard/settings", label: "Settings",
    icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>,
  },
];

function NavLink({ href, label, icon, badge, exact }: { href: string; label: string; icon: React.ReactNode; badge?: string; exact?: boolean }) {
  const pathname = usePathname();
  const active = exact ? pathname === href : pathname.startsWith(href);
  return (
    <a href={href}
      className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm no-underline transition-colors mb-0.5"
      style={{ background: active ? "#F3F4F6" : "transparent", color: active ? "#0D0D14" : "#6B7280", fontWeight: active ? 600 : 500 }}>
      {icon}
      <span className="flex-1">{label}</span>
      {badge && (
        <span className="text-[11px] font-bold px-2 py-0.5 rounded-full" style={{ background: "#ECFDF5", color: "#16a34a" }}>{badge}</span>
      )}
    </a>
  );
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex" style={{ background: "#F8F7F4", fontFamily: "var(--font-geist-sans), -apple-system, system-ui, sans-serif" }}>
      {/* Sidebar */}
      <aside className="flex-col flex-shrink-0"
        style={{ width: 240, position: "fixed", top: 0, left: 0, bottom: 0, background: "#fff", borderRight: "1px solid #E5E7EB", zIndex: 40, display: "flex" }}>
        {/* Logo */}
        <div className="flex items-center px-5" style={{ height: 64, borderBottom: "1px solid #E5E7EB" }}>
          <a href="/" className="flex items-center gap-2 no-underline">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "#0D0D14" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <span className="font-bold text-sm" style={{ color: "#0D0D14", letterSpacing: "-0.02em" }}>Snaziffied</span>
          </a>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <div className="text-[10px] font-semibold uppercase tracking-[0.12em] px-3 mb-3" style={{ color: "#9CA3AF" }}>Main Menu</div>
          {navMain.map((item) => <NavLink key={item.href} {...item} />)}
          <div className="my-4" style={{ height: 1, background: "#E5E7EB" }} />
          <div className="text-[10px] font-semibold uppercase tracking-[0.12em] px-3 mb-3" style={{ color: "#9CA3AF" }}>Account</div>
          {navAccount.map((item) => <NavLink key={item.href} {...item} />)}
        </nav>

        {/* Upgrade */}
        <div className="mx-3 mb-3 p-4 rounded-2xl" style={{ background: "#0D0D14" }}>
          <div className="font-bold text-sm text-white mb-1">Go Pro</div>
          <div className="text-xs mb-3" style={{ color: "rgba(255,255,255,0.45)" }}>Unlock unlimited auto-apply & interview coaching</div>
          <a href="/signup" className="block text-center py-2 rounded-xl text-xs font-bold no-underline"
            style={{ background: "#fff", color: "#0D0D14" }}>Upgrade Now</a>
        </div>

        {/* User */}
        <div className="flex items-center gap-3 px-4 py-4" style={{ borderTop: "1px solid #E5E7EB" }}>
          <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm text-white flex-shrink-0" style={{ background: "#2563eb" }}>A</div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold truncate" style={{ color: "#0D0D14" }}>Alex Johnson</div>
            <div className="text-xs" style={{ color: "#9CA3AF" }}>Free Plan</div>
          </div>
          <a href="/" style={{ color: "#9CA3AF" }} title="Log out">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
          </a>
        </div>
      </aside>

      {/* Main */}
      <div style={{ marginLeft: 240, flex: 1, minWidth: 0 }}>{children}</div>
    </div>
  );
}

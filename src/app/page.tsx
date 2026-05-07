"use client";

import { useEffect, useState } from "react";

/* ─── Scroll reveal ──────────────────────────────────────────── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.01, rootMargin: "0px 0px 80px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ─── Stars ──────────────────────────────────────────────────── */
function Stars({ n = 5 }: { n?: number }) {
  return (
    <span className="flex gap-0.5">
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24">
          <polygon
            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
            fill="#FBBF24"
            stroke="none"
          />
        </svg>
      ))}
    </span>
  );
}

/* ─── Check icon ─────────────────────────────────────────────── */
function Check({ light = false }: { light?: boolean }) {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={light ? "#fff" : "#374151"} strokeWidth="3" strokeLinecap="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

/* ─── NAVBAR ─────────────────────────────────────────────────── */
function Navbar({ heroVisible }: { heroVisible: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [["#features", "Features"], ["#how-it-works", "How it Works"], ["#pricing", "Pricing"], ["#testimonials", "Reviews"]];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: heroVisible ? "transparent" : "rgba(248,247,244,0.94)",
        backdropFilter: heroVisible ? "none" : "blur(20px)",
        WebkitBackdropFilter: heroVisible ? "none" : "blur(20px)",
        borderBottom: heroVisible ? "none" : "1px solid #e5e7eb",
        transition: "background 0.4s, border-color 0.4s",
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 h-[68px] flex items-center justify-between gap-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 no-underline flex-shrink-0">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "#0D0D14" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>
          <span className="font-bold text-base tracking-tight"
            style={{ color: heroVisible ? "#fff" : "#0D0D14", textShadow: heroVisible ? "0 1px 6px rgba(0,0,0,0.5)" : "none" }}>
            Snaziffied
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7 flex-1 justify-center">
          {links.map(([href, label]) => (
            <a key={href} href={href} className="text-sm font-semibold no-underline transition-colors"
              style={{
                color: heroVisible ? "#fff" : "#4B5563",
                textShadow: heroVisible ? "0 1px 6px rgba(0,0,0,0.5)" : "none",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = heroVisible ? "#fff" : "#0D0D14")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = heroVisible ? "#fff" : "#4B5563")}
            >{label}</a>
          ))}
        </div>

        {/* Right */}
        <div className="hidden md:flex items-center gap-4 flex-shrink-0">
          <a href="/signin" className="text-sm font-semibold no-underline transition-colors"
            style={{
              color: heroVisible ? "#fff" : "#4B5563",
              textShadow: heroVisible ? "0 1px 6px rgba(0,0,0,0.5)" : "none",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = heroVisible ? "#fff" : "#0D0D14")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = heroVisible ? "#fff" : "#4B5563")}
          >Sign In</a>
          <a href="/signup" className="btn-dark text-sm px-5 py-2.5">Start Free</a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2 cursor-pointer" style={{ color: heroVisible ? "#fff" : "#374151" }}
          onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {menuOpen ? <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></> : <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 pb-5 pt-3 flex flex-col gap-3">
          {links.map(([href, label]) => (
            <a key={href} href={href} className="nav-link py-1" onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <div className="divider my-1" />
          <a href="/signin" className="nav-link py-1">Sign In</a>
          <a href="/signup" className="btn-dark text-sm px-5 py-3 justify-center" onClick={() => setMenuOpen(false)}>Start Free</a>
        </div>
      )}
    </header>
  );
}

/* ─── HERO ───────────────────────────────────────────────────── */
function Hero({ onVisibilityChange }: { onVisibilityChange: (v: boolean) => void }) {
  useEffect(() => {
    const el = document.getElementById("hero-sentinel");
    if (!el) return;
    const io = new IntersectionObserver(([e]) => onVisibilityChange(e.isIntersecting), { threshold: 0.05 });
    io.observe(el);
    return () => io.disconnect();
  }, [onVisibilityChange]);

  return (
    <section>
      {/* Hero background — video with image fallback */}
      <div className="hero-img-wrap" id="hero-sentinel">
        <video
          autoPlay muted loop playsInline
          poster="/hero.png"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}>
          <source src="/hero.mp4" type="video/mp4" />
          {/* Falls back to poster image if video is missing */}
        </video>
        <div className="hero-img-top" />
        <div className="hero-img-fade" />
        <div className="hero-img-fade-sides" />
      </div>

      {/* Text */}
      <div className="relative px-4 pt-6 pb-20 text-center">
        <h1 className="font-bold leading-tight" style={{ fontSize: "clamp(2.4rem,5.5vw,4.2rem)", color: "var(--text-dark)", letterSpacing: "-0.035em", maxWidth: 700, margin: "0 auto 1rem" }}>
          Job Applications Were<br /><span style={{ fontWeight: 900 }}>Never This Easy.</span>
        </h1>

        <p className="text-[17px] mt-5 mb-8 leading-relaxed" style={{ color: "var(--text-mid)", maxWidth: 400, margin: "1.25rem auto 2rem" }}>
          Meet Snaziffied — AI that finds your best matches and applies in your voice.
        </p>

        <div className="flex flex-col items-center gap-2.5 mb-10">
          <a href="#pricing" className="btn-dark text-base px-8 py-3.5">Start Free</a>
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>Free — no credit card required</span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-7">
          <div className="flex items-center gap-2">
            <Stars />
            <span className="text-sm font-semibold" style={{ color: "var(--text-dark)" }}>Excellent</span>
            <span className="text-sm" style={{ color: "var(--text-muted)" }}>4.7 / 5 · <b style={{ color: "var(--text-dark)" }}>2,400 reviews</b></span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-gray-200" />
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-md flex items-center justify-center" style={{ background: "#ecfdf5" }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
            <span className="text-sm" style={{ color: "var(--text-mid)" }}>50,000+ users hired</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── LOGOS ──────────────────────────────────────────────────── */
function Logos() {
  const brands = ["Google", "Meta", "Netflix", "Stripe", "Airbnb", "Uber", "Figma", "Vercel", "OpenAI", "Notion", "Shopify", "Atlassian"];
  return (
    <section style={{ background: "#fff", borderTop: "1px solid #f1f5f9", borderBottom: "1px solid #f1f5f9" }} className="py-12">
      <p className="text-center text-[11px] font-semibold uppercase tracking-[0.14em] mb-7" style={{ color: "var(--text-muted)" }}>
        Job seekers from these companies trust Snaziffied
      </p>
      <div className="logos-wrap">
        <div className="logos-track">
          {[...brands, ...brands].map((b, i) => (
            <span key={i} className="font-semibold text-sm select-none"
              style={{ color: "#c4c9d4", padding: "0 28px", letterSpacing: "0.02em" }}>{b}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FEATURES ───────────────────────────────────────────────── */
const featureList = [
  {
    label: "AI Job Matching",
    desc: "Snaziffied scans 1,000+ job sources and scores every listing against your skills and goals. Only roles worth your time land in your feed.",
    iconColor: "#2563eb", iconBg: "#eff6ff",
    tags: ["1,000+ Sources", "Real-time Alerts", "94% Accuracy"],
    wide: true,
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>,
  },
  {
    label: "Resume Optimizer",
    desc: "Instant ATS scoring and targeted AI suggestions per job. Every submission lands as strong as possible.",
    iconColor: "#0891b2", iconBg: "#ecfeff",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>,
  },
  {
    label: "Auto-Apply",
    desc: "Fill and submit tailored applications automatically — a custom resume and cover letter for every role. Go from 2 to 50+ a day.",
    iconColor: "#059669", iconBg: "#ecfdf5",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>,
  },
  {
    label: "Cover Letter AI",
    desc: "Personalized cover letters in seconds that sound exactly like you — not a robot. Hiring managers will notice.",
    iconColor: "#ea580c", iconBg: "#fff7ed",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>,
  },
  {
    label: "Application Tracker",
    desc: "One Kanban board for every application you've sent. Always know where you stand with every company.",
    iconColor: "#7c3aed", iconBg: "#f5f3ff",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>,
  },
  {
    label: "Interview Coach",
    desc: "AI-generated questions tailored to your exact target company and role. Walk in knowing exactly what to expect.",
    iconColor: "#0f766e", iconBg: "#f0fdfa",
    tags: ["Role-specific Questions", "AI Feedback", "Salary Insights"],
    wide: true,
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
  },
];

function Features() {
  return (
    <section id="features" className="py-28 px-4" style={{ background: "var(--bg)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="reveal text-[11px] font-semibold uppercase tracking-[0.14em] mb-4" style={{ color: "var(--text-muted)" }}>Platform Features</p>
          <h2 className="reveal reveal-delay-1 font-bold mb-4" style={{ fontSize: "clamp(2rem,4vw,3rem)", letterSpacing: "-0.035em" }}>
            Everything to get you hired
          </h2>
          <p className="reveal reveal-delay-2 text-[17px] leading-relaxed" style={{ color: "var(--text-mid)", maxWidth: 440, margin: "0 auto" }}>
            One platform. Every tool you need to go from searching to signing.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featureList.map((f, i) => (
            <div
              key={f.label}
              className={`reveal reveal-delay-${(i % 3) + 1} card shine p-8 flex flex-col${f.wide ? " lg:col-span-2" : ""}`}
            >
              <div className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5 flex-shrink-0"
                style={{ background: f.iconBg, color: f.iconColor, border: `1px solid ${f.iconColor}1a` }}>
                {f.icon}
              </div>
              <h3 className="font-bold mb-2 text-[16px]" style={{ color: "var(--text-dark)", letterSpacing: "-0.02em" }}>{f.label}</h3>
              <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--text-mid)", lineHeight: 1.7 }}>{f.desc}</p>
              {f.tags && (
                <div className="flex flex-wrap gap-2 mt-5">
                  {f.tags.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full font-medium"
                      style={{ background: f.iconBg, color: f.iconColor, border: `1px solid ${f.iconColor}1a` }}>{t}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── HOW IT WORKS ───────────────────────────────────────────── */
function HowItWorks() {
  const steps = [
    {
      n: "01", title: "Upload your resume",
      desc: "Drop in your CV — PDF, DOCX, or TXT. Our AI reads it in seconds and builds your full career profile.",
      iconColor: "#2563eb", iconBg: "#eff6ff",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>,
    },
    {
      n: "02", title: "Set your preferences",
      desc: "Choose your target roles, salary expectations, locations, and remote preferences. Done in under two minutes.",
      iconColor: "#059669", iconBg: "#ecfdf5",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="3" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" /></svg>,
    },
    {
      n: "03", title: "Let AI do the work",
      desc: "Snaziffied finds matching jobs, tailors every application, submits it, and tracks everything — fully automatic.",
      iconColor: "#ea580c", iconBg: "#fff7ed",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>,
    },
  ];

  return (
    <section id="how-it-works" className="py-28 px-4" style={{ background: "#fff" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="reveal text-[11px] font-semibold uppercase tracking-[0.14em] mb-4" style={{ color: "var(--text-muted)" }}>How It Works</p>
          <h2 className="reveal reveal-delay-1 font-bold mb-4" style={{ fontSize: "clamp(2rem,4vw,3rem)", letterSpacing: "-0.035em" }}>
            Up and running in minutes
          </h2>
          <p className="reveal reveal-delay-2 text-[17px]" style={{ color: "var(--text-mid)", maxWidth: 400, margin: "0 auto" }}>
            No complex setup. Three steps and your AI job search is live.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16 relative">
          <div className="hidden md:block absolute" style={{ top: 36, left: "calc(33% + 28px)", right: "calc(33% + 28px)", height: 1, background: "linear-gradient(90deg,#bfdbfe,#a7f3d0)" }} />
          {steps.map((s, i) => (
            <div key={s.n} className={`reveal reveal-delay-${i * 2 + 1} flex flex-col items-center text-center gap-5`}>
              <div className="relative">
                <div className="w-[72px] h-[72px] rounded-2xl flex items-center justify-center"
                  style={{ background: s.iconBg, color: s.iconColor, border: `1px solid ${s.iconColor}20` }}>
                  {s.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-white text-[10px] font-bold"
                  style={{ background: s.iconColor }}>
                  {s.n}
                </div>
              </div>
              <div>
                <h3 className="font-bold mb-2 text-[16px]" style={{ color: "var(--text-dark)", letterSpacing: "-0.02em" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-mid)", lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats strip */}
        <div className="reveal reveal-delay-3 grid grid-cols-3 rounded-3xl overflow-hidden"
          style={{ border: "1px solid var(--border)", boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}>
          {[
            { n: "3×", label: "More interviews", color: "#2563eb", bg: "#f8faff" },
            { n: "10×", label: "Faster applying", color: "#0891b2", bg: "#f0fdff" },
            { n: "98%", label: "Submit success", color: "#059669", bg: "#f0fdf4" },
          ].map((s, i) => (
            <div key={s.label} className="py-8 px-4 text-center" style={{ background: s.bg, borderRight: i < 2 ? "1px solid var(--border)" : undefined }}>
              <div className="text-3xl font-black mb-1" style={{ color: s.color, letterSpacing: "-0.04em" }}>{s.n}</div>
              <div className="text-sm" style={{ color: "var(--text-mid)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── TESTIMONIALS ───────────────────────────────────────────── */
const reviews = [
  { q: "Snaziffied helped me land 3 interviews in my first week. The AI matching is insanely accurate — it found roles I wouldn't have discovered myself.", name: "Sarah Chen", role: "Frontend Engineer", co: "Google", init: "S", color: "#2563eb" },
  { q: "Went from 2 applications a day to 15+ with the same quality. The auto-apply feature is a genuine game changer. Got hired at Meta in 3 weeks.", name: "Marcus Johnson", role: "Full Stack Developer", co: "Meta", init: "M", color: "#0891b2" },
  { q: "The resume optimizer alone saved me hours every single week. My ATS score jumped from 45% to 89% overnight.", name: "Emily Rodriguez", role: "Product Designer", co: "Airbnb", init: "E", color: "#059669" },
  { q: "I was skeptical about AI cover letters but I got genuine compliments from three hiring managers on how personal they felt.", name: "Alex Kim", role: "Data Scientist", co: "Netflix", init: "A", color: "#ea580c" },
  { q: "The interview prep is deeply underrated. The AI knew exactly what Stripe would ask. I walked in fully prepared and got the offer.", name: "Jordan Lee", role: "Backend Engineer", co: "Stripe", init: "J", color: "#7c3aed" },
  { q: "Best job search tool I've used. It actually understands nuance — it reads me as a designer-turned-PM, not just a pile of keywords.", name: "Priya Patel", role: "Product Manager", co: "Uber", init: "P", color: "#0f766e" },
];

function Testimonials() {
  return (
    <section id="testimonials" className="py-28 px-4" style={{ background: "var(--bg)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="reveal text-[11px] font-semibold uppercase tracking-[0.14em] mb-4" style={{ color: "var(--text-muted)" }}>Reviews</p>
          <h2 className="reveal reveal-delay-1 font-bold mb-3" style={{ fontSize: "clamp(2rem,4vw,3rem)", letterSpacing: "-0.035em" }}>
            Real people. Real results.
          </h2>
          <div className="reveal reveal-delay-2 flex items-center justify-center gap-2 mt-2">
            <Stars />
            <span className="text-sm font-bold" style={{ color: "var(--text-dark)" }}>4.9</span>
            <span className="text-sm" style={{ color: "var(--text-muted)" }}>from 2,400+ verified reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((r, i) => (
            <div key={r.name} className={`reveal reveal-delay-${(i % 3) + 1} card p-7 flex flex-col`}>
              <div className="flex gap-0.5 mb-5"><Stars /></div>
              <p className="text-[15px] leading-relaxed flex-1 mb-6" style={{ color: "var(--text-mid)", lineHeight: 1.75 }}>
                &ldquo;{r.q}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-5" style={{ borderTop: "1px solid var(--border-light)" }}>
                <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm text-white flex-shrink-0"
                  style={{ background: r.color }}>{r.init}</div>
                <div>
                  <div className="text-sm font-semibold" style={{ color: "var(--text-dark)" }}>{r.name}</div>
                  <div className="text-xs" style={{ color: "var(--text-muted)" }}>{r.role} · {r.co}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PRICING ────────────────────────────────────────────────── */
const plans = [
  {
    name: "Free", desc: "Get started at no cost",
    price: { m: 0, a: 0 },
    features: ["5 AI job matches / day", "Basic resume analysis", "1 cover letter / week", "Application tracking board", "Email support"],
    cta: "Get Started Free", dark: false,
  },
  {
    name: "Pro", desc: "For serious job seekers",
    price: { m: 29, a: 20 },
    features: ["Unlimited job matches", "Advanced resume optimizer", "10 cover letters / week", "Auto-apply (50 / month)", "Interview preparation", "Priority support"],
    cta: "Start Pro Trial", dark: true, popular: true,
  },
  {
    name: "Premium", desc: "For power users",
    price: { m: 79, a: 55 },
    features: ["Everything in Pro", "Unlimited auto-apply", "Unlimited cover letters", "AI interview coaching", "Salary negotiation tips", "Dedicated account manager"],
    cta: "Go Premium", dark: false,
  },
];

function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-28 px-4" style={{ background: "#fff" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="reveal text-[11px] font-semibold uppercase tracking-[0.14em] mb-4" style={{ color: "var(--text-muted)" }}>Pricing</p>
          <h2 className="reveal reveal-delay-1 font-bold mb-3" style={{ fontSize: "clamp(2rem,4vw,3rem)", letterSpacing: "-0.035em" }}>
            Simple, honest pricing
          </h2>
          <p className="reveal reveal-delay-2 text-[17px] mb-8" style={{ color: "var(--text-mid)" }}>
            Start free. Upgrade when you need more.
          </p>

          {/* Toggle */}
          <div className="reveal reveal-delay-3 inline-flex items-center p-1 gap-1 rounded-full" style={{ background: "var(--bg)", border: "1px solid var(--border)" }}>
            {[["Monthly", false], ["Annual", true]].map(([label, val]) => (
              <button key={String(val)} onClick={() => setAnnual(val as boolean)}
                className="px-5 py-2 rounded-full text-sm font-semibold cursor-pointer transition-all flex items-center gap-2"
                style={{ background: annual === val ? "#0D0D14" : "transparent", color: annual === val ? "#fff" : "var(--text-muted)" }}>
                {label}
                {val && <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: annual ? "rgba(255,255,255,0.15)" : "#dcfce7", color: annual ? "#fff" : "#16a34a" }}>Save 30%</span>}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {plans.map((p, i) => (
            <div key={p.name}
              className={`reveal reveal-delay-${i + 1} flex flex-col p-8`}
              style={{
                background: p.dark ? "#0D0D14" : "#fff",
                border: p.dark ? "none" : "1px solid var(--border)",
                borderRadius: 24,
                transform: p.dark ? "scale(1.04)" : undefined,
                boxShadow: p.dark ? "0 24px 60px rgba(13,13,20,0.2)" : "0 2px 12px rgba(0,0,0,0.04)",
              }}>
              {p.popular && (
                <span className="text-[11px] font-bold px-3 py-1 rounded-full self-start mb-4"
                  style={{ background: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.75)" }}>
                  Most Popular
                </span>
              )}

              <div className="mb-6">
                <div className="text-sm font-semibold mb-1" style={{ color: p.dark ? "rgba(255,255,255,0.45)" : "var(--text-muted)" }}>{p.name}</div>
                <div className="flex items-end gap-1.5 mb-1">
                  <span className="text-[42px] font-black leading-none" style={{ color: p.dark ? "#fff" : "var(--text-dark)", letterSpacing: "-0.05em" }}>
                    ${annual ? p.price.a : p.price.m}
                  </span>
                  <span className="text-sm mb-2" style={{ color: p.dark ? "rgba(255,255,255,0.35)" : "var(--text-muted)" }}>
                    {annual && p.price.a > 0 ? "/mo, billed annually" : "/mo"}
                  </span>
                </div>
                <p className="text-sm" style={{ color: p.dark ? "rgba(255,255,255,0.45)" : "var(--text-muted)" }}>{p.desc}</p>
              </div>

              <div className="mb-6" style={{ height: 1, background: p.dark ? "rgba(255,255,255,0.08)" : "var(--border-light)" }} />

              <ul className="flex flex-col gap-3.5 mb-8 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <div className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0"
                      style={{ background: p.dark ? "rgba(255,255,255,0.1)" : "#f3f4f6" }}>
                      <Check light={p.dark} />
                    </div>
                    <span style={{ color: p.dark ? "rgba(255,255,255,0.75)" : "var(--text-mid)" }}>{f}</span>
                  </li>
                ))}
              </ul>

              {p.dark ? (
                <a href="#" className="text-[15px] font-bold py-3.5 rounded-2xl text-center no-underline transition-all cursor-pointer"
                  style={{ background: "#fff", color: "#0D0D14" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#f1f5f9")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#fff")}>
                  {p.cta}
                </a>
              ) : (
                <a href="#" className="btn-outline text-[15px] py-3.5 rounded-2xl justify-center no-underline">{p.cta}</a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ────────────────────────────────────────────────────── */
const faqs = [
  { q: "How does the AI job matching work?", a: "Snaziffied analyzes your resume, skills, and preferences then scans 1,000+ job sources in real time. Every match receives a 0–100 score based on required skills, location fit, salary range, and company culture signals." },
  { q: "Is my personal data secure?", a: "All data is encrypted with AES-256 at rest and in transit. We never sell or share your information with third parties. You can permanently delete your account and all associated data at any time." },
  { q: "Can I cancel my subscription anytime?", a: "Yes — one click, no penalties, no dark patterns. Your access continues until the end of your current billing period." },
  { q: "How accurate is the auto-apply feature?", a: "We achieve a 98% success rate on standard application forms. For applications requiring custom essays or unusual fields, Snaziffied prepares a pre-filled draft for your quick review before submitting." },
  { q: "What resume file formats are supported?", a: "PDF, DOCX, and TXT are all supported. Our parser handles multi-column layouts and fancy designs equally well. You can also paste your resume text directly if you prefer." },
  { q: "Do I need technical skills to use Snaziffied?", a: "Not at all. If you can upload a file and fill out a short form, you're good. The entire platform is designed to be intuitive and accessible for everyone." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-28 px-4" style={{ background: "var(--bg)" }}>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-14">
          <p className="reveal text-[11px] font-semibold uppercase tracking-[0.14em] mb-4" style={{ color: "var(--text-muted)" }}>FAQ</p>
          <h2 className="reveal reveal-delay-1 font-bold" style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", letterSpacing: "-0.035em" }}>
            Frequently asked
          </h2>
        </div>

        <div className="reveal reveal-delay-2 rounded-3xl overflow-hidden" style={{ background: "#fff", border: "1px solid var(--border)", boxShadow: "0 2px 20px rgba(0,0,0,0.04)" }}>
          {faqs.map((f, i) => (
            <div key={i}
              className="px-7 py-5 cursor-pointer select-none"
              style={{ borderBottom: i < faqs.length - 1 ? "1px solid var(--border-light)" : undefined }}
              onClick={() => setOpen(open === i ? null : i)}>
              <div className="flex items-center justify-between gap-4">
                <span className="font-semibold text-[15px]" style={{ color: "var(--text-dark)" }}>{f.q}</span>
                <svg style={{ transform: open === i ? "rotate(180deg)" : undefined, transition: "transform 0.3s", flexShrink: 0, color: "#9ca3af" }}
                  width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
              <div style={{ maxHeight: open === i ? 220 : 0, overflow: "hidden", transition: "max-height 0.4s cubic-bezier(0.16,1,0.3,1)" }}>
                <p className="pt-3 pb-1 text-sm leading-relaxed" style={{ color: "var(--text-mid)", lineHeight: 1.75 }}>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FINAL CTA ──────────────────────────────────────────────── */
function FinalCTA() {
  return (
    <section className="py-28 px-4" style={{ background: "#fff" }}>
      <div className="max-w-3xl mx-auto text-center">
        <p className="reveal text-[11px] font-semibold uppercase tracking-[0.14em] mb-6" style={{ color: "var(--text-muted)" }}>Get started today</p>
        <h2 className="reveal reveal-delay-1 font-black mb-5 leading-tight" style={{ fontSize: "clamp(2.4rem,5vw,3.8rem)", letterSpacing: "-0.04em", color: "var(--text-dark)" }}>
          Your next job is<br />closer than you think.
        </h2>
        <p className="reveal reveal-delay-2 text-[17px] mb-10" style={{ color: "var(--text-mid)", maxWidth: 400, margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
          Join 50,000+ job seekers who&apos;ve used Snaziffied to land their dream roles faster.
        </p>
        <div className="reveal reveal-delay-3 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#pricing" className="btn-dark text-base px-9 py-4">Start for Free</a>
          <a href="#features" className="btn-outline text-base px-9 py-4">See All Features</a>
        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER ─────────────────────────────────────────────────── */
function Footer() {
  const footerLinks = {
    Product: ["Features", "Pricing", "Integrations", "Changelog"],
    Company: ["About", "Blog", "Careers", "Contact"],
    Legal: ["Privacy", "Terms", "Security", "Cookies"],
  };

  return (
    <footer className="px-4 pt-16 pb-10" style={{ borderTop: "1px solid var(--border-light)", background: "var(--bg)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2 no-underline mb-4">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "#0D0D14" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <span className="font-bold text-base" style={{ color: "var(--text-dark)" }}>Snaziffied</span>
            </a>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-muted)", maxWidth: 230, lineHeight: 1.75 }}>
              Making job applications easy with the power of AI.
            </p>
            {/* Social */}
            <div className="flex gap-2">
              {[
                <svg key="tw" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>,
                <svg key="li" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>,
              ].map((icon, idx) => (
                <a key={idx} href="#" className="w-9 h-9 rounded-xl flex items-center justify-center transition-all cursor-pointer no-underline"
                  style={{ border: "1px solid var(--border)", color: "var(--text-muted)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#9ca3af"; (e.currentTarget as HTMLElement).style.color = "var(--text-dark)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"; }}>
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, items]) => (
            <div key={group}>
              <div className="text-[11px] font-semibold uppercase tracking-[0.14em] mb-5" style={{ color: "var(--text-muted)" }}>{group}</div>
              <ul className="flex flex-col gap-3">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm no-underline transition-colors" style={{ color: "var(--text-muted)" }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-dark)")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="divider mb-6" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          <span className="text-sm" style={{ color: "var(--text-muted)" }}>© 2024 Snaziffied. All rights reserved.</span>
          <span className="text-sm" style={{ color: "var(--text-muted)" }}>Making job applications easy, worldwide.</span>
        </div>
      </div>
    </footer>
  );
}

/* ─── PAGE ───────────────────────────────────────────────────── */
export default function Page() {
  useReveal();
  const [heroVisible, setHeroVisible] = useState(true);

  return (
    <main>
      <Navbar heroVisible={heroVisible} />
      <Hero onVisibilityChange={setHeroVisible} />
      <Logos />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}

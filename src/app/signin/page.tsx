"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPw, setShowPw] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!email || !password) { setError("Please fill in all fields."); return; }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push("/dashboard");
    }, 1200);
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#F8F7F4" }}>
      {/* Minimal nav */}
      <header className="h-16 flex items-center px-6" style={{ borderBottom: "1px solid #E5E7EB", background: "#fff" }}>
        <a href="/" className="flex items-center gap-2 no-underline">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "#0D0D14" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>
          <span className="font-bold text-base" style={{ color: "#0D0D14", letterSpacing: "-0.02em" }}>Snaziffied</span>
        </a>
      </header>

      {/* Card */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-[420px]">
          <div className="rounded-3xl p-10" style={{ background: "#fff", border: "1px solid #E5E7EB", boxShadow: "0 8px 40px rgba(0,0,0,0.06)" }}>
            <div className="mb-8">
              <h1 className="font-bold text-[26px] mb-1.5" style={{ color: "#0D0D14", letterSpacing: "-0.03em" }}>
                Welcome back
              </h1>
              <p className="text-sm" style={{ color: "#6B7280" }}>
                Sign in to continue your AI-powered job search.
              </p>
            </div>

            {error && (
              <div className="mb-5 px-4 py-3 rounded-xl text-sm font-medium" style={{ background: "#fef2f2", color: "#dc2626", border: "1px solid #fecaca" }}>
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: "#374151" }}>Email address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                  style={{
                    border: "1.5px solid #E5E7EB",
                    background: "#FAFAFA",
                    color: "#0D0D14",
                    fontSize: 15,
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#0D0D14")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "#E5E7EB")}
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-sm font-semibold" style={{ color: "#374151" }}>Password</label>
                  <a href="#" className="text-xs font-medium no-underline" style={{ color: "#0D0D14" }}>Forgot password?</a>
                </div>
                <div className="relative">
                  <input
                    type={showPw ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all pr-12"
                    style={{
                      border: "1.5px solid #E5E7EB",
                      background: "#FAFAFA",
                      color: "#0D0D14",
                      fontSize: 15,
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "#0D0D14")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "#E5E7EB")}
                  />
                  <button type="button" onClick={() => setShowPw(!showPw)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 cursor-pointer p-1"
                    style={{ color: "#9CA3AF" }}>
                    {showPw
                      ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" /><line x1="1" y1="1" x2="23" y2="23" /></svg>
                      : <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                    }
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-2xl text-white font-bold text-[15px] mt-2 cursor-pointer transition-all"
                style={{
                  background: loading ? "#6B7280" : "#0D0D14",
                  boxShadow: loading ? "none" : "0 4px 20px rgba(13,13,20,0.2)",
                }}>
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                    </svg>
                    Signing in…
                  </span>
                ) : "Sign In"}
              </button>
            </form>

            <div className="relative my-6">
              <div className="h-px" style={{ background: "#E5E7EB" }} />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-3 text-xs font-medium" style={{ background: "#fff", color: "#9CA3AF" }}>or continue with</span>
            </div>

            {/* Social buttons */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Google", icon: <svg width="16" height="16" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg> },
                { label: "LinkedIn", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="#0077B5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
              ].map((btn) => (
                <button key={btn.label} type="button"
                  className="flex items-center justify-center gap-2.5 py-3 rounded-xl text-sm font-semibold cursor-pointer transition-all"
                  style={{ border: "1.5px solid #E5E7EB", background: "#fff", color: "#374151" }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#9CA3AF")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#E5E7EB")}>
                  {btn.icon}
                  {btn.label}
                </button>
              ))}
            </div>

            <p className="text-center text-sm mt-6" style={{ color: "#6B7280" }}>
              Don&apos;t have an account?{" "}
              <a href="/signup" className="font-semibold no-underline" style={{ color: "#0D0D14" }}>Sign up free</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

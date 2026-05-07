import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: "Snaziffied – Making Job Applications Easy",
  description:
    "Snaziffied uses AI to match you with the right jobs, tailor every application, and land more interviews — faster.",
  keywords: ["job application", "AI", "resume", "career", "automation"],
  openGraph: {
    title: "Snaziffied – Making Job Applications Easy",
    description: "Apply smarter. Get hired faster.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}

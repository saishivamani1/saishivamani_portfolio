import type { Metadata } from "next";
import "./globals.css";
import MangaCursor from "./components/MangaCursor";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Sai Shivamani — Full Stack • DSA • AI Engineer",
  description: "Portfolio of Sai Shivamani — Full Stack Developer, C++ DSA Problem Solver & AI Engineer. Manga-themed developer portfolio.",
  keywords: ["Sai Shivamani", "Full Stack", "DSA", "AI", "C++", "React", "Python", "Portfolio"],
  authors: [{ name: "Sai Shivamani" }],
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: '48x48', type: 'image/png' },
    ],
  },
  openGraph: {
    title: "Sai Shivamani — Full Stack • DSA • AI Engineer",
    description: "Manga-themed developer portfolio showcasing Full Stack, DSA & AI engineering.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bangers&family=Noto+Sans+JP:wght@400;700;900&family=JetBrains+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon.png" />
      </head>
      <body className="bg-black text-white antialiased">
        <MangaCursor />
        {children}
        <Analytics />
      </body>
    </html>
  );
}

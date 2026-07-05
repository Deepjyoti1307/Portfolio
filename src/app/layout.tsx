import type { Metadata } from "next";
import { Orbitron, Share_Tech_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

const shareTechMono = Share_Tech_Mono({
  variable: "--font-share-tech-mono",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Deepjyoti Dey — Full-Stack Developer [Terminal Mode]",
  description:
    "Computer Science undergraduate with strong full-stack development skills in Python, JavaScript, and TypeScript. Experienced building scalable web applications, REST APIs, and cloud-integrated systems using React, Next.js, Flask, and MongoDB.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${shareTechMono.variable} ${jetbrainsMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-mono antialiased selection:bg-accent selection:text-black relative">
        
        {/* Global CRT Scanlines overlay for cyberpunk screen texturing */}
        <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden mix-blend-overlay opacity-30 scanline-overlay" />
        
        {/* Accessiblity Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-accent focus:text-black focus:px-4 focus:py-2 focus:font-black focus:border-2 focus:border-accent focus:outline-none focus:shadow-[0_0_15px_#00ff88]"
        >
          _SKIP_TO_CONTENT
        </a>

        <div id="app-wrapper" className="flex flex-col flex-1 relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}

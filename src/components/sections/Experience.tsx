"use client";

import React from "react";
import SectionLabel from "../ui/SectionLabel";
import { EXPERIENCE } from "@/lib/content";

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section label */}
        <SectionLabel number="03" title="Experience" />

        {/* Asymmetric 4:8 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          
          {/* Left Column: Diagnostics sidebar with dots texture (col-span-4) */}
          <div className="md:col-span-4 flex flex-col justify-between border border-border bg-card/60 p-6 md:p-8 swiss-dots select-none min-h-[200px] md:min-h-auto relative">
            {/* Top-right corner cut accent */}
            <div className="absolute top-0 right-0 w-4 h-4 bg-border/40 clip-path polygon(0 0, 100% 0, 100% 100%)" />
            
            <span className="font-heading text-accent-secondary font-black text-6xl md:text-8xl tracking-widest leading-none shadow-[0_0_15px_rgba(255,0,255,0.2)]">
              {EXPERIENCE.number}
            </span>
            <div className="border-t border-border pt-4 mt-8">
              <p className="font-label text-[9px] font-bold uppercase tracking-widest text-muted-foreground">
                SYS_RECORD_ID
              </p>
              <p className="font-mono text-xs md:text-sm font-bold uppercase tracking-widest text-foreground mt-1 bg-accent-secondary/15 px-2 py-0.5 border border-accent-secondary/20 inline-block">
                {EXPERIENCE.dates}
              </p>
            </div>
          </div>

          {/* Right Column: Console log job bullets (col-span-8) */}
          <div className="md:col-span-8 flex flex-col justify-start text-left bg-card/25 border border-border p-6 md:p-8">
            {/* Header Lockup */}
            <div className="border-b border-border pb-6 mb-6">
              <span className="font-label text-accent font-bold tracking-widest text-[10px] uppercase block mb-2">
                [ DATABASE_QUERY // INTERN_RECORD ]
              </span>
              <h3 className="font-heading font-black text-2xl md:text-3xl tracking-widest uppercase text-foreground leading-tight">
                {EXPERIENCE.title}
              </h3>
              <p className="font-heading text-lg md:text-xl font-bold uppercase text-accent mt-1 tracking-wider">
                @ {EXPERIENCE.company}
              </p>
            </div>

            {/* Bullet Points styled as logs */}
            <ul className="flex flex-col gap-6">
              {EXPERIENCE.bullets.map((bullet, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <span className="font-mono text-accent-secondary font-bold select-none shrink-0 mt-0.5">
                    &gt;
                  </span>
                  <p className="font-mono text-xs md:text-sm text-foreground/80 leading-relaxed">
                    {bullet}
                  </p>
                </li>
              ))}
              {/* Blinking cursor at the end of terminal entry */}
              <li className="flex items-center gap-1 select-none pt-2">
                <span className="font-mono text-accent font-bold">&gt;&gt; LOG_STREAM_END</span>
                <span className="terminal-cursor shadow-neon-sm" />
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}

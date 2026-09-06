"use client";

import React from "react";
import SectionLabel from "../ui/SectionLabel";
import { SKILL_GROUPS } from "@/lib/content";

export default function SkillsMarquee() {
  // Format skills into text blocks
  const skillsList = SKILL_GROUPS.flatMap((group) => [
    { isCategory: true, text: `[ ${group.category.replace("&", "//")} ]` },
    ...group.items.map((item) => ({ isCategory: false, text: item })),
  ]);

  return (
    <section id="skills" className="section-radar py-16 md:py-24 border-b border-border bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <SectionLabel number="02" title="Skills" />
      </div>

      {/* Static skill deck: every skill stays readable without needing to chase a ticker. */}
      <div className="w-full bg-card/70 border-y border-border py-6 select-none">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal-stagger flex flex-wrap items-center gap-x-5 gap-y-4">
            {skillsList.map((item, idx) => (
              <div
                key={idx}
                style={{ "--stagger-index": Math.min(idx, 12) } as React.CSSProperties}
                className="group flex items-center gap-6 shrink-0 transition-transform duration-300 hover:-translate-y-1"
              >
                {item.isCategory ? (
                  <span className="font-label text-accent-secondary font-black tracking-[0.16em] text-xs md:text-sm uppercase whitespace-nowrap">
                    {item.text}
                  </span>
                ) : (
                  <span className="bg-background text-accent border border-accent/40 px-4 py-1.5 text-xs md:text-sm font-mono font-medium uppercase tracking-wider whitespace-nowrap shadow-sm transition-colors duration-300 group-hover:bg-accent group-hover:text-background group-hover:shadow-neon-sm">
                    {item.text}
                  </span>
                )}
                {/* Visual Separator between marquee nodes */}
                <span className="text-muted-foreground/50 font-bold text-lg select-none">{"///"}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

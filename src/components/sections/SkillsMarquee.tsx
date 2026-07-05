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

  // Duplicate the list 3 times to ensure there is plenty of content to fill the track
  const duplicatedItems = [...skillsList, ...skillsList, ...skillsList];

  return (
    <section id="skills" className="py-16 md:py-24 border-b border-border bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <SectionLabel number="02" title="Skills" />
      </div>

      {/* Full-bleed Marquee Container */}
      <div className="w-full bg-card/45 border-y border-border py-6 overflow-hidden relative select-none">
        <div className="flex w-max">
          {/* Scroll Track */}
          <div className="flex items-center gap-6 animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:px-4">
            {duplicatedItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-6 shrink-0"
              >
                {item.isCategory ? (
                  <span className="font-label text-accent-secondary font-black tracking-[0.2em] text-xs md:text-sm uppercase whitespace-nowrap shadow-[0_0_8px_rgba(255,0,255,0.2)]">
                    {item.text}
                  </span>
                ) : (
                  <span className="bg-background text-accent border border-accent/25 px-4 py-1.5 text-xs md:text-sm font-mono uppercase tracking-wider whitespace-nowrap shadow-[0_0_6px_rgba(0,255,136,0.1)]">
                    {item.text}
                  </span>
                )}
                {/* Visual Separator between marquee nodes */}
                <span className="text-border font-bold text-lg select-none">{"///"}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Card from "../ui/Card";
import Button from "../ui/Button";
import SectionLabel from "../ui/SectionLabel";
import { FOCUS_AREAS } from "@/lib/content";

export default function FocusAreas() {
  // Asymmetric spans
  const columnSpans = [
    "lg:col-span-7 col-span-12",
    "lg:col-span-5 col-span-12",
    "lg:col-span-5 col-span-12",
    "lg:col-span-7 col-span-12",
  ];

  return (
    <section id="focus" className="py-16 md:py-24 border-b border-border bg-background relative overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute top-[20%] left-[-100px] w-[300px] h-[300px] bg-accent-tertiary/5 rounded-full blur-[100px] pointer-events-none select-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header grid with a diagonal technical panel graphic */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-8 md:mb-12">
          <div className="md:col-span-8">
            <SectionLabel number="03" title="Focus" className="!mb-0" />
          </div>
          <div className="hidden md:block md:col-span-4 h-12 border border-border bg-muted/20 relative select-none">
            <div className="absolute inset-0 swiss-diagonal opacity-40" />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 font-label text-[9px] text-accent/40 tracking-wider">
              HUD_MODULE_ID // 909-FD
            </div>
          </div>
        </div>

        {/* Asymmetric Holographic Dashboard panels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {FOCUS_AREAS.map((area, index) => (
            <div key={area.title} className={columnSpans[index]}>
              <Card
                variant="holographic"
                hoverEffect={false} // Holographic cards have a permanent glow visual signature
                className="h-full flex flex-col justify-between"
              >
                <div>
                  {/* Eyebrow panel record */}
                  <span className="font-label text-accent-tertiary font-bold tracking-widest text-[10px] uppercase mb-4 block shadow-[0_0_8px_rgba(0,212,255,0.15)]">
                    [ FOCUS_NODE // 0{index + 1} ]
                  </span>
                  
                  {/* Title */}
                  <h3 className="font-heading font-black text-xl md:text-2xl tracking-widest uppercase mb-4 text-foreground text-left">
                    {area.title}
                  </h3>

                  {/* Description */}
                  <p className="font-mono text-xs md:text-sm text-foreground/80 leading-relaxed mb-8 text-left">
                    &gt;&gt; {area.description}
                  </p>
                </div>

                {/* CTA Action */}
                <div className="flex justify-start">
                  <Button
                    variant="outline"
                    href={area.ctaLink}
                    className="hover:shadow-[0_0_10px_rgba(0,212,255,0.5)] hover:border-accent-tertiary hover:text-accent-tertiary transition-colors"
                  >
                    {area.ctaText.replace("Check", "Launch").replace("View", "Query").replace("Get in", "Initiate")}
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

"use client";

import React from "react";
import { ACTIVITIES } from "@/lib/content";

export default function Activities() {
  return (
    <section id="activities" className="py-12 md:py-16 border-b border-border bg-background select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Secondary quiet diagnostic header */}
        <div className="mb-8 border-b border-border pb-4">
          <span className="font-label text-accent-tertiary font-bold tracking-[0.2em] text-xs md:text-sm uppercase block">
            [ 04 / Leadership & Activities ]
          </span>
        </div>

        {/* Console database records list */}
        <div className="border-t border-border">
          {ACTIVITIES.map((activity, idx) => (
            <div
              key={activity.organization}
              className="flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-border gap-4 text-left group"
            >
              {/* Row Left: Index, Role, Organization */}
              <div className="flex gap-4 items-baseline">
                <span className="font-label text-accent font-bold text-sm tracking-widest">
                  0{idx + 1}.
                </span>
                <div>
                  <h4 className="font-heading font-black text-lg md:text-xl tracking-widest uppercase text-foreground group-hover:text-accent transition-colors duration-150">
                    {activity.role}
                  </h4>
                  <p className="font-mono text-xs uppercase text-muted-foreground/80 mt-1">
                    {activity.organization}
                  </p>
                </div>
              </div>

              {/* Row Right: Dates Badge */}
              <div className="flex items-center">
                <span className="font-label text-xs font-bold uppercase tracking-widest text-accent border border-accent/20 bg-accent/5 px-4 py-1 hover:shadow-neon-sm hover:border-accent transition-all duration-150">
                  {activity.dates}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

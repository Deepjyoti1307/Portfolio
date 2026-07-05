"use client";

import React from "react";
import Card from "../ui/Card";
import SectionLabel from "../ui/SectionLabel";
import { PROJECTS } from "@/lib/content";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section label with address header mapping */}
        <SectionLabel number="01" title="Projects" />

        {/* 3-column Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <Card
              key={project.number}
              variant="default"
              hoverEffect={true}
              // Card 2 hovers to hot magenta, others to neon green for cyberpunk contrast
              accentHover={idx === 1}
              href={project.url}
              className="flex flex-col justify-between h-full group"
            >
              <div>
                {/* HUD Card Header: index & dates */}
                <div className="flex justify-between items-center mb-6 border-b border-border/40 pb-3 select-none">
                  <span className="font-label text-accent font-bold text-xs tracking-widest group-hover:text-background">
                    [ P_RECORDS // 0{project.number} ]
                  </span>
                  <span className="font-label text-[10px] font-bold text-muted-foreground/60 group-hover:text-background/60 tracking-wider">
                    {project.dates}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading font-black text-xl md:text-2xl tracking-widest uppercase mb-4 text-foreground group-hover:text-background">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="font-mono text-xs md:text-sm text-foreground/80 leading-relaxed mb-6 group-hover:text-background/90 text-left">
                  {project.description}
                </p>
              </div>

              {/* Bottom: tech chips and console actions */}
              <div>
                {/* Tech chips list */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-label text-[9px] font-bold uppercase tracking-widest px-2.5 py-0.5 border border-border bg-muted/20 text-foreground group-hover:border-background group-hover:text-background select-none"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Terminal access trigger */}
                <div className="flex justify-between items-center select-none pt-4 border-t border-border/20">
                  <span className="font-label text-[9px] text-muted-foreground/50 group-hover:text-background/50 tracking-wider">
                    EXECUTE_LINK_CMD
                  </span>
                  <div className="inline-flex items-center justify-center border border-border h-9 w-9 bg-muted/20 text-accent group-hover:border-background group-hover:text-background transition-colors duration-150 ease-linear">
                    <ExternalLink size={14} strokeWidth={1.5} className="group-hover:stroke-background" />
                  </div>
                </div>
              </div>

            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}

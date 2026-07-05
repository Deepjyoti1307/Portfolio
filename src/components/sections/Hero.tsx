"use client";

import React, { useState } from "react";
import Button from "../ui/Button";
import { PERSONAL_INFO } from "@/lib/content";

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="hero"
      className="relative cyber-grid border-b border-border py-16 md:py-24 lg:py-32 overflow-hidden bg-background"
    >
      {/* Background neon radial meshes */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[120px] pointer-events-none select-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent-secondary/5 rounded-full blur-[120px] pointer-events-none select-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Asymmetric 7:5 split */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Typographic terminal stream (col-span-7) */}
          <div className="md:col-span-7 flex flex-col items-start text-left">
            <span className="font-label text-accent font-bold tracking-[0.2em] text-xs md:text-sm uppercase mb-4 shadow-neon-sm bg-accent/10 px-3 py-1 border border-accent/25">
              [ SYSTEM_STATUS // {PERSONAL_INFO.role.replace(" ", "_").toUpperCase()} ]
            </span>
            
            {/* Chromatic aberration animated heading */}
            <h1 className="font-heading text-foreground font-black text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[8rem] leading-none tracking-widest uppercase mb-6 select-none cyber-glitch-text">
              Developer
            </h1>

            <div className="border-l border-accent-secondary pl-4 md:pl-6 mb-8 max-w-2xl bg-accent-secondary/5 py-3 pr-4">
              <p className="font-heading font-black text-xl md:text-2xl uppercase tracking-wider text-accent-secondary">
                {PERSONAL_INFO.name}
              </p>
              <p className="font-mono text-xs md:text-sm text-foreground/80 mt-1 uppercase tracking-wider">
                {PERSONAL_INFO.education.degree} <br /> 
                <span className="text-muted-foreground">@ {PERSONAL_INFO.education.institution} ({PERSONAL_INFO.education.dates})</span> · <span className="text-accent-tertiary">{PERSONAL_INFO.education.gpa}</span>
              </p>
            </div>

            <p className="font-mono text-sm md:text-base text-foreground/80 max-w-prose leading-relaxed mb-8">
              &gt; {PERSONAL_INFO.summary}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button variant="glitch" href="#projects" className="w-full sm:w-auto">
                _LAUNCH_PROJECTS
              </Button>
              <Button variant="secondary" href="/resume.pdf" className="w-full sm:w-auto">
                _GET_RESUME.EXE
              </Button>
            </div>
          </div>

          {/* Right Column: HUD Diagnostic Grid Node (col-span-5) */}
          <div className="md:col-span-5 flex justify-center items-center">
            
            <div className="relative w-full max-w-[340px] aspect-[4/5] bg-card border border-border shadow-neon-secondary select-none overflow-hidden group">
              
              {/* Absolutes for futuristic corner trims (floated on top of image with z-20) */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-accent-secondary z-20" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-accent-secondary z-20" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-accent-secondary z-20" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-accent-secondary z-20" />

              {/* Sub-HUD technical details overlay (floated on top with z-20) */}
              <div className="absolute top-2 right-4 font-label text-[9px] text-accent/80 bg-background/70 border border-border/40 px-2 py-0.5 tracking-wider z-20 backdrop-blur-sm">
                SYS_LOC: 22.5726° N, 88.3639° E
              </div>

              <div className="relative w-full h-full bg-background overflow-hidden flex flex-col items-center justify-center">
                {!imageError ? (
                  /* Portrait Image node showing full natural color with a smooth hover zoom */
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src="/profile.jpg"
                    alt="Deepjyoti Dey"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  /* Fallback HUD graphics design (Tech Radar display) */
                  <div className="w-full h-full relative flex flex-col items-center justify-center p-6 text-center cyber-grid-cyan">
                    <div className="absolute top-4 left-4 border border-accent bg-accent/10 text-accent text-[9px] font-label uppercase px-2 py-0.5 shadow-neon-sm">
                      DND // RADAR_ACTIVE
                    </div>
                    
                    {/* Pulsing Concentric Radar circles */}
                    <div className="relative w-36 h-36 border border-accent/20 rounded-full flex items-center justify-center mb-6">
                      <div className="w-28 h-28 border border-accent/35 rounded-full flex items-center justify-center animate-pulse-slow">
                        <div className="w-20 h-20 border border-accent/50 rounded-full flex items-center justify-center relative">
                          <div className="absolute top-0 w-1.5 h-1.5 bg-accent-secondary rounded-full shadow-[0_0_8px_#00e5ff]" />
                          <div className="w-10 h-10 border border-accent-secondary/50 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-accent rounded-full animate-ping shadow-neon-sm" />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="font-label text-[10px] uppercase tracking-[0.2em] text-accent-secondary max-w-[220px]">
                      _DIAGNOSTICS: PHOTO_FEED_MISSING
                    </p>
                    <p className="font-mono text-[9px] text-muted-foreground mt-2 max-w-[200px]">
                      Insert profile.jpg inside public/ to stream photo.
                    </p>
                  </div>
                )}
              </div>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
}

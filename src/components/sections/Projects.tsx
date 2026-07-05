"use client";

import React, { useRef, useState } from "react";
import SectionLabel from "../ui/SectionLabel";
import { PROJECTS } from "@/lib/content";
import { ExternalLink } from "lucide-react";

const CARD_ACCENTS = [
  {
    border: "rgba(178,224,214,0.6)",
    glow: "rgba(178,224,214,0.25)",
    glowHard: "rgba(178,224,214,0.6)",
    chipBg: "rgba(178,224,214,0.12)",
    chipText: "#B2E0D6",
    chipBorder: "rgba(178,224,214,0.35)",
    scanline: "rgba(178,224,214,0.04)",
    label: "#B2E0D6",
    corner: "#B2E0D6",
  },
  {
    border: "rgba(0,229,255,0.6)",
    glow: "rgba(0,229,255,0.2)",
    glowHard: "rgba(0,229,255,0.6)",
    chipBg: "rgba(0,229,255,0.1)",
    chipText: "#00e5ff",
    chipBorder: "rgba(0,229,255,0.35)",
    scanline: "rgba(0,229,255,0.04)",
    label: "#00e5ff",
    corner: "#00e5ff",
  },
  {
    border: "rgba(178,224,214,0.5)",
    glow: "rgba(178,224,214,0.15)",
    glowHard: "rgba(0,229,255,0.55)",
    chipBg: "rgba(0,229,255,0.08)",
    chipText: "#00e5ff",
    chipBorder: "rgba(0,229,255,0.3)",
    scanline: "rgba(178,224,214,0.035)",
    label: "#B2E0D6",
    corner: "#00e5ff",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 border-b border-border bg-background relative overflow-hidden">
      <div
        className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none select-none"
        style={{ background: "radial-gradient(circle, rgba(178,224,214,0.04) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none select-none"
        style={{ background: "radial-gradient(circle, rgba(0,229,255,0.04) 0%, transparent 70%)" }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionLabel number="01" title="Projects" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {PROJECTS.map((project, idx) => (
            <ProjectCard
              key={project.number}
              project={project}
              accent={CARD_ACCENTS[idx % CARD_ACCENTS.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  accent,
}: {
  project: (typeof PROJECTS)[0];
  accent: (typeof CARD_ACCENTS)[0];
}) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [shimmerPos, setShimmerPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    setTilt({ x: ((y - cy) / cy) * -5, y: ((x - cx) / cx) * 5 });
    setShimmerPos({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  return (
    <a
      ref={cardRef}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setTilt({ x: 0, y: 0 });
        setShimmerPos({ x: 50, y: 50 });
      }}
      style={{
        display: "block",
        perspective: "1000px",
        textDecoration: "none",
        color: "inherit",
      }}
      className="relative"
    >
      {/* 3-D tilting shell */}
      <div
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${
            isHovered ? "translateZ(6px) scale(1.012)" : "translateZ(0px) scale(1)"
          }`,
          transformStyle: "preserve-3d",
          transition: isHovered
            ? "transform 0.1s ease-out"
            : "transform 0.45s cubic-bezier(0.23,1,0.32,1)",
          boxShadow: isHovered
            ? `0 0 0 1px ${accent.border}, 0 20px 60px ${accent.glow}, 0 0 80px ${accent.glow}`
            : `0 0 0 1px rgba(72,92,105,0.8), 0 4px 20px rgba(0,0,0,0.4)`,
          background: "#1e2a31",
          position: "relative",
          overflow: "hidden",
        }}
        className="rounded-none flex flex-col h-full"
      >
        {/* — decorative layers (pointer-events: none so they never block clicks) — */}

        {/* Holographic shimmer */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.3s ease",
            background: `radial-gradient(circle at ${shimmerPos.x}% ${shimmerPos.y}%, rgba(178,224,214,0.08) 0%, transparent 50%)`,
            pointerEvents: "none",
          }}
        />

        {/* CRT scanlines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, ${accent.scanline} 2px, ${accent.scanline} 4px)`,
            pointerEvents: "none",
          }}
        />

        {/* Top glow border */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: isHovered
              ? `linear-gradient(90deg, transparent, ${accent.glowHard}, transparent)`
              : `linear-gradient(90deg, transparent, ${accent.border}, transparent)`,
            transition: "all 0.3s ease",
            pointerEvents: "none",
          }}
        />

        {/* Left glow border */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            width: "2px",
            background: isHovered
              ? `linear-gradient(180deg, ${accent.glowHard}, transparent 70%)`
              : `linear-gradient(180deg, ${accent.border}, transparent 70%)`,
            transition: "all 0.3s ease",
            pointerEvents: "none",
          }}
        />

        {/* Corner brackets */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 20,
            height: 20,
            borderTop: `2px solid ${accent.corner}`,
            borderRight: `2px solid ${accent.corner}`,
            opacity: isHovered ? 1 : 0.5,
            transition: "opacity 0.3s ease",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: 20,
            height: 20,
            borderBottom: `2px solid ${accent.corner}`,
            borderLeft: `2px solid ${accent.corner}`,
            opacity: isHovered ? 1 : 0.5,
            transition: "opacity 0.3s ease",
            pointerEvents: "none",
          }}
        />

        {/* — actual card content — */}
        <div className="flex flex-col h-full p-6 relative">
          {/* Header row */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <span
                style={{
                  color: accent.label,
                  fontSize: "10px",
                  fontFamily: "var(--font-share-tech-mono)",
                  letterSpacing: "0.2em",
                }}
                className="uppercase block"
              >
                [ P_RECORDS // {project.number} ]
              </span>
              <span className="text-muted-foreground font-mono text-[9px] mt-0.5 block">
                {project.dates}
              </span>
            </div>

            {/* Status dot */}
            <div className="flex items-center gap-1.5 mt-0.5">
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  backgroundColor: accent.corner,
                  boxShadow: `0 0 6px ${accent.corner}`,
                  animation: "pulse 2s ease-in-out infinite",
                }}
              />
              <span className="font-mono text-[8px] text-muted-foreground uppercase tracking-wider">
                LIVE
              </span>
            </div>
          </div>

          {/* Title */}
          <h3
            style={{
              fontFamily: "var(--font-orbitron)",
              textShadow: isHovered
                ? `2px 2px 0px ${accent.glow}, 0 0 20px ${accent.glow}`
                : "none",
              transition: "text-shadow 0.3s ease",
            }}
            className="text-foreground font-black text-xl uppercase tracking-widest mb-3 leading-tight"
          >
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground font-mono text-xs leading-relaxed mb-5 flex-1">
            {project.description}
          </p>

          {/* Tech chips */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                style={{
                  backgroundColor: accent.chipBg,
                  color: accent.chipText,
                  border: `1px solid ${accent.chipBorder}`,
                  fontSize: "9px",
                  fontFamily: "var(--font-share-tech-mono)",
                  letterSpacing: "0.1em",
                  padding: "2px 8px",
                }}
                className="uppercase"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div
            style={{ borderTop: "1px solid rgba(72,92,105,0.5)" }}
            className="pt-3 flex items-center justify-between"
          >
            <span className="font-mono text-[9px] text-muted-foreground uppercase tracking-wider">
              &gt; DEPLOY_LINK_SYS
            </span>
            <div
              style={{
                color: isHovered ? accent.chipText : "var(--color-muted-foreground)",
                border: `1px solid ${
                  isHovered ? accent.border : "rgba(72,92,105,0.5)"
                }`,
                boxShadow: isHovered ? `0 0 10px ${accent.glow}` : "none",
                transition: "all 0.3s ease",
                width: 32,
                height: 32,
              }}
              className="flex items-center justify-center"
            >
              <ExternalLink size={13} />
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

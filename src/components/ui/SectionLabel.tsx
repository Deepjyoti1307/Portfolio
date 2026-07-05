import React from "react";

interface SectionLabelProps {
  number: string;
  title: string;
  variant?: "horizontal" | "vertical";
  className?: string;
}

export default function SectionLabel({
  number,
  title,
  variant = "horizontal",
  className = "",
}: SectionLabelProps) {
  
  // Format localized mock Hex codes for HUD feel (e.g. 01 -> 0x8F, 02 -> 0x9D, etc.)
  const hexCodes: Record<string, string> = {
    "01": "0x4F",
    "02": "0x5E",
    "03": "0x6A",
    "04": "0x7B",
    "05": "0x8C",
    "06": "0x9D",
  };

  const currentHex = hexCodes[number] || "0xAA";

  if (variant === "vertical") {
    return (
      <div
        className={`flex flex-col items-start gap-4 select-none border-l border-accent pl-4 py-2 text-left ${className}`}
      >
        <span className="font-label text-accent font-bold tracking-widest text-xs uppercase shadow-neon-sm">
          [ INDEX // {number} ]
        </span>
        <h2 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl tracking-widest uppercase text-foreground">
          {title}
        </h2>
        <span className="font-label text-[9px] text-muted-foreground/40 tracking-widest uppercase">
          HEX_ADDR // {currentHex}
        </span>
      </div>
    );
  }

  return (
    <div
      className={`border-b border-border pb-4 mb-8 md:mb-12 flex justify-between items-center select-none ${className}`}
    >
      {/* Title Lockup */}
      <div className="flex items-center gap-3">
        <span className="font-label text-accent font-bold tracking-widest text-base md:text-lg uppercase">
          [{number}]
        </span>
        <h2 className="font-heading font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-widest uppercase text-foreground">
          {"// "}{title}
        </h2>
      </div>

      {/* Technical HUD elements (Hidden on mobile) */}
      <div className="hidden md:flex items-center gap-6 font-label text-[10px] text-muted-foreground/60 tracking-wider">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse-slow shadow-neon-sm" />
          <span>SYS_STATUS // ONLINE</span>
        </div>
        <span>ADDR_LOC // {currentHex}</span>
      </div>
    </div>
  );
}

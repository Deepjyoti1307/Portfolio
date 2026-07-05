import React from "react";
import Link from "next/link";

interface CardProps {
  children: React.ReactNode;
  variant?: "default" | "terminal" | "holographic";
  hoverEffect?: boolean;
  accentHover?: boolean; // If true, hovers to magenta, else green
  className?: string;
  href?: string;
  onClick?: () => void;
}

export default function Card({
  children,
  variant = "default",
  hoverEffect = true,
  accentHover = false,
  className = "",
  href,
  onClick,
}: CardProps) {
  
  // Transition class for smooth color and hover states
  const transitionClass = "transition-all duration-300 ease-out";

  // Hover state styles
  const hoverStyles = hoverEffect
    ? accentHover
      ? "group-hover:bg-accent-secondary group-hover:shadow-neon-secondary"
      : "group-hover:bg-accent group-hover:shadow-neon-lg"
    : "";

  const renderCardContent = () => {
    if (variant === "holographic") {
      // Holographic card uses glassmorphic blur and absolute corner indicators
      return (
        <div
          className={`relative bg-muted/20 border border-accent/20 shadow-neon backdrop-blur-md p-6 md:p-8 text-foreground select-text ${className}`}
        >
          {/* Corner brackets */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-accent select-none" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-accent select-none" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-accent select-none" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-accent select-none" />
          
          <div className="relative z-10 w-full h-full">
            {children}
          </div>
        </div>
      );
    }

    if (variant === "terminal") {
      // Terminal card uses a simulated window prompt frame
      return (
        <div className={`cyber-clip-md bg-border p-[1px] group w-full ${className}`}>
          <div className="cyber-clip-md-inner bg-background text-foreground h-full w-full pt-12 pb-6 px-6 md:pb-8 md:px-8 relative select-text">
            
            {/* Simulation console status dots */}
            <div className="absolute top-0 left-0 right-0 h-8 border-b border-border bg-muted/40 flex items-center px-4 gap-1.5 select-none">
              <div className="w-2.5 h-2.5 rounded-full bg-destructive opacity-80" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 opacity-80" />
              <div className="w-2.5 h-2.5 rounded-full bg-accent opacity-80" />
              <span className="text-[9px] uppercase font-bold text-muted-foreground tracking-widest ml-2 font-label">
                Session // Terminal
              </span>
            </div>

            <div className="w-full h-full">
              {children}
            </div>

          </div>
        </div>
      );
    }

    // Default chamfered corner-cut card using double-nested clip pathing
    return (
      <div className={`cyber-clip-md bg-border p-[1px] group w-full ${hoverStyles} ${transitionClass} ${className}`}>
        <div className="cyber-clip-md-inner bg-card text-foreground h-full w-full p-6 md:p-8 select-text">
          <div className="w-full h-full">
            {children}
          </div>
        </div>
      </div>
    );
  };

  const focusClasses = "outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";
  const content = renderCardContent();

  if (href) {
    if (href.startsWith("http") || href.startsWith("mailto:")) {
      return (
        <a
          href={href}
          className={`block w-full cursor-pointer ${focusClasses}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={`block w-full cursor-pointer ${focusClasses}`}>
        {content}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={`block w-full cursor-pointer text-left bg-transparent border-0 p-0 ${focusClasses}`}
        type="button"
      >
        {content}
      </button>
    );
  }

  return content;
}

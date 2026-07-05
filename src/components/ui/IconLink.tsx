import React from "react";
import { LucideIcon } from "lucide-react";

interface IconLinkProps {
  icon: LucideIcon;
  href: string;
  ariaLabel: string;
  className?: string;
  size?: number;
  variant?: "primary" | "secondary";
}

export default function IconLink({
  icon: Icon,
  href,
  ariaLabel,
  className = "",
  size = 20,
  variant = "primary",
}: IconLinkProps) {
  const isPrimary = variant === "primary";
  
  // Neon hover states
  const borderStyles = isPrimary
    ? "hover:border-accent hover:text-accent hover:shadow-[0_0_10px_rgba(178,224,214,0.5)]"
    : "hover:border-accent-secondary hover:text-accent-secondary hover:shadow-[0_0_10px_rgba(0,229,255,0.5)]";

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
      className={`inline-flex items-center justify-center border border-border bg-card/65 text-foreground/80 h-10 w-10 md:h-12 md:w-12 transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background ${borderStyles} ${className}`}
    >
      <Icon
        size={size}
        strokeWidth={1.5}
        className="transition-transform duration-300 group-hover:scale-115 filter hover:drop-shadow-[0_0_4px_currentColor]"
      />
    </a>
  );
}

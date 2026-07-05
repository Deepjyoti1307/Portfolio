import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "glitch" | "accent";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center font-label uppercase tracking-widest text-xs font-bold transition-all duration-300 ease-out select-none outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-40 disabled:pointer-events-none cursor-pointer glitch-btn";

  const flatVariants = {
    outline:
      "border border-border bg-transparent text-foreground hover:border-accent hover:text-accent hover:shadow-neon-sm h-12 px-6",
    ghost:
      "bg-transparent text-muted-foreground hover:bg-accent/10 hover:text-accent h-12 px-6",
    glitch:
      "bg-accent text-black font-black cyber-clip-sm border-0 hover:brightness-110 h-12 px-6 shadow-neon hover:shadow-neon-lg active:scale-95",
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    if (onClick) {
      onClick();
    }
  };

  // Get the text content for data-text attribute (used by glitch CSS pseudo-elements)
  const textContent = typeof children === "string" ? children : undefined;

  const renderChamferedButton = () => {
    const isPrimary = variant === "primary" || variant === "accent";
    const outerBg = isPrimary
      ? "bg-accent hover:shadow-neon"
      : "bg-accent-secondary hover:shadow-neon-secondary";

    const textColors = isPrimary
      ? "text-accent group-hover:text-background group-hover:bg-accent"
      : "text-accent-secondary group-hover:text-background group-hover:bg-accent-secondary";

    const content = (
      <div className={`cyber-clip-sm ${outerBg} p-[2px] w-full h-full transition-all duration-300 ease-out`}>
        <div
          className={`cyber-clip-sm-inner bg-background/90 px-6 h-[44px] flex items-center justify-center font-bold tracking-widest uppercase transition-colors duration-300 ease-out ${textColors}`}
        >
          {children}
        </div>
        {/* Glitch scan line */}
        <span className="glitch-scan" aria-hidden="true" />
      </div>
    );

    if (href) {
      if (href.startsWith("http") || href.endsWith(".pdf") || href.startsWith("mailto:")) {
        return (
          <a
            href={href}
            onClick={handleClick}
            data-text={textContent}
            className={`${baseStyles} group w-full sm:w-auto h-12 ${className}`}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
          >
            {content}
          </a>
        );
      }
      return (
        <Link
          href={href}
          onClick={handleClick}
          data-text={textContent}
          className={`${baseStyles} group w-full sm:w-auto h-12 ${className}`}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        type={type}
        onClick={handleClick}
        disabled={disabled}
        data-text={textContent}
        className={`${baseStyles} group w-full sm:w-auto h-12 ${className}`}
      >
        {content}
      </button>
    );
  };

  if (variant === "primary" || variant === "secondary" || variant === "accent") {
    return renderChamferedButton();
  }

  const combinedStyles = `${baseStyles} ${flatVariants[variant]} ${className}`;

  if (href) {
    if (href.startsWith("http") || href.endsWith(".pdf") || href.startsWith("mailto:")) {
      return (
        <a
          href={href}
          onClick={handleClick}
          data-text={textContent}
          className={combinedStyles}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
        >
          {children}
          <span className="glitch-scan" aria-hidden="true" />
        </a>
      );
    }
    return (
      <Link href={href} onClick={handleClick} data-text={textContent} className={combinedStyles}>
        {children}
        <span className="glitch-scan" aria-hidden="true" />
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      data-text={textContent}
      className={combinedStyles}
    >
      {children}
      <span className="glitch-scan" aria-hidden="true" />
    </button>
  );
}

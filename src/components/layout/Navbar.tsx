"use client";

import React, { useState } from "react";
import Button from "../ui/Button";
import { Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Resume", href: "/resume.pdf" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-md select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          
          {/* Logo Mark "DD" - Cyberpunk styled terminal node */}
          <a
            href="#"
            className="flex items-center justify-center border border-accent bg-card font-heading font-black text-xl md:text-2xl tracking-tighter text-accent hover:bg-accent hover:text-black hover:shadow-neon transition-all duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background h-10 w-10 md:h-12 md:w-12"
            aria-label="Terminal Root - Deepjyoti Dey"
          >
            DD
          </a>

          {/* Desktop Terminal-prompt Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background group"
                target={item.href.endsWith(".pdf") ? "_blank" : undefined}
                rel={item.href.endsWith(".pdf") ? "noopener noreferrer" : undefined}
              >
                <span className="flex items-center font-label font-bold text-sm tracking-widest uppercase">
                  {/* Flashing prompt indicator */}
                  <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-100 mr-1.5">
                    &gt;
                  </span>
                  <span className="text-foreground group-hover:text-accent group-hover:shadow-[0_0_8px_rgba(0,255,136,0.3)] transition-all duration-150">
                    {item.label}
                  </span>
                </span>
              </a>
            ))}
          </nav>

          {/* Desktop commands CTA */}
          <div className="hidden md:block">
            <Button variant="primary" href="#contact">
              _CONNECT_SYS
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 border border-border h-11 w-11 text-foreground/80 hover:text-accent hover:border-accent hover:shadow-neon-sm bg-card transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-expanded={isOpen}
              aria-label="Toggle command deck"
            >
              {isOpen ? <X size={20} className="stroke-[2]" /> : <Menu size={20} className="stroke-[2]" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile command panel drawer */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-lg">
          <div className="flex flex-col px-4 py-6 gap-6">
            <nav className="flex flex-col gap-3">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="font-label text-xl font-bold uppercase tracking-widest py-3 border-b border-border/20 text-foreground hover:text-accent flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  target={item.href.endsWith(".pdf") ? "_blank" : undefined}
                  rel={item.href.endsWith(".pdf") ? "noopener noreferrer" : undefined}
                >
                  <span className="text-accent mr-3 font-mono">&gt;</span>
                  {item.label}
                </a>
              ))}
            </nav>
            <Button
              variant="primary"
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full h-14 text-base font-black"
            >
              _CONNECT_SYS
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

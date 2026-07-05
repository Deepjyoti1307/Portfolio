"use client";

import React from "react";
import Button from "../ui/Button";
import IconLink from "../ui/IconLink";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { SOCIALS, PERSONAL_INFO } from "@/lib/content";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-background select-none">
      
      {/* Contact Section Block */}
      <section id="contact" className="py-16 md:py-24 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start text-left">
            
            {/* Left Column (span-5) */}
            <div className="lg:col-span-5">
              <span className="font-label text-accent font-bold tracking-widest text-xs uppercase block mb-2 shadow-neon-sm">
                [ 05 / Terminal_Connect ]
              </span>
              <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl tracking-widest uppercase leading-none text-foreground">
                Get in<br />Touch.
              </h2>
              <p className="font-mono text-xs md:text-sm text-muted-foreground/75 uppercase tracking-wider mt-4">
                &gt; Systems online. Listening for incoming node transmissions.
              </p>
            </div>

            {/* Right Column (span-7) */}
            <div className="lg:col-span-7 flex flex-col items-start gap-6 w-full">
              
              <div className="border-l border-accent pl-4 md:pl-6 py-2 bg-accent/5 w-full">
                <span className="font-label text-[9px] font-bold uppercase tracking-widest text-accent shadow-neon-sm">
                  PORT // EMAIL_STREAM
                </span>
                <a
                  href={`mailto:${SOCIALS.email}`}
                  className="block font-heading text-xl sm:text-2xl md:text-3xl font-black uppercase text-foreground hover:text-accent hover:shadow-[0_0_10px_rgba(0,255,136,0.3)] transition-all duration-150 break-all"
                >
                  {SOCIALS.email}
                </a>
              </div>

              <div className="border-l border-accent-secondary pl-4 md:pl-6 py-2 bg-accent-secondary/5 w-full">
                <span className="font-label text-[9px] font-bold uppercase tracking-widest text-accent-secondary shadow-neon-secondary">
                  PORT // MOBILE_VOICE
                </span>
                <p className="font-heading text-xl sm:text-2xl md:text-3xl font-black uppercase text-foreground">
                  {SOCIALS.phone}
                </p>
              </div>

              <div className="mt-4">
                <Button variant="glitch" href={`mailto:${SOCIALS.email}`}>
                  _ESTABLISH_LINK
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer / Brand links */}
      <section className="py-12 md:py-16 bg-card border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 text-left">
            
            {/* Social Accounts */}
            <div>
              <h3 className="font-heading font-black text-2xl md:text-3xl tracking-widest uppercase mb-6 text-foreground">
                Social Deck
              </h3>
              <div className="flex gap-4">
                <IconLink
                  icon={Linkedin}
                  href={SOCIALS.linkedin}
                  ariaLabel="LinkedIn Node"
                  variant="secondary" // Pink hover glow
                />
                <IconLink
                  icon={Github}
                  href={SOCIALS.github}
                  ariaLabel="GitHub Repository Node"
                  variant="primary" // Green hover glow
                />
                <IconLink
                  icon={Mail}
                  href={`mailto:${SOCIALS.email}`}
                  ariaLabel="Direct Mail Port"
                  variant="primary"
                />
              </div>
            </div>

            {/* Copyright & Core Commands */}
            <div className="flex flex-col items-start md:items-end gap-6 select-none">
              <button
                onClick={handleScrollToTop}
                type="button"
                className="inline-flex items-center justify-center border border-accent bg-background text-accent h-10 w-10 md:h-12 md:w-12 hover:bg-accent hover:text-black hover:shadow-neon transition-all duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label="Return scroll to origin node"
              >
                <ArrowUp size={18} strokeWidth={1.5} />
              </button>
              
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60 text-left md:text-right">
                <p>© {currentYear} {PERSONAL_INFO.name}.</p>
                <p className="mt-1">PORTFOLIO_CORE_v2.0 // DEPLOYED // STATIC_EXPORT</p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </footer>
  );
}

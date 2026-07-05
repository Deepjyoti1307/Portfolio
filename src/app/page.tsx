import React from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import SkillsMarquee from "@/components/sections/SkillsMarquee";
import Experience from "@/components/sections/Experience";
import Activities from "@/components/sections/Activities";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      {/* Sticky Top Header Navigation */}
      <Navbar />

      {/* Main semantic scroll content container */}
      <main id="main-content" className="flex-1 flex flex-col">
        {/* Hero Section with asymmetrical design */}
        <Hero />

        {/* 01 / Projects Section */}
        <Projects />

        {/* 02 / Skills Marquee Section */}
        <SkillsMarquee />

        {/* 03 / Experience Internship Timeline Section */}
        <Experience />

        {/* 04 / Leadership & Activities Section */}
        <Activities />
      </main>

      {/* 05 / Contact + Social Footer Section */}
      <Footer />
    </>
  );
}

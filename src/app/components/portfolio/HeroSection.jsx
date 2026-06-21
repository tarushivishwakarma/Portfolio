import React from "react";
import { Github, Linkedin, Mail, Download, ArrowRight, Sparkles } from "./Icons";
import { Button } from "../ui/button";
import classyTechBg from "@/assets/classy_tech_bg.png";

export function HeroSection() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent">
      
      {/* Classy Minimal Background Picture */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none -z-10">
        <img
          src={classyTechBg}
          alt="Classy Tech Background"
          className="w-full h-full object-cover opacity-[0.7] dark:opacity-[0.8] transition-opacity duration-700 animate-pulse-scale"
        />
        {/* Soft gradient masks to blend edges perfectly with the body background */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-50/20 via-transparent to-zinc-50 dark:from-[#030303]/20 dark:via-transparent dark:to-[#030303] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-50/20 via-transparent to-zinc-50/20 dark:from-[#030303]/20 dark:via-transparent dark:to-[#030303]/20 pointer-events-none" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="transition-all duration-1000 transform opacity-100 translate-y-0">
          <div className="inline-block mb-6 px-4 py-1.5 bg-zinc-200/50 dark:bg-zinc-900/40 backdrop-blur-md border border-zinc-300/30 dark:border-white/5 rounded-full">
            <span className="text-zinc-650 dark:text-zinc-400 text-xs tracking-wider uppercase font-semibold">Welcome to my portfolio</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-8xl font-semibold tracking-tight text-zinc-900 dark:text-white mb-6 leading-tight">
            Tarushi Vishwakarma
          </h1>

          <p className="text-xl md:text-2xl text-zinc-700 dark:text-zinc-400 font-light mb-3">
            B.Tech CSE Student | Software Developer
          </p>

          <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-500 mb-8 font-semibold tracking-wider uppercase flex items-center gap-2 justify-center">
            <Sparkles className="w-4 h-4 text-purple-500 animate-pulse" />
            AI & Web Enthusiast
          </p>

          <p className="text-base md:text-lg text-zinc-650 dark:text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            Passionate about building AI-powered applications, innovative web solutions,
            and solving real-world problems. Dedicated to creating impactful citizen-centric
            platforms and emergency response systems.
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button
              onClick={() => scrollToSection('projects')}
              className="bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-zinc-200 dark:text-zinc-950 font-medium px-8 py-6 rounded-full transition-colors group cursor-pointer"
            >
              View Projects
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              className="border-zinc-300 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900/50 px-8 py-6 rounded-full backdrop-blur-sm transition-colors cursor-pointer"
            >
              <Download className="mr-2 w-4 h-4" />
              Download Resume
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="border-zinc-300 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900/50 px-8 py-6 rounded-full backdrop-blur-sm transition-colors cursor-pointer"
            >
              <Mail className="mr-2 w-4 h-4" />
              Contact Me
            </Button>
          </div>

          {/* Social links */}
          <div className="flex gap-6 justify-center">
            <a
              href="https://github.com/tarushivishwakarma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/tarushi-vishwakarma-10123132b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:tarushivishwakarma22@gmail.com"
              className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
              aria-label="Email Contact"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float-y">
        <div className="w-5 h-9 border border-zinc-300 dark:border-zinc-700 rounded-full flex justify-center">
          <div className="w-1 h-1 bg-zinc-500 dark:bg-zinc-400 rounded-full mt-1.5 animate-scroll-dot" />
        </div>
      </div>
    </section>
  );
}

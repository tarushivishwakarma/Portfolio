import React from "react";
import { ArrowUp, Github, Linkedin, Mail, Code2, Award, Code, GeeksForGeeks, HackerRank } from "./Icons";
import { Button } from "../ui/button";
import { useScrollReveal } from "./useScrollReveal";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/tarushivishwakarma",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/tarushi-vishwakarma-10123132b",
    },
    {
      icon: Code2,
      label: "LeetCode",
      link: "https://leetcode.com/u/tarushi22/",
    },
    {
      icon: HackerRank,
      label: "HackerRank",
      link: "https://www.hackerrank.com/profile/tarushi22",
    },
    {
      icon: GeeksForGeeks,
      label: "GeeksForGeeks",
      link: "https://www.geeksforgeeks.org/profile/tarushivishwakarma",
    },
    {
      icon: Mail,
      label: "Email",
      link: "mailto:tarushivishwakarma22@gmail.com",
    },
  ];

  const [headerRef, headerVisible] = useScrollReveal();
  const [socialsRef, socialsVisible] = useScrollReveal();
  const [copyRef, copyVisible] = useScrollReveal();

  return (
    <footer className="relative py-12 px-6 bg-transparent border-t border-zinc-200/50 dark:border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center gap-6">
          
          {/* Header */}
          <h4
            ref={headerRef}
            className={`text-zinc-650 dark:text-zinc-400 text-sm font-semibold tracking-wider uppercase reveal-fade ${headerVisible ? 'revealed' : ''}`}
          >
            Connect with me
          </h4>

          {/* Social media links */}
          <div 
            ref={socialsRef}
            className={`flex flex-wrap gap-5 justify-center items-center reveal-fade ${socialsVisible ? 'revealed' : ''}`}
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-450 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:scale-110 transition-all duration-300 p-2.5 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-900 border border-transparent hover:border-zinc-200 dark:hover:border-white/5"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p
            ref={copyRef}
            className={`text-zinc-500 dark:text-zinc-500 text-center text-xs tracking-wide mt-2 reveal-fade ${copyVisible ? 'revealed' : ''}`}
          >
            © 2026 Tarushi Vishwakarma. All rights reserved.
          </p>
        </div>
      </div>

      {/* Scroll to top button */}
      <div className="fixed bottom-8 right-8 z-50 transition-all duration-500 opacity-100 scale-100">
        <Button
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full border border-zinc-300 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 text-zinc-650 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-850 shadow-lg hover:border-zinc-450 dark:hover:border-zinc-700 transition-colors cursor-pointer"
          size="icon"
        >
          <ArrowUp className="w-4 h-4" />
        </Button>
      </div>
    </footer>
  );
}

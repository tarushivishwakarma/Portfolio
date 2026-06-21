import { useState, useEffect } from "react";
import { Menu, X } from "./Icons";
import { Button } from "../ui/button";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform translate-y-0 ${
          isScrolled
            ? "bg-[#030303]/80 backdrop-blur-md border-b border-white/5 shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div
              className="text-xl font-medium tracking-tight text-white cursor-pointer hover:scale-[1.02] transition-transform duration-300"
              onClick={() => scrollToSection("#home")}
            >
              TV
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="px-4 py-2 text-sm text-zinc-400 hover:text-white transition-colors rounded-lg hover:bg-white/5 cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Trigger */}
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                className="md:hidden border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-900 cursor-pointer"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden transition-opacity duration-300">
          <div
            className="absolute inset-0 bg-zinc-100/90 dark:bg-slate-950/95 backdrop-blur-xl"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div
            className="absolute top-20 left-0 right-0 bg-white/90 dark:bg-zinc-955/90 backdrop-blur-xl mx-4 rounded-2xl border border-zinc-200/50 dark:border-white/5 shadow-2xl overflow-hidden transition-all duration-300 transform translate-y-0 opacity-100"
          >
            <div className="p-6 space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="w-full text-left px-4 py-3 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors rounded-lg hover:bg-zinc-200/50 dark:hover:bg-white/5 cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

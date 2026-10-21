"use client";

import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { navLinks } from "@/data/personal";
import { useTheme } from "@/hooks/useTheme";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useTheme();
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (value) => setScrolled(value > 20));

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      }
    }, { rootMargin: "-15% 0px -65% 0px", threshold: 0 });
    navLinks.forEach(({ href }) => {
      const element = document.getElementById(href.slice(1));
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        document.getElementById("navigation-toggle")?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const navigationLink = (href: string, label: string) => (
    <a key={href} href={href} onClick={() => setIsOpen(false)} aria-current={activeSection === href.slice(1) ? "location" : undefined} className={`inline-flex items-center min-h-11 px-3 py-2 rounded-lg text-sm transition-colors ${activeSection === href.slice(1) ? "text-heading bg-primary/10" : "text-subtle hover:text-heading"}`}>
      {label}
    </a>
  );

  return (
    <nav aria-label="Main navigation" className={`fixed top-0 left-0 right-0 z-50 ${isOpen ? "bg-surface border-b border-border" : scrolled ? "glass-nav" : "bg-surface/95"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-3">
          <a href="#home" className="font-semibold text-heading whitespace-nowrap">Quốc Tuấn<span className="text-primary">.</span></a>
          <div className="hidden lg:flex items-center gap-1">{navLinks.map(({ href, label }) => navigationLink(href, label))}</div>
          <div className="flex items-center gap-1">
            <button onClick={toggleTheme} className="p-3 rounded-lg text-body hover:text-heading" aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}>
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button id="navigation-toggle" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-controls="mobile-navigation" aria-label={isOpen ? "Close navigation" : "Open navigation"} className="lg:hidden p-3 rounded-lg text-heading">
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        {isOpen && <div id="mobile-navigation" className="lg:hidden grid grid-cols-2 gap-1 pb-5">{navLinks.map(({ href, label }) => navigationLink(href, label))}</div>}
      </div>
    </nav>
  );
}

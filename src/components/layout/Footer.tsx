"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import SocialIcons from "@/components/ui/SocialIcons";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-white/5 pt-16 pb-8 relative mt-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          {/* Logo */}
          <div className="text-2xl font-bold tracking-tight">
            <span className="text-heading">Quốc Tuấn</span>
            <span className="text-primary">.</span>
          </div>

          {/* Socials */}
          <SocialIcons />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-subtle text-sm font-mono">
            © {new Date().getFullYear()} Nguyễn Đôn Quốc Tuấn. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-subtle hover:text-heading transition-colors group"
          >
            Back to top
            <div className="w-8 h-8 rounded-full glass-sm flex items-center justify-center group-hover:bg-white/10 transition-colors">
              <ArrowUp size={14} />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
}

"use client";

import { motion } from "framer-motion";
import { Download, Mail, ArrowRight } from "lucide-react";
import Spline from "@splinetool/react-spline";

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}
import { personalInfo } from "@/data/personal";

// Mocking icons for floating tech
const techIcons = [
  { name: "React", x: 20, y: 15, delay: 0 },
  { name: "Python", x: 70, y: 25, delay: 1 },
  { name: "Next.js", x: 40, y: 70, delay: 2 },
  { name: "AI", x: 80, y: 60, delay: 1.5 },
];

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen pt-20 pb-10 flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Side (40%) - Profile Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Profile Photo */}
            <div className="relative mb-8 group">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl overflow-hidden border border-white/10 bg-surface-2 p-1 transition-transform duration-500 group-hover:scale-105">
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/AVT.jpg')] bg-cover bg-center opacity-100" />
                </div>
              </div>
              <div className="absolute -inset-4 bg-primary/20 rounded-[2.5rem] blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-heading mb-2 tracking-tight">
              {personalInfo.name}
            </h1>
            <p className="text-primary font-mono text-sm tracking-wide uppercase mb-4">
              AI Engineer & Full Stack
            </p>
            <p className="text-body text-sm md:text-base mb-8 max-w-sm leading-relaxed">
              Passionate about building intelligent systems and creating seamless digital experiences.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
              <a
                href={personalInfo.resumeUrl}
                download="Nguyen_Don_Quoc_Tuan_CV.pdf"
                className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-heading text-surface font-medium hover:bg-white transition-colors duration-300 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
              >
                <Download size={16} />
                <span>Resume</span>
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 rounded-2xl glass-sm text-heading hover:bg-white/5 transition-all duration-300"
              >
                <Mail size={16} />
                <span>Contact</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl glass-sm hover:bg-white/10 text-subtle hover:text-heading transition-all duration-300">
                <GithubIcon size={18} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl glass-sm hover:bg-white/10 text-subtle hover:text-heading transition-all duration-300">
                <LinkedinIcon size={18} />
              </a>
              <a href={personalInfo.facebook} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl glass-sm hover:bg-white/10 text-subtle hover:text-heading transition-all duration-300">
                <FacebookIcon size={18} />
              </a>
            </div>
          </motion.div>

          {/* Right Side (60%) - Hero Graphic & Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Spline 3D Graphic Area */}
            <div className="glass rounded-[2rem] w-full h-[350px] lg:h-[400px] relative overflow-hidden border-white/5 bg-black/10">
              <div className="absolute inset-0 z-0 opacity-100 mix-blend-screen pointer-events-auto flex items-center justify-center">
                <Spline scene="/scene.splinecode" />
              </div>
            </div>

            {/* Text & Stats */}
            <div className="glass p-8 md:p-10 rounded-[2rem] relative overflow-hidden hero-bg border-white/5">
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-heading leading-[1.1] tracking-tight mb-4">
                  Building <span className="gradient-text-color">AI-powered Software</span> for Real-world Problems.
                </h2>
                <p className="text-body text-base max-w-lg mb-8 font-light">
                  Transforming complex challenges into elegant, scalable solutions through artificial intelligence and modern web technologies.
                </p>

                {/* Stat Cards - Bento style */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: "Projects", value: "8+" },
                    { label: "Years Learning", value: "4+" },
                    { label: "Technologies", value: "20+" },
                    { label: "Repositories", value: "10+" },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + (i * 0.1) }}
                      className="glass-sm p-4 rounded-2xl flex flex-col justify-center bg-white/[0.01]"
                    >
                      <span className="text-xl font-semibold text-heading mb-1">{stat.value}</span>
                      <span className="text-[10px] text-subtle font-mono uppercase tracking-wider">{stat.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

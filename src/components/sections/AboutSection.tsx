"use client";

import { motion } from "framer-motion";
import { GraduationCap, Target, Briefcase, ChevronRight } from "lucide-react";
import { aboutMe, education, experienceTimeline } from "@/data/personal";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-heading tracking-tight">About</h2>
          <div className="h-px w-24 bg-gradient-to-r from-primary to-transparent mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Bio & Education */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-medium text-heading mb-6 flex items-center gap-2">
                <Target size={20} className="text-primary" />
                Who am I?
              </h3>
              <p className="text-body text-base leading-relaxed font-light">
                {aboutMe.description}
              </p>
              <div className="mt-8">
                <h4 className="text-sm font-mono text-subtle uppercase tracking-wider mb-4">Career Goal</h4>
                <p className="text-heading text-lg font-medium leading-relaxed">
                  "To become a top-tier AI Engineer & Full Stack Developer, building systems that make a tangible difference."
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-medium text-heading mb-6 flex items-center gap-2">
                <GraduationCap size={20} className="text-primary" />
                Education
              </h3>
              <div className="glass-sm p-6 rounded-2xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-heading">{education.university}</h4>
                    <p className="text-primary text-sm mt-1">{education.degree}</p>
                  </div>
                  <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-subtle w-fit">
                    {education.period}
                  </span>
                </div>
                <p className="text-subtle text-sm">Major: {education.major}</p>
                <div className="mt-4 flex items-center gap-2 text-xs font-medium text-emerald-400 bg-emerald-400/10 w-fit px-3 py-1 rounded-full border border-emerald-400/20">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {education.status}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Experience/Timeline in a Glass Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass p-8 md:p-10 rounded-[2rem] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl rounded-full" />
            
            <h3 className="text-xl font-medium text-heading mb-8 flex items-center gap-2 relative z-10">
              <Briefcase size={20} className="text-primary" />
              Experience & Journey
            </h3>

            <div className="relative z-10 space-y-8 before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
              
              <div className="relative pl-8 border-l border-white/10 ml-2 space-y-10">
                {experienceTimeline.map((item, idx) => (
                  <div key={idx} className="relative">
                    {/* Dot */}
                    <div className="absolute -left-[41px] top-1 w-3 h-3 bg-surface border-2 border-primary rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
                    
                    <span className="text-xs font-mono text-primary mb-2 block tracking-wider">{item.year}</span>
                    <h4 className="text-heading font-medium text-base mb-2">{item.title}</h4>
                    <p className="text-subtle text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

            </div>
            
            {/* Quick Skills Summary at bottom of card */}
            <div className="mt-12 pt-8 border-t border-white/5 relative z-10">
              <p className="text-xs font-mono text-subtle uppercase tracking-wider mb-4">Core Focus</p>
              <div className="flex flex-wrap gap-2">
                {["Artificial Intelligence", "Full Stack Web", "Computer Vision", "System Architecture"].map(skill => (
                  <span key={skill} className="px-3 py-1.5 rounded-lg bg-white/5 text-xs text-body border border-white/5">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

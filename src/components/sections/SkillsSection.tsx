"use client";

import { motion } from "framer-motion";
import { Layout, Server, Database, Brain, Cloud, Code, Terminal, Wrench } from "lucide-react";
import { skillCategories } from "@/data/personal";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  layout: Layout,
  server: Server,
  database: Database,
  brain: Brain,
  cloud: Cloud,
  code: Code,
  wrench: Wrench,
  terminal: Terminal
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-heading tracking-tight">Skills & Expertise</h2>
          <div className="h-px w-24 bg-gradient-to-r from-primary to-transparent mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = iconMap[category.icon] || Code;
            
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-sm p-6 flex flex-col h-full group hover:-translate-y-1 transition-transform duration-300"
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary/10 group-hover:text-primary-hover transition-colors duration-300">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-heading">{category.title}</h3>
                </div>

                {/* Tech Stack List */}
                <div className="flex-1 flex flex-col gap-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="flex flex-col gap-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-body group-hover:text-heading transition-colors">{skill.name}</span>
                        <span className="text-[10px] font-mono text-subtle">{skill.level}%</span>
                      </div>
                      {/* Small subtle indicator instead of long chunky progress bar */}
                      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-accent opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

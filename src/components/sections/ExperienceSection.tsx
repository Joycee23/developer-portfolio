"use client";

import { motion } from "framer-motion";
import { experienceTimeline } from "@/data/personal";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        <div className="mb-20 text-center">
          <h2 className="text-3xl font-semibold text-heading tracking-tight mb-4">Journey</h2>
          <p className="text-subtle text-base max-w-lg mx-auto">
            The path of my continuous learning and professional growth.
          </p>
        </div>

        <div className="relative">
          {/* Main Timeline Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2" />

          <div className="space-y-16">
            {experienceTimeline.map((item, idx) => {
              const isLeft = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center justify-between group ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[20px] md:left-1/2 w-4 h-4 bg-surface border-[3px] border-primary rounded-full -translate-x-1/2 mt-1.5 md:mt-0 shadow-[0_0_15px_rgba(99,102,241,0.5)] group-hover:scale-125 group-hover:bg-primary transition-all duration-300 z-10" />
                  
                  {/* Content Card */}
                  <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                    <div className="glass-sm p-6 md:p-8 rounded-[2rem] hover:bg-white/5 transition-colors duration-300 relative overflow-hidden">
                      <div className={`absolute top-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full ${isLeft ? 'right-0' : 'left-0'}`} />
                      
                      <span className="inline-block text-4xl md:text-5xl font-bold text-white/5 mb-4 font-mono tracking-tighter">
                        {item.year}
                      </span>
                      
                      <h3 className="text-xl font-medium text-heading mb-3 relative z-10">{item.title}</h3>
                      <p className="text-subtle text-sm leading-relaxed relative z-10 font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Empty space for the other side */}
                  <div className="hidden md:block md:w-[45%]" />
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

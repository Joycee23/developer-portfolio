"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, BookOpen, MapPin } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { education } from "@/data/personal";

export default function EducationSection() {
  return (
    <section className="py-28 md:py-36 relative section-glow">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeading
          title="Education"
          subtitle="My academic foundation in technology and engineering."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-lg mx-auto"
        >
          <div className="glass glass-hover p-8 md:p-10 text-center relative overflow-hidden">
            {/* Subtle corner glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/[0.04] to-transparent rounded-bl-full pointer-events-none" />

            <div className="p-3 rounded-2xl bg-primary/8 w-fit mx-auto mb-6">
              <GraduationCap size={24} className="text-primary" />
            </div>

            <h3 className="text-lg md:text-xl font-bold gradient-text mb-6">
              {education.degree}
            </h3>

            <div className="space-y-3">
              <div className="flex items-center gap-2.5 justify-center text-body text-sm">
                <MapPin size={14} className="text-secondary shrink-0" />
                <span className="font-medium">{education.university}</span>
              </div>
              <div className="flex items-center gap-2.5 justify-center text-subtle text-[13px]">
                <BookOpen size={14} className="text-subtle shrink-0" />
                <span>{education.major}</span>
              </div>
              <div className="flex items-center gap-2.5 justify-center text-subtle text-[13px]">
                <Calendar size={14} className="text-subtle shrink-0" />
                <span>{education.period}</span>
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/8 text-emerald-400 text-xs font-medium border border-emerald-500/15">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {education.status}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

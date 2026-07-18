"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { achievements } from "@/data/personal";

const glowColors = ["#6366f1", "#06b6d4", "#a855f7", "#f59e0b", "#10b981"];

export default function AchievementsSection() {
  return (
    <section className="py-28 md:py-36 relative section-glow">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeading
          title="Achievements"
          subtitle="Milestones reflecting my dedication to building and learning."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {achievements.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="glass glass-hover p-6 text-center group"
            >
              <div
                className="text-3xl md:text-4xl font-bold mb-2 tracking-tight"
                style={{ color: glowColors[i % glowColors.length] }}
              >
                <AnimatedCounter end={item.value} suffix={item.suffix} />
              </div>
              <p className="text-[10px] text-subtle uppercase tracking-widest font-mono">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

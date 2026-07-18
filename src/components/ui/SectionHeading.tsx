"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  className = "",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`text-center mb-20 ${className}`}
    >
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="inline-block text-xs font-mono tracking-[0.2em] uppercase text-primary mb-4 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5"
      >
        {title}
      </motion.span>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-heading tracking-tight leading-tight">
        <span className="gradient-text">{title}</span>
      </h2>

      {subtitle && (
        <p className="mt-5 text-subtle text-sm md:text-base max-w-lg mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

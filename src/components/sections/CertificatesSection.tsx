"use client";

import { motion } from "framer-motion";
import { Award, Brain, Cpu, Container, Database, GitBranch } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { certificates } from "@/data/personal";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  award: Award, brain: Brain, cpu: Cpu, container: Container, database: Database, gitBranch: GitBranch,
};

export default function CertificatesSection() {
  return (
    <section className="py-28 md:py-36 relative section-glow">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeading
          title="Certificates"
          subtitle="Professional certifications validating my expertise."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {certificates.map((cert, i) => {
            const Icon = iconMap[cert.icon] || Award;
            return (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="glass glass-hover p-5 flex items-center gap-4 group"
              >
                <div className="p-2 rounded-lg bg-accent/8 group-hover:bg-accent/12 transition-colors shrink-0">
                  <Icon size={16} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-[13px] font-semibold text-heading">{cert.name}</h3>
                  <p className="text-[11px] text-subtle">{cert.issuer}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

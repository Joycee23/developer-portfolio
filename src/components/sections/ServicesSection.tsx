"use client";

import { motion } from "framer-motion";
import { Brain, Code, Eye } from "lucide-react";
import { services } from "@/data/personal";

// Pre-define icons based on data
const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  brain: Brain,
  code: Code,
  eye: Eye,
};

export default function ServicesSection() {
  // Taking only the first 3 services as requested for the 3-card layout
  const topServices = services.slice(0, 3);

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="mb-16 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold text-heading tracking-tight mb-4">Services</h2>
            <p className="text-subtle text-base max-w-lg">
              Specialized offerings tailored to solve complex problems and build scalable products.
            </p>
          </div>
          <div className="hidden md:block h-px flex-1 max-w-xs bg-gradient-to-l from-transparent to-white/10" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {topServices.map((service, idx) => {
            const Icon = iconMap[service.icon] || Code;
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group relative glass p-8 md:p-10 flex flex-col items-start overflow-hidden"
              >
                {/* Background Glow */}
                <div className="absolute -inset-x-20 -top-20 h-40 bg-primary/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform duration-500 relative z-10">
                  <Icon size={28} />
                </div>
                
                <h3 className="text-xl font-medium text-heading mb-4 relative z-10 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-body text-base font-light leading-relaxed relative z-10">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

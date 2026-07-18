"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { awards } from "@/data/personal";

export default function AwardsSection() {
  return (
    <section id="awards" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold text-heading tracking-tight mb-4 flex items-center gap-3">
              <Award className="text-primary" size={28} />
              Awards & Certificates
            </h2>
            <p className="text-subtle text-base max-w-lg">
              Recognitions and certifications achieved throughout my academic and professional journey.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {awards.map((award, idx) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative glass rounded-[2rem] overflow-hidden flex flex-col border border-white/5 hover:border-white/10 transition-colors duration-500"
            >
              {/* Image Container with hover zoom */}
              <a 
                href={award.image} 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative w-full aspect-[4/3] bg-surface-2 overflow-hidden block cursor-zoom-in"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                  style={{ backgroundImage: `url('${award.image}')` }}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                  <div className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white font-medium flex items-center gap-2">
                    <ExternalLink size={16} />
                    <span>View Full Image</span>
                  </div>
                </div>
              </a>

              {/* Content */}
              <div className="p-8">
                <p className="text-xs font-mono text-primary uppercase tracking-wider mb-2">
                  {award.issuer}
                </p>
                <h3 className="text-2xl font-semibold text-heading mb-3 group-hover:text-primary transition-colors">
                  {award.title}
                </h3>
                <p className="text-body text-base font-light leading-relaxed">
                  {award.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

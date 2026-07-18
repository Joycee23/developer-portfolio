"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { personalInfo } from "@/data/personal";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setForm({ name: "", email: "", message: "" });
    }, 1500);
  };

  const inputClasses = "w-full bg-surface-2 border border-white/10 rounded-2xl px-5 py-4 text-heading placeholder:text-subtle focus:border-primary/50 focus:bg-white/5 transition-all outline-none font-light";

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col h-full justify-between"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-semibold text-heading tracking-tight mb-6">
                Let's build something <span className="text-primary">extraordinary.</span>
              </h2>
              <p className="text-body text-lg font-light max-w-md mb-16">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>

              <div className="space-y-8">
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl glass-sm flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-subtle uppercase tracking-wider mb-1">Email</p>
                    <p className="text-heading text-lg font-medium group-hover:text-primary transition-colors">{personalInfo.email}</p>
                  </div>
                </a>

                {/* Using placeholder phone since it's not in personal.ts */}
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl glass-sm flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-subtle uppercase tracking-wider mb-1">Phone</p>
                    <p className="text-heading text-lg font-medium group-hover:text-primary transition-colors">0961066861</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl glass-sm flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-subtle uppercase tracking-wider mb-1">Location</p>
                    <p className="text-heading text-lg font-medium group-hover:text-primary transition-colors">{personalInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Floating Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass p-8 md:p-10 rounded-[2.5rem] relative">
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-[2.5rem] pointer-events-none" />
              
              <h3 className="text-2xl font-medium text-heading mb-8 relative z-10">Send a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    required
                    value={form.name}
                    onChange={(e) => setForm({...form, name: e.target.value})}
                    className={inputClasses} 
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    required
                    value={form.email}
                    onChange={(e) => setForm({...form, email: e.target.value})}
                    className={inputClasses} 
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Your Message" 
                    rows={5} 
                    required
                    value={form.message}
                    onChange={(e) => setForm({...form, message: e.target.value})}
                    className={`${inputClasses} resize-none`} 
                  />
                </div>
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 rounded-2xl bg-heading text-surface font-semibold text-lg flex items-center justify-center gap-3 hover:bg-white transition-all duration-300 shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_-5px_rgba(255,255,255,0.4)] disabled:opacity-70 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <Send size={20} className="group-hover:translate-x-1 transition-transform" />}
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

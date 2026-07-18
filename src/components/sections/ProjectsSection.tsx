"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";

function GithubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}
import { projects } from "@/data/personal";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-heading tracking-tight">Featured Work</h2>
          <div className="h-px w-24 bg-gradient-to-r from-primary to-transparent mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="group flex flex-col"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden mb-6 border border-white/5 bg-black/40 group-hover:border-white/10 transition-colors duration-500">
                {project.videoUrl ? (
                  <video
                    id={`video-${idx}`}
                    src={project.videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-contain opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                ) : project.image ? (
                  <div 
                    className="absolute inset-0 bg-contain bg-no-repeat bg-center opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                    style={{ backgroundImage: `url('${project.image}')` }}
                  />
                ) : (
                  <div 
                    className="absolute inset-0 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                    style={{ 
                      background: `linear-gradient(135deg, ${project.color}20 0%, ${project.color}05 100%)`,
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center opacity-30">
                       <div className="w-32 h-32 rounded-full blur-3xl" style={{ backgroundColor: project.color }} />
                    </div>
                  </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
                  {project.videoUrl && (
                    <button 
                      onClick={() => {
                        const video = document.getElementById(`video-${idx}`) as HTMLVideoElement;
                        if (video) {
                          if (video.requestFullscreen) video.requestFullscreen();
                          else if ((video as any).webkitRequestFullscreen) (video as any).webkitRequestFullscreen();
                        }
                      }}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white text-sm font-medium hover:scale-105 transition-transform cursor-pointer"
                    >
                      <span>Full Screen</span>
                    </button>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-sm font-medium hover:scale-105 transition-transform">
                      <span>Live Demo</span>
                      <ExternalLink size={14} />
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-full glass-sm text-white text-sm font-medium hover:bg-white/10 transition-colors">
                      <GithubIcon size={14} />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 px-2">
                <h3 className="text-2xl font-semibold text-heading mb-3 group-hover:text-primary transition-colors flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight size={20} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300 text-primary" />
                </h3>
                <p className="text-body text-base leading-relaxed mb-6 font-light">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 text-xs font-mono rounded-lg bg-surface-3 border border-white/5 text-subtle"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="px-3 py-1 text-xs font-mono rounded-lg bg-transparent text-subtle">
                      +{project.technologies.length - 5}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

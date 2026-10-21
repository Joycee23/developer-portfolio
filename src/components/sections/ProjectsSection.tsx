import Image from "next/image";
import { ArrowUpRight, Code2 } from "lucide-react";
import { projects, recentProjects, type Project } from "@/data/personal";

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-5 mt-5 text-sm">
      {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-link"><Code2 size={16} /> Source code <ArrowUpRight size={14} /></a>}
      {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-link">Live demo <ArrowUpRight size={16} /></a>}
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="section-title">Featured Work</h2>
        <p className="text-body max-w-2xl mb-10">Recent AI applications, followed by computer vision, web, and mobile projects with product previews.</p>
        <div className="space-y-9 mb-16">
          {recentProjects.map((project) => (
            <article key={project.title} className="grid lg:grid-cols-[1fr_1.25fr] gap-5 lg:gap-14 border-b border-border pb-9">
              <div>
                <h3 className="text-2xl font-semibold text-heading">{project.title}</h3>
                {(project.role || project.status) && <p className="mt-2 text-sm text-primary">{[project.role, project.status].filter(Boolean).join(" · ")}</p>}
                <p className="mt-4 text-sm text-subtle leading-relaxed">{project.technologies.join(", ")}</p>
                <ProjectLinks project={project} />
              </div>
              <div>
                <p className="text-body leading-relaxed">{project.description}</p>
                <details className="project-details mt-4">
                  <summary className="text-sm text-heading cursor-pointer py-2 w-fit">Implementation details</summary>
                  <ul className="list-disc pl-5 mt-3 space-y-2 text-sm text-body leading-relaxed">
                    {project.features.map((feature) => <li key={feature}>{feature}</li>)}
                  </ul>
                  {project.note && <p className="mt-4 text-sm text-subtle leading-relaxed">{project.note}</p>}
                </details>
              </div>
            </article>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-14">
          {projects.map((project) => (
            <article key={project.title}>
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 border border-border bg-surface-2">
                {project.videoUrl ? (
                  <video src={project.videoUrl} controls preload="none" playsInline aria-label={`${project.title} demo`} className="w-full h-full object-contain" />
                ) : project.image ? (
                  <Image src={project.image} alt={`${project.title} application preview`} fill sizes="(max-width: 767px) 100vw, 50vw" className="object-contain" />
                ) : null}
              </div>
              <h3 className="text-2xl font-semibold text-heading mb-3">{project.title}</h3>
              <p className="text-body leading-relaxed mb-5">{project.description}</p>
              <p className="text-sm text-subtle leading-relaxed">{project.technologies.join(", ")}</p>
              <ProjectLinks project={project} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

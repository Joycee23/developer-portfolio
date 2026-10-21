import Image from "next/image";
import { ArrowRight, ArrowUpRight, Code2 } from "lucide-react";
import { projects, recentProjects, type Project } from "@/data/personal";

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-5 mt-5 text-sm">
      {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} source code on GitHub`} className="inline-link"><Code2 size={16} aria-hidden="true" /> Source code <ArrowUpRight size={14} aria-hidden="true" /></a>}
      {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-link">Live demo <ArrowUpRight size={16} /></a>}
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="section-title">Featured Work</h2>
        <p className="text-body max-w-2xl mb-10">AI Support Operations leads my work in full-stack AI: knowledge retrieval, cited answers, and human review. More projects follow below.</p>
        <div className="recent-projects mb-16">
          {recentProjects.map((project, index) => (
            <article key={project.title} id={index === 0 ? "ai-support-operations" : undefined} className={`recent-project ${index === 0 ? "recent-project-wide" : ""}`}>
              <div className="project-copy">
                <h3 className="text-2xl font-semibold text-heading tracking-tight">{project.title}</h3>
                {(project.role || project.status) && <p className="mt-2 text-sm text-primary">{[project.role, project.status].filter(Boolean).join(" · ")}</p>}
                <p className="text-body leading-relaxed mt-5">{project.description}</p>
              </div>
              {project.image && <figure className="project-media">
                <a href={project.image} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} project image`} className="relative block aspect-video project-visual project-screenshot">
                  <Image src={project.image} alt={project.imageAlt ?? `${project.title} project image`} fill sizes="(max-width: 767px) 100vw, 50vw" className="object-contain" />
                </a>
                {project.imageCaption && <figcaption className="mt-3 text-sm text-subtle leading-relaxed">{project.imageCaption}</figcaption>}
              </figure>}
              <div className="project-workflow">
                <p className="text-sm text-subtle mb-4">Workflow</p>
                <ol aria-label={`${project.title} workflow`} className="workflow-steps">
                  {project.workflow?.map((step, stepIndex) => <li key={step} className="flex items-center gap-2"><span>{step}</span>{stepIndex < (project.workflow?.length ?? 0) - 1 && <ArrowRight size={14} className="text-primary shrink-0" aria-hidden="true" />}</li>)}
                </ol>
              </div>
              <ul className="project-contributions space-y-3 text-sm text-body leading-relaxed">
                {project.features.slice(0, 2).map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
              {project.features.length > 2 && <details className="project-details mt-4">
                <summary className="text-sm text-heading cursor-pointer py-3 w-fit">More implementation details</summary>
                <ul className="list-disc pl-5 mt-2 space-y-2 text-sm text-body leading-relaxed">
                  {project.features.slice(2).map((feature) => <li key={feature}>{feature}</li>)}
                </ul>
              </details>}
              {project.note && <p className="mt-4 text-sm text-subtle leading-relaxed">{project.note}</p>}
              <div className="project-footer">
                <p className="text-sm text-subtle leading-relaxed">{project.technologies.join(" · ")}</p>
                <ProjectLinks project={project} />
              </div>
            </article>
          ))}
        </div>
        <h3 className="text-2xl font-semibold text-heading mb-8 tracking-tight">More projects</h3>
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-14">
          {projects.map((project) => (
            <article key={project.title}>
              <div className="relative aspect-[16/10] project-visual mb-6">
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

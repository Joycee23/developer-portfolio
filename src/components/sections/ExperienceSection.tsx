import { internships } from "@/data/personal";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="section-title">Experience</h2>
        <div className="space-y-10">
          {internships.map((item) => (
            <article key={item.company} className="grid md:grid-cols-[240px_1fr] gap-3 md:gap-10">
              <p className="text-sm text-subtle pt-1">{item.period}</p>
              <div className="max-w-2xl">
                <h3 className="text-xl font-semibold text-heading">{item.role}</h3>
                <p className="text-primary font-medium mt-1">{item.company}</p>
                {item.location && <p className="text-sm text-subtle mt-1">{item.location}</p>}
                <p className="text-body leading-relaxed mt-3">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

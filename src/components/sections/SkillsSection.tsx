import { skillCategories } from "@/data/personal";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="text-body max-w-2xl mb-10">Technologies I have worked with. The projects above show how I apply them.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="font-medium text-heading mb-3">{category.title}</h3>
              <p className="text-sm text-body leading-7">{category.skills.map((skill) => skill.name).join(", ")}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

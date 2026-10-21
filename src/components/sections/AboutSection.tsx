import { aboutMe, education } from "@/data/personal";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-10 lg:gap-20">
        <div>
          <h2 className="section-title">About</h2>
          <p className="text-body leading-relaxed max-w-xl">{aboutMe.description}</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-heading mb-6">Education & training</h3>
          <div className="space-y-7">
            <div>
              <h4 className="font-medium text-heading">{education.university}</h4>
              <p className="text-sm text-body mt-1">{education.major} · {education.period}</p>
              <p className="text-sm text-subtle mt-1">{education.status}</p>
            </div>
            <div>
              <h4 className="font-medium text-heading">AI Thực Chiến</h4>
              <p className="text-sm text-body mt-1">Participant · 2026</p>
              <p className="text-sm text-subtle mt-1">Organized by Vingroup and VinUniversity</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { awards } from "@/data/personal";

export default function AwardsSection() {
  return (
    <section id="awards" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="section-title">Awards & Certificates</h2>
        <p className="text-body max-w-2xl mb-10">University recognition for my traffic sign recognition research.</p>
        <div className="grid md:grid-cols-2 gap-10">
          {awards.map((award) => (
            <article key={award.title}>
              <a href={award.image} target="_blank" rel="noopener noreferrer" aria-label={`Open ${award.title} certificate`} className="relative block aspect-[4/3] project-visual cursor-zoom-in">
                <Image src={award.image} alt={`${award.issuer}: ${award.title}`} fill sizes="(max-width: 767px) 100vw, 50vw" className="object-contain" />
              </a>
              <p className="text-sm text-primary mt-6 mb-2">{award.issuer}</p>
              <h3 className="text-xl font-semibold text-heading mb-3">{award.title}</h3>
              <p className="text-body leading-relaxed">{award.description}</p>
              <a href={award.image} target="_blank" rel="noopener noreferrer" aria-label={`View ${award.title} certificate`} className="inline-link mt-3 text-sm">View certificate <ArrowUpRight size={16} aria-hidden="true" /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

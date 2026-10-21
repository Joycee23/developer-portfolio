import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, Download } from "lucide-react";
import { personalInfo } from "@/data/personal";

export default function HeroSection() {
  return (
    <section id="home" className="pt-24 pb-14 md:pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <div className="lg:col-span-5">
          <Image src="/AVT.jpg" alt="Portrait of Nguyễn Đôn Quốc Tuấn" width={64} height={64} preload className="rounded-2xl mb-6" />
          <h1 className="hero-name text-heading mb-5">Nguyễn Đôn{" "}<br />Quốc Tuấn<span className="text-primary">.</span></h1>
          <p className="text-primary text-base font-medium mb-4">AI Engineer & Full Stack Developer</p>
          <p className="text-body max-w-md leading-relaxed mb-7">I build computer vision tools and full-stack AI applications, from annotation QC to evidence-based video review.</p>
          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="button-primary">View projects <ArrowDownRight size={17} /></a>
            <a href={personalInfo.resumeUrl} download="Nguyen_Don_Quoc_Tuan_CV.pdf" className="button-secondary"><Download size={16} /> Resume</a>
          </div>
        </div>
        <figure className="lg:col-span-7">
          <a href="https://github.com/Joycee23/AI-Support-Operations" target="_blank" rel="noopener noreferrer" aria-label="View AI Support Operations source code on GitHub" className="block project-visual hero-project">
            <div className="relative aspect-[2792/1576]">
              <Image src="/support-operations-preview.jpg" alt="AI Support Operations running with test tickets, a knowledge base, and a human-reviewed AI response workflow" fill sizes="(max-width: 1023px) 100vw, 58vw" preload className="object-contain transition-transform duration-500" />
            </div>
          </a>
          <figcaption className="mt-5">
            <a href="https://github.com/Joycee23/AI-Support-Operations" target="_blank" rel="noopener noreferrer" className="inline-link text-heading font-medium">AI Support Operations <ArrowUpRight size={17} aria-hidden="true" /></a>
            <p className="mt-1 text-sm text-body">Knowledge-grounded support with citations and human review.</p>
            <p className="mt-2 text-sm text-subtle">Application screenshot using test data.</p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

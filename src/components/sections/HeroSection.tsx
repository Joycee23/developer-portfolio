import Image from "next/image";
import { ArrowDownRight, Download, Code2, Link, Mail } from "lucide-react";
import { personalInfo } from "@/data/personal";

export default function HeroSection() {
  return (
    <section id="home" className="pt-28 pb-16 md:pt-32 md:pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <Image src="/AVT.jpg" alt="Nguyễn Đôn Quốc Tuấn" width={104} height={104} preload className="rounded-2xl mb-7 border border-border" />
          <h1 className="text-3xl md:text-4xl font-semibold text-heading tracking-tight mb-3">{personalInfo.name}</h1>
          <p className="text-primary text-base font-medium mb-4">AI Engineer & Full Stack Developer</p>
          <p className="text-body max-w-md leading-relaxed mb-7">I build computer vision tools and full-stack AI applications, from annotation QC to evidence-based video review.</p>
          <div className="flex flex-wrap gap-3 mb-7">
            <a href="#projects" className="button-primary">View projects <ArrowDownRight size={17} /></a>
            <a href={personalInfo.resumeUrl} download="Nguyen_Don_Quoc_Tuan_CV.pdf" className="button-secondary"><Download size={16} /> Resume</a>
          </div>
          <div className="flex flex-wrap items-center gap-5 text-sm">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="inline-link"><Code2 size={17} /> GitHub</a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="inline-link"><Link size={17} /> LinkedIn</a>
            <a href="#contact" className="inline-link"><Mail size={17} /> Contact</a>
          </div>
        </div>
        <figure className="lg:col-span-7">
          <a href="#projects" aria-label="Explore the traffic sign recognition project" className="block rounded-2xl overflow-hidden border border-border bg-surface-2 hero-project">
            <div className="relative aspect-[16/10]">
              <Image src="/prj1.jpg" alt="Traffic sign recognition application showing detections in road images and video" fill sizes="(max-width: 1023px) 100vw, 58vw" preload className="object-contain" />
            </div>
          </a>
          <figcaption className="mt-4 text-sm text-body leading-relaxed">Vietnamese Traffic Sign Recognition <span className="block mt-1 text-subtle">YOLOv8 image and video detection. University research project, awarded third prize.</span></figcaption>
        </figure>
      </div>
    </section>
  );
}

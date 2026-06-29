import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/shared/ProjectCard";
import CTASection from "@/components/sections/CTASection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Orbital Resources Limited's portfolio of engineering, consultancy, and marine projects across Nigeria and West Africa.",
};

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-end bg-navy-950 overflow-hidden pt-24">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80"
            alt="Project site"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/30" />
        </div>
        <Container className="relative pb-16">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-semibold text-amber-400 tracking-widest uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              Our Portfolio
            </span>
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-white mt-4">
              Featured <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-slate-300 text-lg mt-4 max-w-2xl">
              A curated selection of landmark projects delivered across the
              energy sector in Nigeria and West Africa.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* Projects grid */}
      <section className="section-padding bg-slate-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}

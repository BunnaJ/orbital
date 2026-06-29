import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import IndustryCard from "@/components/shared/IndustryCard";
import CTASection from "@/components/sections/CTASection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { industries } from "@/lib/data";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Orbital Resources Limited serves the oil and gas, marine, petrochemical, infrastructure, power, and environmental sectors across West Africa.",
};

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-end bg-navy-950 overflow-hidden pt-24">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1600&q=80"
            alt="Industrial facility"
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
              Sectors
            </span>
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-white mt-4">
              Industries <span className="text-gradient">We Serve</span>
            </h1>
          </ScrollReveal>
        </Container>
      </section>

      {/* Industries grid */}
      <section className="section-padding bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern" />
        <Container className="relative">
          <ScrollReveal>
            <SectionHeader
              badge="Our Sectors"
              title="Multidisciplinary"
              titleHighlight="Expertise"
              description="We bring deep technical expertise across the full energy and industrial value chain, tailored to the needs of each sector."
              align="center"
              theme="dark"
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {industries.map((industry, i) => (
              <IndustryCard key={industry.id} industry={industry} index={i} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}

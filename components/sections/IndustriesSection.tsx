import Container from "@/components/ui/Container";
import IndustryCard from "@/components/shared/IndustryCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { industries } from "@/lib/data";

export default function IndustriesSection() {
  return (
    <section className="section-padding bg-navy-900 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-dot-pattern" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />

      <Container className="relative">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center gap-4">
            <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-white/10 text-white border border-white/20">
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              Industries
            </span>
            <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight tracking-tight">
              Sectors We <span className="text-gradient">Serve</span>
            </h2>
            <p className="text-base leading-relaxed max-w-2xl text-slate-300">
              Our multidisciplinary teams provide specialized engineering solutions across the full energy and industrial value chain.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
          {industries.map((industry, i) => (
            <IndustryCard key={industry.id} industry={industry} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}

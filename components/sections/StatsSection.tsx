import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { stats } from "@/lib/data";

export default function StatsSection() {
  return (
    <section className="section-padding bg-white border-y border-slate-100">
      <Container>
        <ScrollReveal>
          <SectionHeader
            badge="Impact"
            title="Our Numbers"
            titleHighlight="Speak"
            description="Measured not just in contracts, but in the long-term partnerships, technical milestones, and communities we have helped to power."
            align="center"
          />
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-amber-200 hover:bg-amber-50/30 transition-all duration-300 group">
                <span className="font-display text-4xl lg:text-5xl font-bold text-navy-950 group-hover:text-amber-600 transition-colors duration-300">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    duration={2000}
                  />
                </span>
                <span className="text-slate-500 text-sm mt-3 font-medium">
                  {stat.label}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

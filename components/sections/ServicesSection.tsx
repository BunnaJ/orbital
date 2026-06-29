import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import ServiceCard from "@/components/shared/ServiceCard";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { services, servicesIntro } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export default function ServicesSection() {
  return (
    <section className="section-padding bg-slate-50">
      <Container>
        <ScrollReveal>
          <SectionHeader
            badge="Our Services"
            title="What We"
            titleHighlight="Do Best"
            align="center"
          />
          {/* Intro paragraph from the original site */}
          <p className="text-center text-slate-500 text-base leading-relaxed max-w-2xl mx-auto mt-4">
            {servicesIntro}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <ScrollReveal>
            <Button href="/services" variant="secondary" size="md">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Button>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}

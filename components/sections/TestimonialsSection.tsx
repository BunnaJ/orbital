import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import TestimonialCard from "@/components/shared/TestimonialCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { testimonials } from "@/lib/data";

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <ScrollReveal>
          <SectionHeader
            badge="Testimonials"
            title="What Our"
            titleHighlight="Clients Say"
            description="Trusted by project directors and operations managers at Nigeria's leading energy companies."
            align="center"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}

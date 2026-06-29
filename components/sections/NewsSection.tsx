import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import NewsCard from "@/components/shared/NewsCard";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { news } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export default function NewsSection() {
  return (
    <section className="section-padding bg-slate-50">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <ScrollReveal>
            <SectionHeader
              badge="Latest News"
              title="Orbital"
              titleHighlight="Updates"
              description="Stay up to date with our latest projects, partnerships, and announcements."
              align="left"
            />
          </ScrollReveal>
          <ScrollReveal>
            <Button href="/news" variant="secondary" size="md">
              All News
              <ArrowRight className="w-4 h-4" />
            </Button>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, i) => (
            <NewsCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}

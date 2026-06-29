import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import NewsCard from "@/components/shared/NewsCard";
import CTASection from "@/components/sections/CTASection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { news } from "@/lib/data";

export const metadata: Metadata = {
  title: "News & Updates",
  description:
    "The latest news, project announcements, and industry updates from Orbital Resources Limited.",
};

export default function NewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-end bg-navy-950 overflow-hidden pt-24">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80"
            alt="News"
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
              Media
            </span>
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-white mt-4">
              News & <span className="text-gradient">Updates</span>
            </h1>
          </ScrollReveal>
        </Container>
      </section>

      {/* News grid */}
      <section className="section-padding bg-white">
        <Container>
          <ScrollReveal>
            <SectionHeader
              badge="Latest"
              title="Orbital"
              titleHighlight="Headlines"
              description="Stay up to date with company news, project milestones, and industry insights from our team."
              align="center"
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {news.map((item, i) => (
              <NewsCard key={item.id} item={item} index={i} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}

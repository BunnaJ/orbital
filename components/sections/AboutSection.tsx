import Image from "next/image";
import { CheckCircle, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { fadeInLeft, fadeInRight } from "@/lib/animations";

const highlights = [
  "Indigenous company with global partnerships",
  "Serving Nigeria and the West African sub-region",
  "Partnering with major IOCs and NOCs since 2009",
  "Internationally certified QHSE management systems",
];

export default function AboutSection() {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <ScrollReveal variants={fadeInLeft}>
            <div className="relative">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-3/2 sm:aspect-4/5 max-w-sm sm:max-w-md mx-auto lg:mx-0">
                <Image
                  src="/orbit6.jpg"
                  alt="Orbital Resources team at work"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-navy-950/60 via-transparent to-transparent" />
              </div>

              {/* Floating stat card */}
              <div className="absolute -right-2 sm:-right-4 lg:-right-8 bottom-6 sm:bottom-10 glass-white rounded-xl sm:rounded-2xl p-3 sm:p-5 shadow-lg sm:shadow-xl max-w-[130px] sm:max-w-[160px]">
                <p className="font-display text-xl sm:text-3xl font-bold text-navy-950">
                  20+
                </p>
                <p className="text-[10px] sm:text-xs text-slate-500 mt-0.5 leading-snug">
                  Years delivering excellence
                </p>
              </div>

              {/* Accent block */}
              <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-14 h-14 sm:w-20 sm:h-20 bg-amber-500 rounded-2xl sm:rounded-3xl -z-10" />
            </div>
          </ScrollReveal>

          {/* Text side */}
          <ScrollReveal variants={fadeInRight}>
            <div className="flex flex-col gap-6">
              <Badge variant="amber">About Orbital Resources</Badge>

              <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-navy-950 leading-tight">
                An Indigenous Company
                <br />
                with a{" "}
                <span className="text-gradient">Global Mindset</span>
              </h2>

              <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                Orbital Resources Limited (ORL) is an indigenous service company
                incorporated to provide oilfield solutions, equipment, and
                support services to local and multinational operators in Nigeria
                and the West African sub-region.
              </p>

              <p className="text-slate-500 text-base leading-relaxed">
                We and our global partners work together in synergy to provide
                the highest available value — bringing international best
                practices to every project we undertake on the continent.
              </p>

              <ul className="space-y-3">
                {highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-slate-600"
                  >
                    <CheckCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-4 pt-2">
                <Button href="/about" variant="secondary" size="md">
                  Our Full Story
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}

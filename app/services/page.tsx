import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import CTASection from "@/components/sections/CTASection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { fadeInUp } from "@/lib/animations";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "ORL offers specialist consultancy, full EPCI engineering services, and marine solutions for Nigeria's oil and gas sector.",
};

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "QHSE", href: "/qhse" },
  { label: "Contact Us", href: "/contact" },
];

const serviceCards = [
  {
    slug: "consultancy",
    number: "01",
    title: "Consultancy Services",
    image: "/serv1.gif",
    summary:
      "We provide specialized consulting services to the petroleum industry. Our oil and gas consulting services include equipment procurement and training/certification.",
  },
  {
    slug: "engineering",
    number: "02",
    title: "Engineering Services",
    image: "/serv2.gif",
    summary:
      "We are a highly qualified solution provider in engineering services and can deliver turn key projects (EPCI) in co-operation with our foreign partners.",
  },
  {
    slug: "marine",
    number: "03",
    title: "Marine Services",
    image: "/serv3.gif",
    summary:
      "We are emerging as a leading provider of engineered marine solutions to the Nigerian oil and gas sector. We have an exceptional reputation for professional standards.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[42vh] flex items-end bg-navy-950 overflow-hidden pt-24">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/orbit8.gif" alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-linear-to-t from-navy-950 via-navy-950/70 to-navy-950/30" />
        </div>
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <Container className="relative pb-10 sm:pb-16">
          <ScrollReveal>
            {/* Quick nav */}
            <div className="flex flex-wrap gap-2 mb-6">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-1 rounded-full glass text-white/70 hover:text-amber-400 text-[11px] sm:text-xs font-medium transition-colors duration-200 border border-white/10 hover:border-amber-400/30"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <h1 className="font-display text-xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight max-w-3xl mb-3 sm:mb-5">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              We are never satisfied with anything less, and continually improve our processes until your requirements are met.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* ── Service cards ── */}
      <section className="section-padding bg-slate-50">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-wider mb-4">
                What We Offer
              </span>
              <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-navy-950">
                Services We <span className="text-gradient">Proffer</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-7">
            {serviceCards.map((card, i) => (
              <ScrollReveal key={card.slug} variants={fadeInUp} delay={i * 0.1}>
                <div className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-100 hover:border-amber-200 hover:shadow-xl hover:shadow-amber-50/60 transition-all duration-500 flex flex-col h-full">
                  {/* Image */}
                  <div className="relative overflow-hidden h-44 sm:h-48 lg:h-56 bg-navy-950">
                    <div className="absolute top-3 left-3 z-10 w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center shadow-lg">
                      <span className="font-display font-bold text-navy-950 text-xs">{card.number}</span>
                    </div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-navy-950/50 to-transparent" />
                  </div>

                  {/* Body */}
                  <div className="p-5 sm:p-6 flex flex-col flex-1">
                    <h3 className="font-display text-base sm:text-lg font-bold text-navy-950 mb-2">
                      {card.title}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed flex-1">
                      {card.summary}
                    </p>
                    <div className="mt-4 pt-4 border-t border-slate-100">
                      <Link
                        href={`/services/${card.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-amber-600 hover:text-amber-700 transition-colors duration-200 group/link"
                      >
                        Learn more
                        <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}

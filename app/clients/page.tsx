import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import CTASection from "@/components/sections/CTASection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { fadeInLeft, fadeInRight, fadeInUp } from "@/lib/animations";

export const metadata: Metadata = {
  title: "Our Clients",
  description:
    "We regularly provide world-class services for some of the industry's largest corporations and companies.",
};

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "QHSE", href: "/qhse" },
  { label: "Contact Us", href: "/contact" },
];

const clientImages = [
  { src: "/cl1.gif", alt: "Client 1" },
  { src: "/cl2.gif", alt: "Client 2" },
  { src: "/cl3.gif", alt: "Client 3" },
  { src: "/cl4.gif", alt: "Client 4" },
  { src: "/cl5.gif", alt: "Client 5" },
  { src: "/cl6.gif", alt: "Client 6" },
];

const commitments = [
  "Dedicated account management for every engagement",
  "Transparent project reporting and documentation",
  "24/7 operational support and emergency response",
  "Fully insured and bonded operations",
  "Strict adherence to client QHSE requirements",
  "Local content compliance and community sensitivity",
  "Confidential handling of proprietary project data",
  "Multi-project framework agreements available",
];

const industries = [
  { name: "Oil Exploration & Production" },
  { name: "Marine & Offshore" },
  { name: "Power & Energy" },
  { name: "Petrochemical & Refining" },
];

export default function ClientsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[42vh] flex items-end bg-navy-950 overflow-hidden pt-24">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/orbit13.gif" alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-linear-to-t from-navy-950 via-navy-950/70 to-navy-950/30" />
        </div>
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <Container className="relative pb-10 sm:pb-16">
          <ScrollReveal>
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
            <h1 className="font-display text-xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight mb-3">
              Our <span className="text-gradient">Clients</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              We regularly provide world-class services for some of the industry&apos;s largest corporations and companies (we really know these people and they really call our offices all the time).
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* ── Client logos ── */}
      <section className="section-padding bg-white">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-10 sm:mb-14">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-wider mb-4">
                Who We Work With
              </span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-950">
                Trusted by <span className="text-gradient">Industry Leaders</span>
              </h2>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mt-4">
                From Nigeria&apos;s national oil company to the world&apos;s largest international operators — ORL is the partner they choose.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
            {clientImages.map((client, i) => (
              <ScrollReveal key={client.src} delay={i * 0.08} variants={fadeInUp}>
                <div
                  className="relative overflow-hidden rounded-2xl border-2 border-slate-100 bg-white hover:border-amber-200 hover:shadow-lg hover:shadow-amber-50 transition-all duration-500 group"
                  style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.9)" }}
                >
                  <div className="h-28 sm:h-40 lg:h-52 overflow-hidden flex items-center justify-center p-3 sm:p-6 bg-white">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={client.src}
                      alt={client.alt}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5" />
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-amber-500/0 via-amber-500 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Industries served ── */}
      <section className="section-padding bg-slate-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
            <ScrollReveal variants={fadeInLeft}>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-wider mb-5">
                Sectors
              </span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-950 leading-tight mb-6">
                Industries We <span className="text-gradient">Serve</span>
              </h2>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-8">
                Our multidisciplinary teams have worked across the full energy value chain — delivering measurable results for operators at every scale, from independent producers to major IOCs.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-amber-600 transition-colors duration-200"
              >
                See all services <ArrowRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>

            <ScrollReveal variants={fadeInRight}>
              <div className="space-y-3">
                {industries.map((ind, i) => (
                  <div
                    key={ind.name}
                    className="flex items-center gap-3 p-4 sm:p-5 rounded-2xl bg-white border border-slate-100 hover:border-amber-200 hover:shadow-sm transition-all duration-300"
                  >
                    <span className="w-7 h-7 rounded-lg bg-amber-50 border border-amber-100 text-amber-600 text-xs font-bold flex items-center justify-center shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-medium text-navy-950 text-sm sm:text-base">{ind.name}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ── Our commitments ── */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-start">
            <ScrollReveal variants={fadeInLeft}>
              <div className="lg:sticky lg:top-28 space-y-5">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-wider">
                  Client Experience
                </span>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-950 leading-tight">
                  What You Can <span className="text-gradient">Expect</span>
                </h2>
                <div className="w-12 h-1 bg-amber-500 rounded-full" />
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                  Every client engagement at ORL is handled with the same rigour, professionalism, and care — whether you are a first-time partner or a long-standing client. We are built around your success.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 h-10 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-navy-950 font-bold text-sm transition-all duration-200 shadow-lg shadow-amber-500/25"
                >
                  Start a Conversation <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal variants={fadeInRight}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {commitments.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-amber-200 hover:bg-amber-50/40 transition-all duration-300"
                  >
                    <CheckCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import CTASection from "@/components/sections/CTASection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { fadeInLeft, fadeInRight } from "@/lib/animations";

export const metadata: Metadata = {
  title: "QHSE",
  description:
    'Our objective is to "do it right first time". In the process, we avoid mistakes and improve our efficiency.',
};

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "QHSE", href: "/qhse" },
  { label: "Contact Us", href: "/contact" },
];

const partnerLogos = [
  { src: "/pat1.gif", alt: "Partner 1" },
  { src: "/pat2.gif", alt: "Partner 2" },
  { src: "/pat3.gif", alt: "Partner 3" },
  { src: "/pat4.jpg", alt: "Partner 4" },
];

export default function QHSEPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[42vh] flex items-end bg-navy-950 overflow-hidden pt-24">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/orbit11.gif" alt="" className="w-full h-full object-cover opacity-20" />
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
              QHSE
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              Our objective is to &ldquo;do it right first time&rdquo;. In the process, we avoid mistakes and improve our efficiency.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* ── Quality Assurance ── */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left sticky heading */}
            <ScrollReveal variants={fadeInLeft}>
              <div className="lg:sticky lg:top-28 space-y-5">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-wider">
                  01
                </span>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-950 leading-tight">
                  Quality <span className="text-gradient">Assurance</span>
                </h2>
                <div className="w-12 h-1 bg-amber-500 rounded-full" />
                <p className="text-slate-400 text-sm leading-relaxed">
                  Quality is the responsibility of everybody and each staff member is tasked to ensure quality in all activities.
                </p>
              </div>
            </ScrollReveal>

            {/* Right content */}
            <ScrollReveal variants={fadeInRight}>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Our Quality Management System is structured to meet the Quality Assurance requirements of our clients, and the intent of British Standard 5750 and ISO9001. These are integrated with those of ORL, to form a combined and compatible project quality package. Our Quality Management policy covers the formalized procedures we have adopted to plan, perform, monitor and record all our activities in a manner that guarantees us that contractual specifications can be achieved. These procedures have been subjected to independent third party assessment and approval.
                </p>
                <p>
                  In principle, our Quality procedures refer to the management of all activities associated with the totality of features and characteristics of our products and/or services that bear on its ability of satisfy pre-defined requirements.
                </p>
                <p>
                  For us, quality is a vital component of our value system. It is ensuring that our products and services consistently meet global standards of practice. Our objective is to &ldquo;do it right first time&rdquo;. In the process, we avoid mistakes and improve our efficiency.
                </p>
                <p>
                  At ORL, quality is the responsibility of everybody and each staff is tasked to ensure quality in all activities. This approach helps us pass the quality commitment across all cadres of staff.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ── Health, Safety & Environment ── */}
      <section className="section-padding bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <Container className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left sticky heading */}
            <ScrollReveal variants={fadeInLeft}>
              <div className="lg:sticky lg:top-28 space-y-5">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
                  02
                </span>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                  Health, Safety &amp;{" "}
                  <span className="text-gradient">Environment</span>
                </h2>
                <div className="w-12 h-1 bg-amber-500 rounded-full" />
                <p className="text-slate-400 text-sm leading-relaxed">
                  Safety is everyone's responsibility at ORL — from the boardroom to the field.
                </p>
              </div>
            </ScrollReveal>

            {/* Right content */}
            <ScrollReveal variants={fadeInRight}>
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  Health, Safety and Environment (HSE) has always been a core focus for ORL. We pride ourselves on providing a safe working environment for all our employees, sub contractors and customers.
                </p>
                <p>
                  The creation of several HSE programs and initiatives has ensured the consistent improvement of our safety records every year. Safety is everyone's responsibility at ORL, all our employees are given a compulsory HSE training to ensure they are equipped with the knowledge of how to recognize and combat potential danger and hazards.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ── Our Partners ── */}
      <section className="section-padding bg-slate-50">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-10 sm:mb-14">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-wider mb-4">
                Alliances
              </span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-950 mb-4">
                Our <span className="text-gradient">Partners</span>
              </h2>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                With a strong alliance comes a more efficient way to make greater innovations at a shattering pace.
                We proudly associate ourselves with the following companies:
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {partnerLogos.map((logo, i) => (
              <ScrollReveal key={logo.src} delay={i * 0.1}>
                <div
                  className="relative overflow-hidden rounded-2xl border-2 border-slate-200 bg-white hover:border-amber-300 hover:shadow-lg hover:shadow-amber-50 transition-all duration-500 group"
                  style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.8)" }}
                >
                  <div className="h-32 sm:h-40 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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

      <CTASection />
    </>
  );
}

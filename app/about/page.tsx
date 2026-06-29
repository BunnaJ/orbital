import type { Metadata } from "next";
import Link from "next/link";
import { Target, Eye, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import CTASection from "@/components/sections/CTASection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { fadeInLeft, fadeInRight } from "@/lib/animations";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Founded in 2000, Orbital Resources Limited delivers world-class services to the sub-Saharan energy industry through innovative, technology-driven solutions.",
};

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "QHSE", href: "/qhse" },
  { label: "Contact Us", href: "/contact" },
];

const values = [
  "ORL will work in partnership with our customers, employees, and owners to meet their requirements.",
  "We will not be satisfied with anything less, and we will continually improve our processes until those requirements are met.",
  "We will achieve these objectives with the highest degree of integrity and professionalism, and in a manner that will earn the respect of each group to which we are committed.",
  "ORL will understand and conform to our customer's requirements by providing defect-free products and services.",
  "We will provide our customers with products and services that are of the highest available value.",
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[48vh] flex items-end bg-navy-950 overflow-hidden pt-24">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/orbit9.gif" alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-linear-to-t from-navy-950 via-navy-950/70 to-navy-950/30" />
        </div>
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <Container className="relative pb-16">
          <ScrollReveal>
            {/* Quick nav */}
            <div className="flex flex-wrap gap-2 mb-8">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-1.5 rounded-full glass text-white/70 hover:text-amber-400 text-xs font-medium transition-colors duration-200 border border-white/10 hover:border-amber-400/30"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-3">
              Our job and passion…
            </p>
            <h1 className="font-display text-lg sm:text-3xl lg:text-4xl font-bold text-white leading-tight max-w-2xl">
              We Deliver World Class Services to the{" "}
              <span className="text-gradient">Sub-Saharan Energy Industry</span>
            </h1>
          </ScrollReveal>
        </Container>
      </section>

      {/* ── Our Partners ── */}
      <section className="section-padding bg-navy-950 border-t border-white/8">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-5">
                Alliances
              </span>
              <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight mb-4">
                Our <span className="text-gradient">Partners</span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                With a strong alliance comes a more efficient way to make greater innovations at a shattering pace.
                We proudly associate ourselves with the following companies:
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {["/pat1.gif", "/pat2.gif", "/pat3.gif", "/pat4.jpg"].map((src, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div
                  className="relative overflow-hidden rounded-2xl border-2 border-white/15 bg-white/5 hover:border-amber-400/40 hover:bg-white/10 transition-all duration-500 group"
                  style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)" }}
                >
                  <div className="h-28 sm:h-44 lg:h-56 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt={`Partner ${i + 1}`}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
                  {/* Amber bottom accent on hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-amber-500/0 via-amber-500 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Our Story ── */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* Left: heading + accent */}
            <ScrollReveal variants={fadeInLeft}>
              <div className="lg:sticky lg:top-28 space-y-6">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-wider">
                  Our Story
                </span>
                <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-navy-950 leading-tight">
                  Founded on{" "}
                  <span className="text-gradient">Excellence</span>
                </h2>
                <div className="flex items-center gap-4 pt-2">
                  <div className="text-center p-4 rounded-2xl bg-amber-50 border border-amber-100 min-w-[90px]">
                    <p className="font-display text-3xl font-bold text-amber-600">2000</p>
                    <p className="text-xs text-slate-500 mt-0.5">Founded</p>
                  </div>
                </div>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-amber-600 transition-colors duration-200 mt-2"
                >
                  Explore Our Services <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>

            {/* Right: paragraphs */}
            <ScrollReveal variants={fadeInRight}>
              <div className="space-y-5 text-slate-600 text-base leading-relaxed">
                <p>
                  Founded in 2000, Orbital Resources Ltd (ORL) is one of Nigeria's most reputed organisations and was incorporated in 2001 to deliver world class services to the sub-Saharan Energy industry. Our technology driven offerings enable our clients to focus on their core competencies, consequently extracting optimum value from operations.
                </p>
                <p>
                  Superior technology, responsive versatility, and quality performance ensures reliable and fast turnaround on all our products and services.
                </p>
                <p>
                  ORL is an indigenous service company with global partnerships incorporated to provide oil field solutions, equipments and support services to local and multinational operators in Nigeria and the West African sub-region. ORL provides a wide range of services including Engineering, Procurement, Construction and Installation (EPCI) Services, Procurement, Shipping and Logistics services.
                </p>
                <p>
                  Till date, ORL worked with more than 50 quality driven clients around Nigeria in Oil Exploration & Production, Power and Capital Goods manufacturing industries to maximise their production and improve efficiency and performance.
                </p>
                <p>
                  The multi-disciplinary certified and experienced personnel team of professionals at ORL have the qualifications, the education and the experience to meet rigorous standards in delivering solutions to the energy industry whether serving the Private or Public Sector.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ── Our Values ── */}
      <section className="section-padding bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <Container className="relative">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
                What We Stand For
              </span>
              <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight">
                Our <span className="text-gradient">Values</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-4 max-w-3xl mx-auto">
            {values.map((value, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="flex gap-4 p-5 sm:p-6 rounded-2xl glass hover:bg-white/10 transition-colors duration-300">
                  <span className="font-display text-2xl font-bold text-amber-500/40 leading-none select-none shrink-0 w-7">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {value}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="section-padding bg-slate-50">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-wider mb-4">
                Direction
              </span>
              <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-navy-950 leading-tight">
                Mission &amp; <span className="text-gradient">Vision</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mission */}
            <ScrollReveal variants={fadeInLeft}>
              <div className="relative bg-navy-950 rounded-3xl p-8 sm:p-10 h-full overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-amber-500 to-orange-500 rounded-t-3xl" />
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-amber-400" strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-4">
                  Our Mission
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  To provide innovative solutions to the Nigerian Energy Industry through efficiency in service delivery in a manner that is cost effective, environmental friendly and socially sustainable without compromising quality and safety.
                </p>
              </div>
            </ScrollReveal>

            {/* Vision */}
            <ScrollReveal variants={fadeInRight}>
              <div className="relative bg-slate-800 rounded-3xl p-8 sm:p-10 h-full overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-amber-500 to-amber-400 rounded-t-3xl" />
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-amber-500/8 rounded-full blur-2xl pointer-events-none" />
                <div className="w-12 h-12 rounded-2xl bg-amber-500/15 flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6 text-amber-400" strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-4">
                  Our Vision
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Our vision is to become the preferred partner for solutions in Nigeria's energy and process industries through living our values.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}

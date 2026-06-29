import type { Metadata } from "next";
import Link from "next/link";
import { Mail, ChevronRight, Users, Lightbulb, TrendingUp, Shield } from "lucide-react";
import Container from "@/components/ui/Container";
import CTASection from "@/components/sections/CTASection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { fadeInLeft, fadeInRight, fadeInUp } from "@/lib/animations";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Orbital Resources Limited and be part of the Orbital Experience — we are always looking for creative and dynamic professionals.",
};

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "QHSE", href: "/qhse" },
  { label: "Contact Us", href: "/contact" },
];

const roles = [
  "Drilling Engineers",
  "Mechanical Engineers / Technicians",
  "Depot Managers",
  "Business Development Executives",
  "Insurance Officers",
  "Project Engineers",
  "Finance Officers",
  "IT Professionals",
  "Marine Operations Specialists",
  "HSE Officers",
  "Procurement & Logistics Officers",
  "Process Engineers",
];

const values = [
  {
    Icon: Users,
    title: "People First",
    description:
      "Our greatest asset is our people. We invest in growth, mentorship, and the professional development of every team member.",
  },
  {
    Icon: Lightbulb,
    title: "Innovation Driven",
    description:
      "We encourage creative thinking and bold ideas. If you have a better way of doing something, we want to hear it.",
  },
  {
    Icon: TrendingUp,
    title: "Rapid Growth",
    description:
      "ORL is a fast-expanding company. That means real opportunities to grow with us — take on new responsibilities and move up quickly.",
  },
  {
    Icon: Shield,
    title: "Safety Culture",
    description:
      "We maintain world-class QHSE standards on every project. You will work in an environment where your safety is never compromised.",
  },
];

const perks = [
  "Competitive compensation packages",
  "Professional development & training",
  "International project exposure",
  "Health & life insurance",
  "Collaborative team culture",
  "QHSE-first work environment",
  "Mentorship from industry veterans",
  "Performance-based advancement",
];

export default function CareersPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[42vh] flex items-end bg-navy-950 overflow-hidden pt-24">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* Decorative image strip */}
        <div className="absolute top-0 right-0 bottom-0 w-[40%] hidden lg:block overflow-hidden">
          <div className="grid grid-cols-2 h-full gap-1 p-1 opacity-30">
            {["/orbit1.jpg", "/orbit2.jpg", "/orbit3.jpg", "/orbit4.jpg"].map((src, i) => (
              <div key={i} className="relative overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <div className="absolute inset-0 bg-linear-to-r from-navy-950 via-navy-950/60 to-transparent" />
        </div>

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
            <h1 className="font-display text-xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-3 max-w-2xl">
              <span className="text-gradient">Careers</span> at Orbital Resources
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
              We are always interested in hiring experienced, technical professionals with a wide range of skills. You have an opportunity to be part of what we call the <span className="text-amber-400 font-semibold">Orbital Experience</span>.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* ── The Orbital Experience ── */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal variants={fadeInLeft}>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-wider mb-5">
                Join Us
              </span>
              <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-navy-950 leading-tight mb-5">
                We Are Always on the <span className="text-gradient">Look Out</span>
              </h2>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  We are always on the look out for creative and dynamic people to help build and grow our rapidly expanding company.
                </p>
                <p>
                  We employ a range of people with different skills required within the Oil &amp; Gas environment and its associate industry which includes drilling engineers, mechanical engineers/technicians, depot managers, business development executives, insurance officers, project engineers, finance officers, IT professionals and more.
                </p>
                <p>
                  We are not just looking for &ldquo;anyone&rdquo;. We are looking for the best talents available. People with the drive and ambition to make the most of all the opportunities we offer and can match and surpass our energy, vision and ideas.
                </p>
              </div>
            </ScrollReveal>

            {/* Image collage */}
            <ScrollReveal variants={fadeInRight}>
              <div className="grid grid-cols-2 gap-3">
                {["/orbit6.jpg", "/orbit3.jpg", "/orbit2.jpg", "/orbit4.jpg"].map((src, i) => (
                  <div
                    key={i}
                    className="relative overflow-hidden rounded-2xl border-2 border-slate-100 h-32 sm:h-44"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt="" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-linear-to-t from-navy-950/20 to-transparent" />
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ── Why ORL ── */}
      <section className="section-padding bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <Container className="relative">
          <ScrollReveal>
            <div className="text-center mb-10 sm:mb-14">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
                Life at ORL
              </span>
              <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                Why Work <span className="text-gradient">With Us?</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.1} variants={fadeInUp}>
                <div className="glass rounded-2xl p-5 sm:p-7 h-full hover:bg-white/10 transition-colors duration-300">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4">
                    <v.Icon className="w-5 h-5 text-amber-400" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display text-base sm:text-lg font-bold text-white mb-2">{v.title}</h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{v.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Perks grid */}
          <ScrollReveal>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {perks.map((perk) => (
                <div key={perk} className="flex items-center gap-2 text-xs text-slate-300 glass rounded-xl p-3">
                  <ChevronRight className="w-3 h-3 text-amber-400 shrink-0" />
                  {perk}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ── Roles we hire ── */}
      <section className="section-padding bg-slate-50">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-10 sm:mb-14">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-wider mb-4">
                Open Disciplines
              </span>
              <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-navy-950">
                Roles We <span className="text-gradient">Hire For</span>
              </h2>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mt-4">
                We recruit across a wide spectrum of disciplines. Don&apos;t see your exact role? We still want to hear from you.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {roles.map((role, i) => (
              <ScrollReveal key={role} delay={i * 0.05} variants={fadeInUp}>
                <div className="flex items-center gap-3 p-4 sm:p-5 rounded-2xl bg-white border border-slate-100 hover:border-amber-200 hover:shadow-sm transition-all duration-300">
                  <span className="w-7 h-7 rounded-lg bg-amber-50 border border-amber-100 text-amber-600 text-[10px] font-bold flex items-center justify-center shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-navy-950 text-sm font-medium">{role}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Apply ── */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal variants={fadeInLeft}>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-wider mb-5">
                How to Apply
              </span>
              <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-navy-950 leading-tight mb-5">
                Ready to Join the <span className="text-gradient">Orbital Team?</span>
              </h2>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                <p>
                  If you possess the qualities we are looking for, you are welcome to submit your C.V to our careers email. Depending on the type of job you are applying for, your details will be processed by the section of our HR department dedicated to handling recruitment applications.
                </p>
                <p>
                  We review every application and will be in touch if your profile matches a current or upcoming opportunity.
                </p>
              </div>
              <a
                href="mailto:careers@orbital-ng.com"
                className="inline-flex items-center gap-2 h-10 sm:h-11 px-4 sm:px-7 rounded-xl sm:rounded-2xl bg-amber-500 hover:bg-amber-400 text-navy-950 font-bold text-xs sm:text-sm transition-all duration-200 shadow-lg shadow-amber-500/25 active:scale-95 max-w-full"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span className="truncate">careers@orbital-ng.com</span>
              </a>
            </ScrollReveal>

            <ScrollReveal variants={fadeInRight}>
              <div className="relative overflow-hidden rounded-3xl bg-navy-950">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/orbit5.gif" alt="ORL operations" className="w-full aspect-4/3 object-cover opacity-70" />
                <div className="absolute inset-0 bg-linear-to-t from-navy-950 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-1">Our Promise</p>
                  <p className="text-white font-display text-lg sm:text-xl font-bold leading-snug">
                    "We are not just looking for anyone — we are looking for the best."
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}

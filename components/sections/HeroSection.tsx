"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/orbit1.jpg",
    badge: "Oil & Gas Services",
    headline: "Delivering World Class Services",
    highlight: "to the Sub-Saharan Energy Industry",
    description:
      "Orbital Resources Limited brings global engineering standards and deep local expertise to every project across Nigeria and the West African sub-region.",
    cta: { label: "Our Services", href: "/services" },
    ctaSecondary: { label: "About Us", href: "/about" },
  },
  {
    image: "/orbit2.jpg",
    badge: "Engineering Services",
    headline: "Complete EPCI Project Delivery",
    highlight: "You Can Rely On",
    description:
      "From concept and FEED through to commissioning and handover, our highly qualified engineering teams deliver complex projects on time and to the highest international standards.",
    cta: { label: "Engineering", href: "/services#engineering" },
    ctaSecondary: { label: "Projects", href: "/projects" },
  },
  {
    image: "/orbit3.jpg",
    badge: "Marine Services",
    headline: "Leading Engineered Marine",
    highlight: "Solutions in Nigeria",
    description:
      "ORL is emerging as the premier provider of marine engineering solutions to the Nigerian oil and gas sector — from offshore vessel support to deepwater subsea operations.",
    cta: { label: "Marine", href: "/services#marine" },
    ctaSecondary: { label: "Projects", href: "/projects" },
  },
  {
    image: "/orbit4.jpg",
    badge: "Global Partnerships",
    headline: "Indigenous Expertise,",
    highlight: "International Standards",
    description:
      "We combine 15+ years of on-the-ground Nigerian knowledge with world-class global partnerships to provide the highest available value to IOCs, NOCs, and independent operators.",
    cta: { label: "Our Story", href: "/about" },
    ctaSecondary: { label: "Clients", href: "/clients" },
  },
  {
    image: "/orbit6.jpg",
    badge: "QHSE Excellence",
    headline: "Zero Harm, Every Project.",
    highlight: "Every Time.",
    description:
      "Our commitment to Quality, Health, Safety, and Environment is absolute and non-negotiable. Internationally certified management systems underpin every operation we undertake.",
    cta: { label: "QHSE Policy", href: "/qhse" },
    ctaSecondary: { label: "Contact", href: "/contact" },
  },
];

const SLIDE_DURATION = 6000;

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, SLIDE_DURATION);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden bg-navy-950"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Hero image slider"
    >
      {/* ── Slide images (Ken Burns crossfade) ── */}
      <AnimatePresence initial={false}>
        <motion.div
          key={`img-${current}`}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
          aria-hidden="true"
        >
          <Image
            src={slides[current].image}
            alt={slides[current].headline}
            fill
            priority={current === 0}
            sizes="100vw"
            className="object-cover"
          />
          {/* Layered dark overlay for text legibility */}
          <div className="absolute inset-0 bg-linear-to-r from-navy-950/90 via-navy-950/65 to-navy-950/30" />
          <div className="absolute inset-0 bg-linear-to-t from-navy-950/80 via-transparent to-navy-950/30" />
        </motion.div>
      </AnimatePresence>

      {/* ── Subtle grid pattern on top ── */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* ── Slide text content ── */}
      <div className="relative flex-1 flex items-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${current}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="max-w-3xl"
            >
              {/* Badge */}
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-bold text-amber-400 tracking-widest uppercase mb-6"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                {slides[current].badge}
              </motion.span>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.6 }}
                className="font-display text-2xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-3"
              >
                {slides[current].headline}
                <br />
                <span className="text-gradient">{slides[current].highlight}</span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.55 }}
                className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mb-9"
              >
                {slides[current].description}
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.52, duration: 0.5 }}
                className="flex flex-row gap-3"
              >
                <Link
                  href={slides[current].cta.href}
                  className="inline-flex items-center justify-center gap-1.5 h-9 px-4 sm:h-12 sm:px-7 rounded-lg sm:rounded-2xl bg-amber-500 hover:bg-amber-400 text-navy-950 font-bold text-xs sm:text-base transition-all duration-200 shadow-lg shadow-amber-500/30 active:scale-95 whitespace-nowrap"
                >
                  {slides[current].cta.label}
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </Link>
                <Link
                  href={slides[current].ctaSecondary.href}
                  className="inline-flex items-center justify-center gap-1.5 h-9 px-4 sm:h-12 sm:px-7 rounded-lg sm:rounded-2xl border border-white/30 hover:border-white/60 text-white font-semibold text-xs sm:text-base transition-all duration-200 hover:bg-white/6 active:scale-95 whitespace-nowrap"
                >
                  {slides[current].ctaSecondary.label}
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ── Navigation controls ── */}
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pb-6">
        <div className="flex items-center justify-between">
          {/* Slide dots + counter */}
          <div className="flex items-center gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  i === current
                    ? "w-8 h-2 bg-amber-500"
                    : "w-2 h-2 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
            <span className="text-white/40 text-xs font-mono ml-2 select-none">
              {String(current + 1).padStart(2, "0")} /{" "}
              {String(slides.length).padStart(2, "0")}
            </span>
          </div>

          {/* Arrow controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-white/15 hover:text-amber-400 transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next slide"
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-white/15 hover:text-amber-400 transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-4 h-px bg-white/10 rounded-full overflow-hidden">
          <motion.div
            key={`progress-${current}`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: paused ? undefined : 1 }}
            transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
            className="h-full bg-linear-to-r from-amber-500 to-amber-400 origin-left rounded-full"
          />
        </div>
      </div>

    </section>
  );
}

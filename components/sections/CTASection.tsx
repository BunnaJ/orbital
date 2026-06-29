"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function CTASection() {
  return (
    <section className="section-padding bg-navy-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/8 blur-3xl rounded-full pointer-events-none" />

      <Container className="relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col items-center text-center gap-8 max-w-3xl mx-auto"
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-semibold text-amber-400 tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              Ready to Start?
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="font-display text-2xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight"
          >
            Have a Project in Mind?{" "}
            <span className="text-gradient">Let&apos;s Talk.</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-slate-400 text-lg leading-relaxed"
          >
            Whether you need specialist consultancy, full EPCI delivery, or
            marine support, our team is ready to help you achieve your
            project objectives.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 h-10 px-5 sm:h-14 sm:px-9 rounded-xl sm:rounded-2xl bg-amber-500 hover:bg-amber-400 text-navy-950 font-bold text-xs sm:text-base transition-all duration-200 shadow-lg shadow-amber-500/25 active:scale-95"
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+2348033489272"
              className="inline-flex items-center justify-center gap-2 h-10 px-5 sm:h-14 sm:px-9 rounded-xl sm:rounded-2xl border-2 border-white/30 hover:border-white text-white font-semibold text-xs sm:text-base transition-all duration-200 hover:bg-white/5 active:scale-95"
            >
              <Phone className="w-4 h-4" />
              Call Us Now
            </a>
          </motion.div>

          {/* Trust note */}
          <motion.p variants={fadeInUp} className="text-slate-500 text-sm">
            Based in Ikoyi, Lagos · Serving Nigeria and West Africa
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}

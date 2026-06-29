"use client";

import { motion } from "framer-motion";
import {
  Globe,
  ShieldCheck,
  Users,
  Award,
  TrendingUp,
  Clock,
  type LucideIcon,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { whyChooseUs } from "@/lib/data";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const iconMap: Record<string, LucideIcon> = {
  globe: Globe,
  "shield-check": ShieldCheck,
  users: Users,
  award: Award,
  "trending-up": TrendingUp,
  clock: Clock,
};

export default function WhyChooseUsSection() {
  return (
    <section className="section-padding bg-navy-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative">
        <ScrollReveal>
          <SectionHeader
            badge="Why ORL"
            title="The Orbital"
            titleHighlight="Advantage"
            description="We combine local knowledge with global expertise to deliver results that matter — on time, within budget, and to the highest safety standards."
            align="center"
            theme="dark"
          />
        </ScrollReveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
        >
          {whyChooseUs.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Globe;
            return (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                custom={i}
                className="group p-6 rounded-2xl border border-white/8 hover:border-white/20 hover:bg-white/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-5 group-hover:bg-amber-500/20 transition-colors duration-300">
                  <Icon
                    className="w-6 h-6 text-amber-400"
                    strokeWidth={1.75}
                  />
                </div>
                <h3 className="font-display text-base font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}

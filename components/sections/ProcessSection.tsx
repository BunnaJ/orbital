"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { processSteps } from "@/lib/data";

export default function ProcessSection() {
  return (
    <section className="section-padding bg-slate-50">
      <Container>
        <ScrollReveal>
          <SectionHeader
            badge="Our Process"
            title="How We"
            titleHighlight="Deliver"
            description="A disciplined, transparent process from first consultation through to commissioning and handover."
            align="center"
          />
        </ScrollReveal>

        <div className="relative mt-20">
          {/* Connecting line on desktop */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex flex-col items-center text-center gap-4"
              >
                {/* Step number circle */}
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center shadow-sm hover:border-amber-400 hover:shadow-amber-100 transition-all duration-300 group cursor-default">
                    <span className="font-display text-lg font-bold text-navy-950">
                      {step.step}
                    </span>
                  </div>
                  {i < processSteps.length - 1 && (
                    <div className="lg:hidden absolute top-1/2 -right-4 w-8 h-px bg-slate-200" />
                  )}
                </div>

                <div>
                  <h3 className="font-display text-sm font-bold text-navy-950 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

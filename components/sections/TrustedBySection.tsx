"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

const clientLogos = [
  { src: "/orbit9.gif",  alt: "Client 1" },
  { src: "/orbit10.gif", alt: "Client 2" },
  { src: "/orbit11.gif", alt: "Client 3" },
  { src: "/orbit12.gif", alt: "Client 4" },
  { src: "/orbit13.gif", alt: "Client 5" },
  { src: "/orbit14.gif", alt: "Client 6" },
];

export default function TrustedBySection() {
  return (
    <section className="py-14 bg-slate-50 border-y border-slate-100">
      <Container>
        <p className="text-center text-xs font-bold tracking-widest text-slate-400 uppercase mb-10">
          Trusted by leading energy companies
        </p>

        {/* Desktop: single row — Mobile: 3 × 2 grid */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 sm:gap-4 items-center">
          {clientLogos.map((logo, i) => (
            <motion.div
              key={logo.src}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="flex items-center justify-center p-3 sm:p-4 rounded-2xl bg-white border border-slate-100 hover:border-amber-200 hover:shadow-md hover:shadow-amber-50 transition-all duration-300 group"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-12 sm:h-14 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

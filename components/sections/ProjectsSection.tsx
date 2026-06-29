"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { projects } from "@/lib/data";

const categoryColors: Record<string, string> = {
  Engineering: "bg-blue-500/20 text-blue-200 border-blue-400/30",
  Consultancy: "bg-amber-500/20 text-amber-200 border-amber-400/30",
  Marine: "bg-teal-500/20 text-teal-200 border-teal-400/30",
};

export default function ProjectsSection() {
  const [featured, ...rest] = projects;

  return (
    <section className="section-padding bg-white">
      <Container>
        {/* Header */}
        <ScrollReveal>
          <SectionHeader
            badge="Portfolio"
            title="Engineering"
            titleHighlight="Track Record"
            align="center"
          />
        </ScrollReveal>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">

          {/* ── Featured card — 2 cols wide ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="group relative overflow-hidden rounded-3xl bg-navy-950 lg:col-span-2 cursor-pointer"
          >
            <Link href={`/projects#${featured.slug}`} className="block h-full">
              {/* Image */}
              <div className="relative h-48 sm:h-64 lg:h-80 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-navy-950 via-navy-950/30 to-transparent" />

                <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${categoryColors[featured.category] ?? "bg-white/20 text-white border-white/30"}`}>
                    {featured.category}
                  </span>
                  <div className="w-9 h-9 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="p-7">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-amber-400 transition-colors duration-200 leading-snug mb-2">
                  {featured.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-xl">
                  {featured.description}
                </p>
              </div>
            </Link>
          </motion.div>

          {/* ── Card 2 — tall right column ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="group relative overflow-hidden rounded-3xl bg-navy-950 cursor-pointer"
          >
            <Link href={`/projects#${rest[0].slug}`} className="block h-full">
              <div className="relative h-44 sm:h-56 lg:h-full lg:min-h-56 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={rest[0].image}
                  alt={rest[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-navy-950/95 via-navy-950/40 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${categoryColors[rest[0].category] ?? "bg-white/20 text-white border-white/30"}`}>
                    {rest[0].category}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-display text-base font-bold text-white group-hover:text-amber-400 transition-colors duration-200 leading-snug">
                    {rest[0].title}
                  </h3>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* ── Bottom 4 compact cards ── */}
          {rest.slice(1, 5).map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl bg-navy-950 cursor-pointer"
            >
              <Link href={`/projects#${project.slug}`} className="block">
                <div className="relative h-32 sm:h-40 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-navy-950/90 via-navy-950/30 to-transparent" />

                  <div className="absolute top-3 left-3">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold border ${categoryColors[project.category] ?? "bg-white/20 text-white border-white/30"}`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-display text-sm font-bold text-white group-hover:text-amber-400 transition-colors duration-200 leading-snug line-clamp-2">
                    {project.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

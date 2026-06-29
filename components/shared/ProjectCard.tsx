"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Calendar, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/lib/types";

const categoryColors: Record<string, string> = {
  Engineering: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  Consultancy: "bg-amber-500/20 text-amber-300 border-amber-500/30",
  Marine: "bg-teal-500/20 text-teal-300 border-teal-500/30",
};

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative overflow-hidden rounded-3xl bg-navy-950 cursor-pointer"
    >
      <Link href={`/projects#${project.slug}`} className="block">
        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />

          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${
                categoryColors[project.category] ??
                "bg-white/20 text-white border-white/30"
              }`}
            >
              {project.category}
            </span>
          </div>

          {/* Arrow icon */}
          <div className="absolute top-4 right-4 w-9 h-9 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ArrowUpRight className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors duration-200 leading-snug">
            {project.title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
            {project.description}
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              {project.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {project.year}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

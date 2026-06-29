"use client";

import { motion } from "framer-motion";
import { Briefcase, Settings, Anchor, ArrowRight, type LucideIcon } from "lucide-react";
import Link from "next/link";
import type { Service } from "@/lib/types";

const iconMap: Record<string, LucideIcon> = {
  briefcase: Briefcase,
  settings: Settings,
  anchor: Anchor,
};

const accentGradients = [
  "from-amber-500 to-orange-500",
  "from-blue-500 to-navy-700",
  "from-teal-500 to-cyan-600",
];

const borderHovers = [
  "hover:border-amber-200",
  "hover:border-blue-200",
  "hover:border-teal-200",
];

const iconColors = ["text-amber-500", "text-blue-500", "text-teal-500"];
const iconBgs = ["bg-amber-50", "bg-blue-50", "bg-teal-50"];

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const Icon = iconMap[service.icon] ?? Settings;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      whileHover={{ y: -8 }}
      className={`group relative bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 ${borderHovers[index % borderHovers.length]} hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 flex flex-col`}
    >
      {/* Gradient accent bar */}
      <div
        className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r ${accentGradients[index % accentGradients.length]} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      />

      {/* GIF image header */}
      <div className="relative h-36 sm:h-44 bg-navy-950 overflow-hidden flex items-center justify-center">
        {/* animated GIF — must be unoptimized to preserve animation */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-navy-950/70 via-navy-950/20 to-transparent" />

        {/* Icon badge overlay */}
        <div
          className={`absolute bottom-4 left-5 w-11 h-11 rounded-xl ${iconBgs[index % iconBgs.length]} flex items-center justify-center shadow-lg`}
        >
          <Icon
            className={`w-5 h-5 ${iconColors[index % iconColors.length]}`}
            strokeWidth={1.75}
          />
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-4 sm:p-6">
        <h3 className="font-display text-base sm:text-lg font-bold text-navy-950 mb-2">
          {service.title}
        </h3>

        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-3 flex-1">
          {service.description}
        </p>

        {/* Feature pills */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {service.features.slice(0, 4).map((feature) => (
            <span
              key={feature}
              className="px-2 py-0.5 rounded-lg bg-slate-50 border border-slate-100 text-slate-500 text-[10px] sm:text-xs"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* CTA */}
        <Link
          href={`/services#${service.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 group-hover:text-amber-600 transition-colors duration-200"
        >
          Learn More
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  Flame,
  Anchor,
  FlaskConical,
  Building2,
  Zap,
  Leaf,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import type { Industry } from "@/lib/types";

const iconMap: Record<string, LucideIcon> = {
  flame: Flame,
  anchor: Anchor,
  "flask-conical": FlaskConical,
  "building-2": Building2,
  zap: Zap,
  leaf: Leaf,
};

interface IndustryCardProps {
  industry: Industry;
  index?: number;
}

export default function IndustryCard({
  industry,
  index = 0,
}: IndustryCardProps) {
  const Icon = iconMap[industry.icon] ?? Building2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="group relative p-6 rounded-2xl border border-white/10 glass hover:bg-white/12 transition-all duration-300 cursor-pointer"
    >
      <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-colors duration-300">
        <Icon className="w-6 h-6 text-amber-400" strokeWidth={1.75} />
      </div>
      <h3 className="font-display text-base font-bold text-white mb-2">
        {industry.name}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-4">
        {industry.description}
      </p>
      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        Explore <ArrowRight className="w-3.5 h-3.5" />
      </span>
    </motion.div>
  );
}

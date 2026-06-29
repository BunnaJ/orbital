"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import type { Testimonial } from "@/lib/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index?: number;
}

export default function TestimonialCard({
  testimonial,
  index = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="relative p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-lg hover:shadow-slate-200/60 transition-all duration-300 flex flex-col"
    >
      {/* Quote mark */}
      <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center mb-6">
        <Quote className="w-5 h-5 text-amber-500" />
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className="text-amber-400 text-sm">
            ★
          </span>
        ))}
      </div>

      {/* Quote */}
      <p className="text-slate-600 leading-relaxed text-sm italic flex-1 mb-6">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Divider */}
      <div className="border-t border-slate-100 pt-4">
        <p className="font-display font-bold text-navy-950 text-sm">
          {testimonial.name}
        </p>
        <p className="text-xs text-slate-400 mt-0.5">
          {testimonial.role}, {testimonial.company}
        </p>
      </div>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import type { NewsItem } from "@/lib/types";

interface NewsCardProps {
  item: NewsItem;
  index?: number;
}

export default function NewsCard({ item, index = 0 }: NewsCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300"
    >
      <Link href={`/news#${item.slug}`} className="block">
        {/* Image */}
        <div className="relative h-52 overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-navy-950/10 group-hover:bg-navy-950/5 transition-colors duration-300" />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full bg-amber-500 text-navy-950 text-xs font-bold">
              {item.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
            <Calendar className="w-3.5 h-3.5" />
            {formatDate(item.date)}
          </div>
          <h3 className="font-display text-base font-bold text-navy-950 mb-2 leading-snug group-hover:text-amber-600 transition-colors duration-200 line-clamp-2">
            {item.title}
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-4">
            {item.excerpt}
          </p>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy-900 group-hover:text-amber-600 transition-colors duration-200">
            Read More <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}

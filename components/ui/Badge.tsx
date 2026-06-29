import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "amber" | "navy" | "white" | "slate";
  className?: string;
}

const variantClasses = {
  amber:
    "bg-amber-500/10 text-amber-600 border border-amber-500/20 dark:text-amber-400",
  navy: "bg-navy-900/10 text-navy-900 border border-navy-900/20",
  white: "bg-white/10 text-white border border-white/20",
  slate: "bg-slate-100 text-slate-600 border border-slate-200",
};

export default function Badge({
  children,
  variant = "amber",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

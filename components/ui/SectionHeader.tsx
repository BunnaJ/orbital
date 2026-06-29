import { cn } from "@/lib/utils";
import Badge from "./Badge";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  titleHighlight,
  description,
  align = "center",
  theme = "light",
  className,
}: SectionHeaderProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        align === "left" && "items-start text-left",
        className
      )}
    >
      {badge && (
        <Badge variant={isDark ? "white" : "amber"}>
          <span className="w-1.5 h-1.5 rounded-full bg-current" />
          {badge}
        </Badge>
      )}
      <h2
        className={cn(
          "font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight",
          isDark ? "text-white" : "text-navy-950"
        )}
      >
        {title}{" "}
        {titleHighlight && (
          <span className="text-gradient">{titleHighlight}</span>
        )}
      </h2>
      {description && (
        <p
          className={cn(
            "text-base sm:text-lg leading-relaxed max-w-2xl",
            isDark ? "text-slate-300" : "text-slate-500"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

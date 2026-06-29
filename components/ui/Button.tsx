import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost" | "outline" | "white";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  external?: boolean;
}

const variantClasses = {
  primary:
    "bg-amber-500 hover:bg-amber-400 text-navy-950 font-semibold shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40",
  secondary:
    "bg-navy-900 hover:bg-navy-800 text-white font-semibold shadow-lg shadow-navy-900/25",
  ghost: "bg-transparent hover:bg-white/10 text-white font-medium",
  outline:
    "bg-transparent border-2 border-white/30 hover:border-white text-white font-medium hover:bg-white/5",
  white:
    "bg-white hover:bg-slate-50 text-navy-950 font-semibold shadow-lg shadow-black/10",
};

const sizeClasses = {
  sm: "h-10 px-5 text-sm rounded-xl gap-2",
  md: "h-12 px-7 text-base rounded-xl gap-2",
  lg: "h-14 px-9 text-base rounded-2xl gap-3",
};

export default function Button({
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
  children,
  type = "button",
  disabled = false,
  external = false,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center transition-all duration-200 active:scale-95 whitespace-nowrap",
    variantClasses[variant],
    sizeClasses[size],
    disabled && "opacity-50 cursor-not-allowed pointer-events-none",
    className
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}

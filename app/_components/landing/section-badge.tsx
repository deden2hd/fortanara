import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

type SectionBadgeProps = {
  children: ReactNode;
  icon: LucideIcon;
  variant: "dark" | "light";
  className?: string;
};

export function SectionBadge({ children, icon: Icon, variant, className = "" }: SectionBadgeProps) {
  if (variant === "dark") {
    return (
      <div className={`inline-flex rounded-full bg-gradient-to-r from-white/55 via-white/10 to-white/35 p-px ${className}`}>
        <div className="inline-flex items-center gap-2 rounded-full bg-[#080808] px-3.5 py-2 text-sm font-medium text-zinc-200">
          <Icon aria-hidden="true" className="h-4 w-4 text-red-500" strokeWidth={1.8} />
          <span>{children}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-2 rounded-full bg-zinc-100 px-3.5 py-2 text-sm font-medium text-zinc-950 ${className}`}>
      <Icon aria-hidden="true" className="h-4 w-4 text-red-600" strokeWidth={1.8} />
      <span>{children}</span>
    </div>
  );
}

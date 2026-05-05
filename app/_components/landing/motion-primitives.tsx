import type { CSSProperties, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
};

function revealStyle(delay = 0): CSSProperties {
  return {
    "--reveal-delay": `${delay}s`,
  } as CSSProperties;
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <div className={`motion-reveal ${className ?? ""}`} style={revealStyle(delay)}>
      {children}
    </div>
  );
}

export function StaggerReveal({ children, className }: RevealProps) {
  return <div className={className}>{children}</div>;
}

export function StaggerItem({ children, className }: Pick<RevealProps, "children" | "className">) {
  return <div className={`motion-reveal ${className ?? ""}`}>{children}</div>;
}

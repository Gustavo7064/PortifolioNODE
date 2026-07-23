import type { HTMLAttributes, ReactNode } from 'react';

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({ children, className = '', ...rest }: GlassCardProps) {
  return (
    <div
      className={`glass glass-hover rounded-2xl relative overflow-hidden ${className}`}
      {...rest}
    >
      <div className="absolute inset-0 bg-card-sheen pointer-events-none" />
      <div className="relative">{children}</div>
    </div>
  );
}

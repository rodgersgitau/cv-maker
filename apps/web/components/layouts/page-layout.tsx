"use client";

import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

export default function PageLayout({ children, className }: PageLayoutProps) {
  return (
    <section className="flex-1 flex bg-background/90">
      <div className={cn("content-grid w-full h-max", className)}>
        {children}
      </div>
    </section>
  );
}

import type { FC, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface HeroProps {
  children?: ReactNode;
  className?: string;
}

const Hero: FC<HeroProps> = ({ children, className }) => {
  return (
    <header className={cn("fullwidth items-center bg-primary/80", className)}>
      {children}
    </header>
  );
};

export default Hero;

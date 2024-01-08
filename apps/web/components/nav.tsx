"use client";

import Link from "next/link";

import Logo from "@/components/logo";
import { cn } from "@/lib/utils";

interface NavbarProps {
  links?: {
    title: string;
    href: string;
  }[];
}

export default function Navbar({ links }: NavbarProps) {
  return (
    <nav className="sticky top-0 left-0 w-full h-max z-50 bg-accent text-accent-foreground">
      <div
        className={cn(
          "w-full max-w-screen-xl mx-auto !px-4 md:!px-0 py-6",
          "flex items-center justify-between gap:10 lg:gap-20 "
        )}
      >
        {/* <MobileNav /> */}
        {/* <Logo /> */}
        <div className="relative w-28 h-8">
          <Logo />
        </div>

        <div className="flex-1 grid items-center">
          {links?.map((link, index) => (
            <Link key={`link-${index}`} href={link.href}>
              {link.href}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

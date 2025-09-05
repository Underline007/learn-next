"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { NavigationBar } from "@/components/ui/navigation-menu";
import { Logo } from "@/components/shared/Logo";
import { Menu } from "lucide-react";
import { useState } from "react";
import { MobileNav } from "./MobileNav";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        {/* Logo */}
        <Logo className="h-10 w-auto" />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <NavigationBar items={navItems} />
          <Button
            size="md"
            className="rounded-full bg-primary px-6 py-2 text-white hover:bg-primary/90"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          <Menu className="h-7 w-7" />
        </button>
      </Container>

      {mobileOpen && <MobileNav items={navItems} />}
    </header>
  );
}

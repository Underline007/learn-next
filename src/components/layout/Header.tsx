"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/shared/Logo";
import { Menu, ChevronDown } from "lucide-react";
import {  useState } from "react";

const navItems = [
  { label: "Trang chủ", href: "/" },
  { label: "Giải pháp AI", href: "/#ai" },
  { label: "Chuyển đổi số", href: "/#digital-transformation" },
  {
    label: "Dịch vụ",
    href: "/#services",
    hasDropdown: true,
    submenu: [
      { label: "Trí tuệ nhân tạo AI", href: "/ai-solutions" },
      { label: "Giải pháp số hóa", href: "/digital-solutions" },
    ],
  },
  { label: "Liên hệ", href: "/#contact" },
];




export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const handleDropdownToggle = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  

  const handleMouseEnter = (index: number) => {
    if (navItems[index].hasDropdown) {
      setActiveDropdown(index);
    }
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setActiveDropdown(null);
    }, 800); 
  };

  return (
    <header className="top-0 z-50">
      <Container className="flex h-20 items-center justify-between">
        {/* Logo */}
        <Logo className="h-10 w-auto" />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href={item.href}
                className="flex items-center gap-1 px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onClick={
                  item.hasDropdown
                    ? (e) => {
                        e.preventDefault();
                        handleDropdownToggle(index);
                      }
                    : undefined
                }
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-800 ${
                      activeDropdown === index ? "rotate-180" : ""
                    }`}
                  />
                )}
              </a>

              {/* Dropdown Menu */}
              {item.hasDropdown && activeDropdown === index && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                  {item.submenu?.map((subItem, subIndex) => (
                    <a
                      key={subIndex}
                      href={subItem.href}
                      className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                    >
                      {subItem.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            size="md"
            className="rounded-full bg-blue-600 px-6 py-2 text-white hover:bg-blue-700 transition-colors"
          >
            Khám phá ngay
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </Container>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <Container className="py-4">
            <nav className="flex flex-col gap-2">
              {navItems.map((item, index) => (
                <div key={index}>
                  <a
                    href={item.href}
                    className="flex items-center justify-between px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    onClick={
                      item.hasDropdown
                        ? (e) => {
                            e.preventDefault();
                            handleDropdownToggle(index);
                          }
                        : () => setMobileOpen(false)
                    }
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          activeDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </a>

                  {/* Mobile Submenu */}
                  {item.hasDropdown && activeDropdown === index && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.submenu?.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href={subItem.href}
                          className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="mt-4 px-4">
                <Button
                  size="md"
                  className="w-full rounded-full bg-blue-600 px-6 py-2 text-white hover:bg-blue-700 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  Khám phá ngay
                </Button>
              </div>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}

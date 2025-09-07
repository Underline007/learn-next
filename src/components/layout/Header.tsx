"use client";

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/shared/Logo";

const navItems = [
  { label: "Trang chủ", href: "/", active: true },
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
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDropdown = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <header
      className={`w-full absolute top-0 left-0 z-50 transition-colors ${
        mobileOpen ? "bg-white " : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-[200px] py-4 md:py-6 h-[72px] md:h-[104px]">
        {/* Logo */}
        <Logo className="h-8 md:h-10 w-auto" />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-[56px]">
          {navItems.map((item, index) => (
            <div key={index} className="relative">
              <a
                href={item.href}
                onClick={
                  item.hasDropdown
                    ? (e) => {
                        e.preventDefault();
                        toggleDropdown(index);
                      }
                    : undefined
                }
                className={`flex items-center gap-2 text-[16px] leading-6 transition-colors ${
                  item.active
                    ? "font-semibold text-[#112639] border-b-2 border-[#112639] pb-2"
                    : "font-normal text-[#112639] hover:text-[#1851C1]"
                }`}
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${
                      activeDropdown === index ? "rotate-180" : ""
                    }`}
                  />
                )}
              </a>

              {/* Dropdown (desktop) */}
              {item.hasDropdown && activeDropdown === index && (
                <div className="absolute top-[52px] left-0 w-[171px] rounded-xl border border-[#C2D9FF] bg-white shadow-md flex flex-col p-4 gap-3 z-50">
                  {item.submenu?.map((sub, subIdx) => (
                    <a
                      key={subIdx}
                      href={sub.href}
                      className="text-[#112639] text-[16px] leading-6 hover:text-[#1851C1] transition-colors"
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Button Desktop */}
        <div className="hidden md:block">
          <Button
            className="h-14 px-6 rounded-full text-white text-[16px] font-semibold leading-6 
        bg-gradient-to-r from-[#2BA9FA] to-[#1851C1] hover:opacity-90 transition"
          >
            Khám phá ngay
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-6 w-6 text-[#112639]" />
          ) : (
            <Menu className="h-6 w-6 text-[#112639]" />
          )}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
          <nav className="flex flex-col px-6 py-4">
            {navItems.map((item, index) => (
              <div key={index} className="flex flex-col">
                <button
                  onClick={() =>
                    item.hasDropdown
                      ? toggleDropdown(index)
                      : setMobileOpen(false)
                  }
                  className={`flex items-center justify-between py-3 text-[16px] leading-6 ${
                    item.active
                      ? "font-semibold text-[#112639]"
                      : "font-normal text-[#112639]"
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${
                        activeDropdown === index ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>

                {item.hasDropdown && activeDropdown === index && (
                  <div className="pl-4 flex flex-col border-l border-[#C2D9FF] ml-2 mb-2">
                    {item.submenu?.map((sub, subIdx) => (
                      <a
                        key={subIdx}
                        href={sub.href}
                        onClick={() => setMobileOpen(false)}
                        className="py-2 text-[15px] text-[#112639] hover:text-[#1851C1]"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

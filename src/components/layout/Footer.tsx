"use client";

import Image from "next/image";
import { Logo } from "@/components/shared/Logo";

const socialIcons = [
  { src: "/images/facebook.svg", alt: "Facebook" },
  { src: "/images/youtube.svg", alt: "YouTube" },
  { src: "/images/linkedin.svg", alt: "LinkedIn" },
  { src: "/images/google.svg", alt: "Google" },
];

const cols = [
  {
    title: "Sản phẩm",
    links: ["Tính năng", "Tích hợp", "Giải pháp", "Mô hình", "Hệ sinh thái"],
  },
  {
    title: "Về công ty",
    links: ["Đội ngũ", "Giá trị", "Tầm nhìn", "Blog"],
  },
  {
    title: "Dành cho nhà phát triển",
    links: [
      "Nền tảng AI full stack",
      "Tài liệu hướng dẫn",
      "Tài nguyên",
      "Discord",
      "Hỗ trợ",
    ],
  },
];

const bottomLinks = ["Privacy Policy", "Term of Service", "Sitemap"];

export function Footer() {
  return (
    <footer className="w-full">
      {/* TOP AREA */}
      <div className="w-full bg-white">
        {/* wrapper cho full màn hình */}
        <div className="w-full px-[clamp(16px,5vw,120px)]">
          {/* container chuẩn Figma */}
          <div className="relative mx-auto w-full max-w-[1920px] h-[396px]">
            {/* Logo */}
            <div className="absolute left-[200px] top-[82px]">
              <Logo className="h-14 w-auto" />
            </div>
            {/* Desc */}
            <p className="absolute left-[200px] top-[165px] max-w-[318px] text-[#7B849F] text-[16px] leading-6">
              Nền tảng AI của Antco giúp doanh nghiệp khai thác tối đa trí tuệ
              nhân tạo với giải pháp tùy chỉnh
            </p>
            {/* Social */}
            <div className="absolute left-[200px] top-[274px] flex gap-4">
              {socialIcons.map((icon) => (
                <Image
                  key={icon.alt}
                  src={icon.src}
                  alt={icon.alt}
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
              ))}
            </div>
            {/* Links */}
            <div className="absolute right-[200px] top-[82px] flex gap-[100px]">
              {cols.map((col) => (
                <div key={col.title} className="flex flex-col gap-4">
                  <h3 className="text-[#112639] font-semibold text-[24px] leading-8">
                    {col.title}
                  </h3>
                  <ul className="flex flex-col gap-4">
                    {col.links.map((l) => (
                      <li
                        key={l}
                        className="text-[#7B849F] text-[16px] leading-6 hover:text-[#1792ED]"
                      >
                        {l}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="w-full bg-gradient-to-r from-[#2BA9FA] to-[#1851C1] py-4 lg:py-6">
        <div
          className="
            w-full 
            max-w-[clamp(1280px,85vw,3000px)] 
            mx-auto
            px-[clamp(16px,4vw,80px)]
            flex flex-col items-start gap-2
            sm:flex-row sm:items-center sm:justify-between
          "
        >
          <p className="text-white text-sm">
            © 2025 Antco, Inc. | All rights reserved
          </p>
          <div className="flex items-center gap-6 text-white text-sm">
            {bottomLinks.map((l) => (
              <span key={l} className="cursor-pointer hover:underline">
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

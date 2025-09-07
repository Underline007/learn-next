// app/components/sections/footer.tsx
"use client";

import Image from "next/image";
import { Logo } from "../shared/Logo";

const socialIcons = [
  { src: "/images/icon/facebook.svg", alt: "Facebook" },
  { src: "/images/icon/youtube.svg", alt: "YouTube" },
  { src: "/images/icon/linkedin.svg", alt: "Linkedin" },
  { src: "/images/icon/google.svg", alt: "Google" },
];

const footerColumnsTop = [
  {
    title: "Sản phẩm",
    links: ["Tính năng", "Tích hợp", "Giải pháp", "Mô hình", "Hệ sinh thái"],
  },
  {
    title: "Về công ty",
    links: ["Đội ngũ", "Giá trị", "Tầm nhìn", "Blog"],
  },
];

const footerColumnBottom = {
  title: "Dành cho nhà phát triển",
  links: [
    "Nền tảng AI full stack",
    "Tài liệu hướng dẫn",
    "Tài nguyên",
    "Discord",
    "Hỗ trợ",
  ],
};

const bottomLinks = ["Privacy Policy", "Term of Service", "Sitemap"];

export function Footer() {
  return (
    <footer className="w-full flex flex-col">
      {/* Top section */}
      <div className="w-full bg-white flex flex-col px-4 py-8 sm:px-6 lg:px-[200px] lg:py-[82px] gap-8">
        {/* Logo + desc + socials */}
        <div className="flex flex-col gap-6">
          <Logo className="h-14 w-auto" />
          <p className="text-[#7B849F] text-sm sm:text-base lg:text-[16px] leading-5 sm:leading-6 max-w-[318px]">
            Nền tảng AI của Antco giúp doanh nghiệp khai thác tối đa trí tuệ
            nhân tạo với giải pháp tùy chỉnh
          </p>

          <div className="flex items-center gap-4">
            {socialIcons.map((icon, i) => (
              <Image
                key={i}
                src={icon.src}
                alt={icon.alt}
                width={24}
                height={24}
                className="w-6 h-6 sm:w-10 sm:h-10"
              />
            ))}
          </div>
        </div>

        {/* --- Footer Columns --- */}
        <div className="flex flex-col gap-10 mt-6">
          {/* Nhóm trên: Sản phẩm + Về công ty */}
          <div className="grid grid-cols-2 gap-10">
            {footerColumnsTop.map((col, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                <h3 className="text-[#112639] text-xl sm:text-2xl font-semibold leading-8">
                  {col.title}
                </h3>
                <ul className="flex flex-col gap-4">
                  {col.links.map((link, i) => (
                    <li
                      key={i}
                      className="text-[#7B849F] text-base leading-6 hover:text-[#1792ED] cursor-pointer"
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Nhóm dưới: Dành cho nhà phát triển */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[#112639] text-xl sm:text-2xl font-semibold leading-8">
              {footerColumnBottom.title}
            </h3>
            <ul className="flex flex-col gap-4">
              {footerColumnBottom.links.map((link, i) => (
                <li
                  key={i}
                  className="text-[#7B849F] text-base leading-6 hover:text-[#1792ED] cursor-pointer"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="w-full bg-gradient-to-r from-[#2BA9FA] to-[#1851C1] flex flex-col items-center gap-2 px-4 py-4 sm:flex-row sm:justify-between sm:px-6 lg:px-[170px] lg:py-6">
        <p className="text-white text-sm text-center sm:text-left">
          © 2025 Antco, Inc. | All rights reserved
        </p>
        <div className="flex items-center gap-6 text-white text-sm">
          {bottomLinks.map((link, i) => (
            <span key={i} className="hover:underline cursor-pointer">
              {link}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}

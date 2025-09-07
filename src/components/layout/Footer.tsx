// app/components/sections/footer.tsx
"use client";

import Image from "next/image";
import { Logo } from "@/components/shared/Logo";

const socialIcons = [
  { src: "/images/icon/facebook.svg", alt: "Facebook" },
  { src: "/images/icon/youtube.svg", alt: "YouTube" },
  { src: "/images/icon/linkedin.svg", alt: "LinkedIn" },
  { src: "/images/icon/google.svg", alt: "Google" },
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
      <div
        className="
          mx-auto w-full max-w-[1920px]
          bg-white
          px-4 sm:px-6 lg:px-[200px]
          py-8 sm:py-10 lg:py-[82px]
        "
      >
        
        <div
          className="
            grid grid-cols-1
            lg:grid-cols-[318px_minmax(0,1fr)]
            gap-10 lg:gap-[100px]
          "
        >
          {/* Logo + mô tả + social */}
          <div className="flex flex-col gap-6">
            <Logo className="h-14 w-auto mr-auto" />
            <p className="max-w-[318px] text-[#7B849F] text-sm sm:text-base leading-5 sm:leading-6">
              Nền tảng AI của Antco giúp doanh nghiệp khai thác tối đa trí tuệ
              nhân tạo với giải pháp tùy chỉnh
            </p>

            <div className="flex items-center gap-4">
              {socialIcons.map((icon, i) => (
                <Image
                  key={i}
                  src={icon.src}
                  alt={icon.alt}
                  width={40}
                  height={40}
                  className="h-6 w-6 sm:h-10 sm:w-10"
                />
              ))}
            </div>
          </div>

        
          <div
            className="
              grid grid-cols-2 lg:grid-cols-3
              gap-x-10 lg:gap-x-[100px] gap-y-10
            "
          >
            {/* Cột 1: Sản phẩm */}
            <div className="col-span-1">
              <h3 className="text-[#112639] font-semibold leading-8 text-2xl lg:text-[24px]">
                {cols[0].title}
              </h3>
              <ul className="mt-4 flex flex-col gap-4">
                {cols[0].links.map((l) => (
                  <li
                    key={l}
                    className="text-[#7B849F] text-base leading-6 hover:text-[#1792ED] cursor-pointer"
                  >
                    {l}
                  </li>
                ))}
              </ul>
            </div>

            {/* Cột 2: Về công ty */}
            <div className="col-span-1">
              <h3 className="text-[#112639] font-semibold leading-8 text-2xl lg:text-[24px]">
                {cols[1].title}
              </h3>
              <ul className="mt-4 flex flex-col gap-4">
                {cols[1].links.map((l) => (
                  <li
                    key={l}
                    className="text-[#7B849F] text-base leading-6 hover:text-[#1792ED] cursor-pointer"
                  >
                    {l}
                  </li>
                ))}
              </ul>
            </div>

            {/* Cột 3: Dành cho nhà phát triển 
                - mobile: col-span-2 để nằm dưới và chiếm full hàng
                - desktop: col-span-1 để đứng cùng hàng với 2 cột kia */}
            <div className="col-span-2 lg:col-span-1">
              <h3 className="text-[#112639] font-semibold leading-8 text-2xl lg:text-[24px]">
                {cols[2].title}
              </h3>
              <ul className="mt-4 flex flex-col gap-4">
                {cols[2].links.map((l) => (
                  <li
                    key={l}
                    className="text-[#7B849F] text-base leading-6 hover:text-[#1792ED] cursor-pointer"
                  >
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div
        className="
          w-full
          bg-gradient-to-r from-[#2BA9FA] to-[#1851C1]
          px-4 sm:px-6 lg:px-[170px]
          py-4 lg:py-6
        "
      >
        <div
          className="
            mx-auto max-w-[1920px]
            flex flex-col items-center gap-2
            sm:flex-row sm:justify-between
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

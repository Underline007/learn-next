"use client";

import * as React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";

export function ProcessSection() {
  const steps = [
    {
      id: 1,
      title: "Xác định vấn đề",
      description:
        "Antco đề cao sự tương tác và thấu hiểu để xác định và tìm ra các thách thức mà đối tác đang gặp phải",
      icon: "/info.png",
      desktop: "left-[200px] top-[360px] text-right items-end",
    },
    {
      id: 2,
      title: "Triển khai demo",
      description:
        "Dựa từ sự thấu hiểu, từ nền tảng công nghệ, Antco sẽ tạo ra những demo cho các giải pháp sáng tạo, phù hợp nhất cho từng sản phẩm.",
      icon: "/paper.png",
      desktop: "right-[200px] top-[351px] text-left items-start",
    },
    {
      id: 3,
      title: "Xây dựng giải pháp cộng tác",
      description:
        "Antco phối hợp để phát triển và tích hợp giải pháp liên tục giúp khách hàng dễ dàng theo dõi tiến độ và đưa ra phản hồi kịp thời, tối đa hoá chất lượng sản phẩm.",
      icon: "/icon-solution.svg",
      desktop: "left-[200px] bottom-[160px] text-right items-end",
    },
    {
      id: 4,
      title: "Phát triển đề xuất",
      description:
        "Antco xây dựng các đề xuất giải pháp chi tiết để đáp ứng và cải tiến sản phẩm theo sự đổi mới công nghệ cho đối tác.",
      icon: "/icon-solution-5.svg",
      desktop: "right-[200px] bottom-[160px] text-left items-start",
    },
  ];

  return (
    <section className="w-full bg-[#DEEAFB] py-16 lg:py-[100px] relative">
      <div className="max-w-[1920px] mx-auto px-4 lg:px-[100px] relative">
        {/* Header */}
        <header className="text-center max-w-[1000px] mx-auto mb-12 lg:mb-[200px]">
          <h2 className="text-[32px] lg:text-[56px] font-semibold text-[#0749AD] leading-[130%]">
            Quy trình phát triển 4 bước
          </h2>
          <p className="mt-4 text-[#7B849F] text-sm lg:text-[20px] leading-[160%]">
            Antco cung cấp quy trình phát triển AI linh hoạt, giúp doanh nghiệp
            dễ dàng tích hợp AI vào các hệ thống hiện có như CRM, ERP và nền
            tảng thương mại điện tử.
          </p>
        </header>

        {/* ===== Desktop Layout ===== */}
        <div className="hidden lg:block relative h-[1112px]">
          {/* Circle Center */}
          <div className="absolute w-[680px] h-[680px] left-1/2 top-[300px] -translate-x-1/2">
            {/* Outer Border */}
            <div className="absolute inset-0 rounded-full border-[8px] border-white/40"></div>
            {/* Middle Circle */}
            <div className="absolute inset-[45px] rounded-full bg-blue-500/20"></div>
            {/* Center Logo */}
            <div className="absolute inset-[200px] rounded-full bg-white flex items-center justify-center shadow-md">
              <Image
                src="/images/logo_icon.svg"
                alt="Antco Logo"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
          </div>

          {/* Step Cards */}
          {steps.map((step) => (
            <Card
              key={step.id}
              className={`absolute w-[426px] bg-[#F5F8FF] border-2 border-white rounded-[24px] p-6 flex flex-col gap-4 ${step.desktop}`}
            >
              <Card.Title className="text-[24px] font-semibold text-[#112639]">
                {step.title}
              </Card.Title>
              <Card.Description className="text-[#7B849F] text-[14px] leading-[20px]">
                {step.description}
              </Card.Description>
            </Card>
          ))}
        </div>

        {/* ===== Mobile Layout ===== */}
        <div className="lg:hidden flex flex-col items-center gap-10">
          {/* Circle */}
          <div className="relative w-[280px] h-[280px]">
            <div className="absolute inset-0 rounded-full border-4 border-white/40"></div>
            <div className="absolute inset-10 rounded-full bg-blue-500/20"></div>
            <div className="absolute inset-20 rounded-full bg-white flex items-center justify-center">
              <Image
                src="/frame-177.svg"
                alt="Antco Logo"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
          </div>

          {/* Step Cards stacked */}
          <div className="flex flex-col gap-6 w-full">
            {steps.map((step) => (
              <Card
                key={`mobile-${step.id}`}
                className="bg-[#F5F8FF] border-2 border-white rounded-xl p-5"
              >
                <Card.Title className="text-lg font-semibold text-[#112639] text-center">
                  {step.title}
                </Card.Title>
                <Card.Description className="text-sm text-[#7B849F] text-center mt-2">
                  {step.description}
                </Card.Description>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

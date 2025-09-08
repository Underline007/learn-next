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
      icon: "/images/Solution.svg",
      desktop: {
        container:
          "absolute left-[200px] top-[360px] flex flex-col items-end text-right",
      },
    },
    {
      id: 2,
      title: "Triển khai demo",
      description:
        "Dựa từ sự thấu hiểu, từ nền tảng công nghệ, Antco sẽ tạo ra những demo cho các giải pháp sáng tạo, phù hợp nhất cho từng sản phẩm.",
      icon: "/images/Solution-2.svg",
      desktop: {
        container:
          "absolute right-[200px] top-[351px] flex flex-col items-start text-left",
      },
    },
    {
      id: 3,
      title: "Xây dựng giải pháp cộng tác",
      description:
        "Antco phối hợp để phát triển và tích hợp giải pháp liên tục giúp khách hàng dễ dàng theo dõi tiến độ và đưa ra phản hồi kịp thời, tối đa hoá chất lượng sản phẩm.",
      icon: "/images/Solution-1.svg",
      desktop: {
        container:
          "absolute left-[200px] bottom-[160px] flex flex-col items-end text-right",
      },
    },
    {
      id: 4,
      title: "Phát triển đề xuất",
      description:
        "Antco xây dựng các đề xuất giải pháp chi tiết để đáp ứng và cải tiến sản phẩm theo sự đổi mới công nghệ cho đối tác.",
      icon: "/images/Solution-3.svg",
      desktop: {
        container:
          "absolute right-[200px] bottom-[160px] flex flex-col items-start text-left",
      },
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
          {/* Circle Layers */}
          <div className="absolute w-[680px] h-[680px] left-1/2 top-[300px] -translate-x-1/2">
            {/* Outer circle */}
            <div className="absolute inset-0 rounded-full border-[8px] border-white/40"></div>
            {/* Middle circle */}
            <div className="absolute inset-[45px] rounded-full bg-[#4491FF]/20"></div>
            {/* Inner circle */}
            <div className="absolute inset-[145px] rounded-full border border-white/40"></div>
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

          {/* Arrows */}
          <div className="absolute w-7 h-6 bg-white rounded rotate-90 left-1/2 top-0 -translate-x-1/2"></div>
          <div className="absolute w-7 h-6 bg-white rounded -rotate-90 left-1/2 bottom-0 -translate-x-1/2"></div>
          <div className="absolute w-7 h-6 bg-white rounded rotate-180 top-1/2 right-0 -translate-y-1/2"></div>
          <div className="absolute w-7 h-6 bg-white rounded top-1/2 left-0 -translate-y-1/2"></div>

          {/* Steps */}
          {steps.map((step) => (
            <div key={step.id} className={step.desktop.container}>
              {/* Icon Circle */}
              <div className="w-[100px] h-[100px] rounded-full bg-white border-[14px] border-white/40 flex items-center justify-center shadow-md mb-6">
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </div>
              {/* Card */}
              <Card className="w-[426px] bg-[#F5F8FF] border-2 border-white rounded-[24px] p-6 flex flex-col gap-4">
                <Card.Title className="text-[24px] font-semibold text-[#112639]">
                  {step.title}
                </Card.Title>
                <Card.Description className="text-[#7B849F] text-[14px] leading-[20px]">
                  {step.description}
                </Card.Description>
              </Card>
            </div>
          ))}
        </div>

        {/* ===== Mobile Layout ===== */}
        <div className="lg:hidden flex flex-col items-center gap-10">
          {/* Circle Layers */}
          <div className="relative w-[364px] h-[364px]">
            <div className="absolute inset-0 rounded-full border-4 border-white/40"></div>
            <div className="absolute inset-10 rounded-full bg-[#4491FF]/20"></div>
            <div className="absolute inset-[80px] rounded-full bg-white flex items-center justify-center">
              <Image
                src="/images/logo_icon.svg"
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
                className="flex flex-row gap-4 bg-[#F5F8FF] border-2 border-white rounded-xl p-5 items-start"
              >
                {/* Icon Circle */}
                <div className="w-[60px] h-[60px] rounded-full bg-white border-[6px] border-white/40 flex items-center justify-center">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={34}
                    height={34}
                    className="object-contain"
                  />
                </div>
                {/* Text */}
                <div>
                  <Card.Title className="text-lg font-semibold text-[#112639]">
                    {step.title}
                  </Card.Title>
                  <Card.Description className="text-sm text-[#7B849F] mt-2">
                    {step.description}
                  </Card.Description>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

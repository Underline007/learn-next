"use client";

import * as React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";

type SolutionCard = {
  id: number;
  icon: string;
  title: string;
  description: string;
};

const productCards: SolutionCard[] = [
  {
    id: 1,
    icon: "/images/report.svg",
    title: "Hệ thống thông tin phân tích báo cáo tổng hợp",
    description:
      "Ứng dụng AI và phân tích dữ liệu nội bộ để tự động hóa quy trình tổng hợp, phân tích và tạo báo cáo chi tiết, cung cấp thông tin chuyên sâu, hỗ trợ ra quyết định nhanh chóng và chính xác.",
  },
  {
    id: 2,
    icon: "/images/web.svg",
    title: "Cổng thông tin chính quyền điện tử phường",
    description:
      "Nền tảng số hóa quản lý hành chính phường, tích hợp công nghệ đám mây để cung cấp dịch vụ công trực tuyến, tăng cường minh bạch, hiệu quả và cải thiện trải nghiệm người dân.",
  },
  {
    id: 3,
    icon: "/images/assistant.svg",
    title: "Trợ lý ảo phân tích và tra cứu pháp lý",
    description:
      "Phần mềm AI tiên tiến cho phép tra cứu và phân tích quy định pháp luật một cách nhanh chóng, chính xác, hỗ trợ tổ chức tuân thủ pháp lý và đưa ra quyết định chiến lược.",
  },
  {
    id: 4,
    icon: "/images/none_paper.svg",
    title: "Hệ thống phòng họp không giấy",
    description:
      "Giải pháp số hóa quy trình họp, tích hợp quản lý tài liệu và lịch trình trên nền tảng đám mây, giảm thiểu giấy tờ, nâng cao hiệu quả.",
  },
  {
    id: 5,
    icon: "/images/record.svg",
    title: "Phần mềm bóc băng",
    description:
      "Công nghệ AI nhận diện giọng nói hiện đại, chuyển đổi băng âm thanh thành văn bản với độ chính xác cao, tối ưu hóa xử lý nội dung hội nghị, phỏng vấn hoặc ghi âm.",
  },
  {
    id: 6,
    icon: "/images/cloud.svg",
    title: "Hệ thống thông tin số hóa và quản lý số hoá",
    description:
      "Giải pháp chuyển đổi tài liệu vật lý sang định dạng số, tích hợp hệ thống quản lý dữ liệu thông minh trên nền tảng đám mây, đảm bảo lưu trữ an toàn, tìm kiếm nhanh chóng và chia sẻ hiệu quả.",
  },
  {
    id: 7,
    icon: "/images/search.svg",
    title: "Trợ lý ảo nghiên cứu và tham mưu chiến lược",
    description:
      "Giải pháp AI áp dụng phân tích dữ liệu nội bộ để nghiên cứu sâu, dự đoán xu hướng và đề xuất các giải pháp giúp cơ quan tổ chức có chiến lược và chính sách đúng đắn.",
  },
];

const solutionCards: SolutionCard[] = [
  {
    id: 8,
    icon: "/images/report.svg",
    title: "Tư vấn & Thực hiện Chuyển Đổi Số",
    description:
      "Dịch vụ tư vấn và triển khai chuyển đổi số, giúp doanh nghiệp tích hợp AI và công nghệ mới vào hệ thống hiện tại để nâng cao hiệu quả.",
  },
  {
    id: 9,
    icon: "/images/web.svg",
    title: "Giải pháp & Hạ tầng AI & IOT",
    description:
      "Xây dựng nền tảng AI và IOT hiện đại, hỗ trợ doanh nghiệp khai thác dữ liệu và tối ưu vận hành dựa trên công nghệ tiên tiến.",
  },
  {
    id: 10,
    icon: "/images/cloud.svg",
    title: "Nền tảng & Dịch vụ Hybrid Cloud",
    description:
      "Cung cấp nền tảng đám mây lai, kết hợp linh hoạt giữa private cloud và public cloud, đảm bảo tính bảo mật, tiết kiệm chi phí và dễ dàng mở rộng.",
  },
];

export function SolutionsSection() {
  const [activeTab, setActiveTab] = React.useState<"product" | "solution">(
    "product"
  );
  const cards = activeTab === "product" ? productCards : solutionCards;

  return (
    <section className="w-full bg-white">
      {/* Container: 2xl match design 1520px (4*356 + 3*32) */}
      <div className="mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-0 max-w-screen-xl 2xl:max-w-[1520px] py-12 md:py-16 lg:py-24">
        {/* Header */}
        <header className="max-w-[1005px] mx-auto text-center flex flex-col gap-3 md:gap-5">
          <h2 className="text-[24px] md:text-[40px] lg:text-[56px] font-semibold text-[#0749AD] leading-[130%]">
            {activeTab === "product"
              ? "Antco - Dịch vụ & Giải pháp"
              : "Antco - Giải pháp công nghệ"}
          </h2>
          <p className="text-sm md:text-base lg:text-[20px] text-[#7B849F] leading-[160%]">
            Antco cung cấp các giải pháp AI thiết thực thúc đẩy tăng trưởng kinh
            doanh.
          </p>

          {/* Tabs */}
          <div className="flex gap-4 justify-center mt-4">
            <button
              onClick={() => setActiveTab("product")}
              className={`px-6 py-3 rounded-full font-semibold text-base ${
                activeTab === "product"
                  ? "bg-gradient-to-r from-[#2BA9FA] to-[#1851C1] text-white"
                  : "text-[#1792ED]"
              }`}
            >
              Sản phẩm
            </button>
            <button
              onClick={() => setActiveTab("solution")}
              className={`px-6 py-3 rounded-full font-semibold text-base ${
                activeTab === "solution"
                  ? "bg-gradient-to-r from-[#2BA9FA] to-[#1851C1] text-white"
                  : "text-[#1792ED]"
              }`}
            >
              Giải pháp
            </button>
          </div>
        </header>

        {/* Cards: flex-wrap + justify-center để hàng thiếu tự căn giữa.
            - gap-x/y = 32px
            - 2xl: mỗi item cố định 356px; <2xl: item co giãn an toàn */}
        <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="
                w-full sm:w-[calc(50%-1rem)] lg:w-[calc(40%-1.5rem)]
                2xl:basis-[356px] 2xl:grow-0 2xl:shrink-0
                max-w-[356px]
              "
            >
              <SolutionCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionCard({ icon, title, description }: SolutionCard) {
  return (
    <Card
      className="relative isolate flex flex-col items-start p-6 md:p-7 lg:p-8 gap-6 md:gap-7 lg:gap-9
                 rounded-[24px] lg:rounded-[32px] bg-[rgba(43,144,250,0.07)] border-2 shadow-none h-full w-full
                 transition-transform duration-150 will-change-transform hover:-translate-y-0.5 hover:shadow-md"
    >
      <Card.Content className="p-0 flex flex-col gap-6 md:gap-7 lg:gap-9 flex-1">
        <div className="w-[80px] h-[80px] md:w-[90px] md:h-[90px] lg:w-[100px] lg:h-[100px] flex items-center justify-center rounded-full bg-white z-10">
          <Image src={icon} alt={title} width={56} height={56} />
        </div>
        <div className="flex flex-col gap-2 md:gap-3 flex-1">
          <h3 className="text-base md:text-lg lg:text-[24px] leading-6 md:leading-7 lg:leading-8 font-semibold text-[#112639]">
            {title}
          </h3>
          <p className="text-sm md:text-[15px] lg:text-[14px] leading-5 md:leading-6 lg:leading-5 text-[#7B849F] flex-1">
            {description}
          </p>
        </div>
      </Card.Content>
    </Card>
  );
}

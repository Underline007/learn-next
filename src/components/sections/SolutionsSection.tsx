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
      {/* giữ lg như cũ; chỉ nới rộng ở xl */}
      <div
        className="mx-auto px-4 sm:px-6 lg:px-10 xl:px-6 2xl:px-0
                      max-w-screen-xl xl:max-w-[calc(100vw-48px)] 2xl:max-w-[1520px]
                      py-12 md:py-16 lg:py-24"
      >
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

        {/* Cards – giữ đúng công thức lg; xl kế thừa lg, chỉ nới container nên thẻ bớt bị bóp */}
        <div className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-8 xl:gap-x-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="
                w-full sm:w-[calc(50%-0.75rem)]
                lg:basis-[calc((100%-72px)/4)] lg:max-w-[calc((100%-72px)/4)]
                2xl:basis-[356px] 2xl:max-w-[356px]
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
      className="relative isolate flex flex-col items-start 
                     p-5 md:p-6 lg:p-6 xl:p-7 2xl:p-8
                     gap-5 md:gap-6 lg:gap-6 xl:gap-7 2xl:gap-9
                     rounded-[20px] lg:rounded-[24px] 2xl:rounded-[32px]
                     bg-[rgba(43,144,250,0.07)] border-2 shadow-none h-full w-full
                     transition-transform duration-150 will-change-transform hover:-translate-y-0.5 hover:shadow-md"
    >
      <Card.Content className="p-0 flex flex-col gap-5 md:gap-6 lg:gap-6 xl:gap-7 2xl:gap-9 flex-1">
        <div
          className="flex items-center justify-center rounded-full bg-white z-10
                        w-[60px] h-[60px] lg:w-[70px] lg:h-[70px] xl:w-[80px] xl:h-[80px] 2xl:w-[100px] 2xl:h-[100px]"
        >
          <Image
            src={icon}
            alt={title}
            width={56}
            height={56}
            className="w-[28px] h-[28px] lg:w-[36px] lg:h-[36px] xl:w-[44px] xl:h-[44px] 2xl:w-[56px] 2xl:h-[56px]"
          />
        </div>

        <div className="flex flex-col gap-2 flex-1">
          <h3
            className="font-semibold text-[#112639]
                         text-[14px] lg:text-[15px] xl:text-[18px] 2xl:text-[24px]
                         leading-[18px] lg:leading-[20px] xl:leading-[22px] 2xl:leading-[28px]"
          >
            {title}
          </h3>
          <p
            className="text-[#7B849F] flex-1
                        text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[14px]
                        leading-[16px] lg:leading-[18px] xl:leading-[20px] 2xl:leading-[22px]"
          >
            {description}
          </p>
        </div>
      </Card.Content>
    </Card>
  );
}

// app/components/sections/mission-section.tsx
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const features = [
  {
    icon: "/images/message-notification-circle.svg",
    text: "Tư vấn chuyên sâu",
  },
  { icon: "/images/check-verified.svg", text: "Đảm bảo chất lượng" },
];

const techItems = [
  { label: "CRM", src: "/images/union/union.png" },
  { label: "AI", src: "/images/union/union-2.png" },
  { label: "DATA", src: "/images/union/union-3.png" },
  { label: "TRUST", src: "/images/union/union-1.png" },
];

export function MissionSection() {
  return (
    <section
      className="
        flex flex-col lg:flex-row items-center justify-between
        px-6 md:px-12 lg:px-[200px] py-12 md:py-16 lg:py-[100px]
        gap-12 lg:gap-[162px] bg-white
      "
    >
      {/* LEFT */}
      <div className="w-full max-w-[743px] flex flex-col gap-10">
        <h2
          className="
            text-[#0749AD] font-semibold leading-[130%]
            text-[32px] md:text-[40px] lg:text-[56px]
          "
        >
          Sứ mệnh của Antco <br className="hidden xl:block" />
          về công nghệ
        </h2>

        <div className="flex flex-col gap-3">
          <p className="text-[#112639] font-bold text-[20px] leading-[32px]">
            Sứ mệnh của Antco kiến tạo tương lai nền công nghệ Việt Nam, trở
            thành cường quốc thế giới trong lĩnh vực công nghệ số.
          </p>
          <p className="text-[#7B849F] font-normal text-[20px] leading-[32px]">
            Với đội ngũ chuyên gia giàu kinh nghiệm, chúng tôi mang đến những
            giải pháp công nghệ thông minh, giúp chính phủ &amp; doanh nghiệp
            nâng cao hiệu suất, bảo mật dữ liệu và phát triển bền vững trong
            thời đại số.
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-3 pt-1">
            {features.map((f) => (
              <Badge
                key={f.text}
                className="
                  flex items-center gap-2 px-3 py-1.5
                  bg-[#D8EFFF] text-[#0749AD] border-0 rounded-full
                "
              >
                <Image src={f.icon} alt={f.text} width={24} height={24} />
                <span className="text-[16px] leading-[24px]">{f.text}</span>
              </Badge>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 pt-2">
          <Button
            className="
              h-14 px-6 rounded-full text-white
              bg-gradient-to-r from-[#2BA9FA] to-[#1851C1]
              hover:opacity-90
              text-[16px] font-semibold leading-[24px]
            "
          >
            Xem thêm
          </Button>

          <Button
            variant="ghost"
            className="
            flex items-center justify-center
            px-6 py-4 gap-2
            w-[184px] h-[56px]
            rounded-full
            font-inter font-semibold text-[16px] leading-6 text-[#1792ED]
            border border-[#1792ED]
            bg-white
          "
          >
            Nhận tư vấn ngay
          </Button>
        </div>
      </div>

      {/* RIGHT */}
      <div className="grid grid-cols-2 gap-6 w-full max-w-[541px] aspect-square">
        {techItems.map((item) => (
          <div
            key={item.label}
            className={"relative overflow-hidden aspect-square"}
          >
            <Image
              src={item.src}
              alt={item.label}
              fill
              className="object-cover"
            />
            {/* Donut ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[56%] aspect-square rounded-full border-[28px] border-white" />
            </div>
            {/* Label */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="font-[Commissioner] font-medium text-[#112639] 
                           text-[20px] md:text-[24px] lg:text-[27px] leading-[130%]"
              >
                {item.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

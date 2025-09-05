import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Card } from "@/components/ui/card";
import { Bot, Database, CloudCog, Layers3, Sparkles } from "lucide-react";
import { IconWrapper } from "@/components/ui/icon-wrapper";
import { Paragraph } from "@/components/ui/paragraph";

const items = [
  {
    icon: Bot,
    title: "Assistant/Agent",
    desc: "Trợ lý AI tùy biến theo từng phòng ban.",
  },
  {
    icon: Database,
    title: "Vector DB",
    desc: "Lưu trữ tri thức, tìm kiếm ngữ nghĩa nhanh & chính xác.",
  },
  {
    icon: CloudCog,
    title: "Model Hub",
    desc: "Kết nối LLM đa nhà cung cấp, tối ưu chi phí.",
  },
  {
    icon: Layers3,
    title: "Pipelines",
    desc: "ETL/ELT dữ liệu, tinh chỉnh & huấn luyện.",
  },
  {
    icon: Sparkles,
    title: "Observability",
    desc: "Theo dõi chất lượng & guardrails sản xuất.",
  },
];

export function Ecosystem() {
  return (
    <section className="bg-background py-[96px]">
      <Container>
        <Heading
          level={2}
          className="text-center font-heading text-[32px] leading-[40px] text-text mb-10"
        >
          Hệ sinh thái AI Antco
        </Heading>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <Card key={it.title} className="p-6 hover:shadow-md transition">
              <div className="mb-4">
                <IconWrapper icon={it.icon} />
              </div>
              <h3 className="text-[18px] leading-[26px] font-semibold text-text mb-2">
                {it.title}
              </h3>
              <Paragraph className="text-[14px] leading-[24px]">
                {it.desc}
              </Paragraph>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

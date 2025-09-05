import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { Card } from "@/components/ui/card";
import { IconWrapper } from "@/components/ui/icon-wrapper";
import {
  Cpu,
  Bot,
  Cloud,
  ShieldCheck,
  BarChart3,
  Workflow,
} from "lucide-react";

const items = [
  {
    icon: Cpu,
    title: "Tùy biến hệ thống",
    desc: "Thiết kế - phát triển theo bài toán riêng của doanh nghiệp.",
  },
  {
    icon: Bot,
    title: "AI/Chatbot",
    desc: "Tự động hóa giao tiếp, tăng hiệu suất chăm sóc & bán hàng.",
  },
  {
    icon: Cloud,
    title: "Hạ tầng Cloud",
    desc: "Triển khai, tối ưu và vận hành đa đám mây.",
  },
  {
    icon: ShieldCheck,
    title: "Bảo mật",
    desc: "Chuẩn hóa an toàn thông tin & tuân thủ.",
  },
  {
    icon: BarChart3,
    title: "Dữ liệu & BI",
    desc: "Kho dữ liệu, báo cáo, phân tích theo thời gian thực.",
  },
  {
    icon: Workflow,
    title: "Tích hợp hệ thống",
    desc: "Kết nối các nền tảng ERP/CRM/IoT mượt mà.",
  },
];

export function Solutions() {
  return (
    <section className="bg-background py-[96px]">
      <Container>
        <div className="text-center mb-12">
          <Heading
            level={2}
            className="font-heading text-[32px] leading-[40px] text-text mb-2"
          >
            Các giải pháp công nghệ của Antco
          </Heading>
          <Paragraph className="text-text-muted">
            Danh mục giải pháp bao phủ nhiều nhu cầu ở mọi quy mô.
          </Paragraph>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <Card key={it.title} className="p-6 hover:shadow-md transition">
              <div className="mb-4">
                <IconWrapper icon={it.icon} />
              </div>
              <h3 className="text-[18px] leading-[26px] font-semibold text-text mb-2">
                {it.title}
              </h3>
              <p className="text-[14px] leading-[24px] text-text-muted">
                {it.desc}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

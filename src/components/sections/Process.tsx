import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";

const steps = [
  {
    no: "01",
    title: "Khám phá",
    desc: "Phân tích nhu cầu & mục tiêu, xác định phạm vi.",
  },
  {
    no: "02",
    title: "Thiết kế",
    desc: "Kiến trúc, UX/UI, kế hoạch kỹ thuật & sprint.",
  },
  {
    no: "03",
    title: "Phát triển",
    desc: "Lập trình, kiểm thử, tích hợp & quan trắc.",
  },
  {
    no: "04",
    title: "Vận hành",
    desc: "Triển khai, tối ưu hiệu năng, đào tạo & chuyển giao.",
  },
];

export function Process() {
  return (
    <section className="bg-muted/30 py-[96px]">
      <Container>
        <Heading
          level={2}
          className="text-center font-heading text-[32px] leading-[40px] text-text mb-[40px]"
        >
          Quy trình phát triển 4 bước của Antco
        </Heading>

        {/* line (desktop) */}
        <div className="relative hidden lg:block">
          <div className="absolute left-0 right-0 top-[44px] h-[2px] bg-border" />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.no} className="relative">
              <div className="w-[56px] h-[56px] rounded-full bg-primary text-primary-foreground grid place-items-center mb-4">
                <span className="font-semibold">{s.no}</span>
              </div>
              <h3 className="text-[18px] leading-[26px] font-semibold text-text mb-1">
                {s.title}
              </h3>
              <p className="text-[14px] leading-[24px] text-text-muted">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

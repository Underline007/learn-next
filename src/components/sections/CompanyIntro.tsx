import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { Button } from "@/components/ui/button";

export function CompanyIntro() {
  return (
    <section className="bg-background py-[96px]">
      <Container className="grid gap-[48px] md:grid-cols-[1.1fr_0.9fr] items-center">
        <div>
          <Heading
            level={2}
            className="font-heading text-[40px] leading-[48px] text-text mb-4"
          >
            Antco — Giải pháp số tạo khác biệt
          </Heading>
          <Paragraph className="text-[16px] leading-[28px] text-text-muted mb-8 max-w-[640px]">
            Chúng tôi giúp doanh nghiệp chuyển đổi số nhanh, chắc, và hiệu quả
            nhờ công nghệ hiện đại, quy trình tinh gọn và đội ngũ chuyên gia
            giàu kinh nghiệm.
          </Paragraph>

          <div className="grid grid-cols-3 gap-6 mb-10">
            <div>
              <p className="text-[36px] leading-[40px] font-semibold text-text">
                120+
              </p>
              <p className="text-[13px] leading-[20px] text-text-muted">
                Dự án hoàn thành
              </p>
            </div>
            <div>
              <p className="text-[36px] leading-[40px] font-semibold text-text">
                50+
              </p>
              <p className="text-[13px] leading-[20px] text-text-muted">
                Khách hàng
              </p>
            </div>
            <div>
              <p className="text-[36px] leading-[40px] font-semibold text-text">
                4.9/5
              </p>
              <p className="text-[13px] leading-[20px] text-text-muted">
                Độ hài lòng
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground rounded-full px-6 py-3"
            >
              Liên hệ tư vấn
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-6 py-3"
            >
              Xem năng lực
            </Button>
          </div>
        </div>

        <div className="relative">
          <Image
            src="/images/intro-hero.png" // thay bằng ảnh Figma export
            alt="Antco company"
            width={640}
            height={520}
            className="rounded-xl shadow"
            priority
          />
        </div>
      </Container>
    </section>
  );
}

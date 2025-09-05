import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Paragraph } from "@/components/ui/paragraph";

export function DiscoveryCTA() {
  return (
    <section className="py-[88px] bg-gradient-to-r from-primary to-secondary">
      <Container className="text-center text-primary-foreground">
        <Heading
          level={2}
          className="font-heading text-[32px] leading-[40px] mb-3"
        >
          Khai mở giải pháp phù hợp nhất cho tổ chức của bạn
        </Heading>
        <Paragraph className="opacity-95 mb-6">
          Chia sẻ mục tiêu — Antco cùng bạn thiết kế lộ trình chuyển đổi số tối
          ưu.
        </Paragraph>
        <Button
          size="lg"
          className="bg-white text-primary rounded-full px-7 py-3 hover:bg-white/90"
        >
          Đặt lịch tư vấn
        </Button>
      </Container>
    </section>
  );
}

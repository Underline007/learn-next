import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { Button } from "@/components/ui/button";

export function ChatbotCTA() {
  return (
    <section className="relative overflow-hidden py-[96px]">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-[0.85]" />
      <Container className="relative z-10 text-center text-primary-foreground">
        <Heading
          level={2}
          className="font-heading text-[36px] leading-[44px] mb-3"
        >
          Khám Phá Sức Mạnh Chatbot AI Cùng Antco
        </Heading>
        <Paragraph className="text-[16px] leading-[28px] opacity-95 mb-8 max-w-[760px] mx-auto">
          Tăng tốc phản hồi, cá nhân hoá trải nghiệm và tự động hoá nghiệp vụ
          với Chatbot AI tích hợp sâu vào quy trình.
        </Paragraph>
        <Button
          size="lg"
          className="rounded-full px-7 py-3 bg-white text-primary hover:bg-white/90"
        >
          Dùng thử ngay
        </Button>
      </Container>
    </section>
  );
}

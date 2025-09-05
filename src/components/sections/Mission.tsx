import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";

export function Mission() {
  return (
    <section className="bg-muted/30 py-[96px]">
      <Container className="max-w-[960px]">
        <Heading
          level={2}
          className="font-heading text-[32px] leading-[40px] text-text mb-4 text-center"
        >
          Sứ mệnh của Antco về công nghệ
        </Heading>
        <Paragraph className="text-[16px] leading-[28px] text-text-muted text-center">
          Thúc đẩy đổi mới sáng tạo bằng công nghệ để kiến tạo tương lai số bền
          vững cho doanh nghiệp Việt.
        </Paragraph>

        <div className="grid gap-6 md:grid-cols-3 mt-10">
          <div>
            <h4 className="text-[16px] font-semibold text-text mb-1">Tốc độ</h4>
            <p className="text-[14px] text-text-muted">
              Triển khai nhanh nhưng vẫn đảm bảo chất lượng.
            </p>
          </div>
          <div>
            <h4 className="text-[16px] font-semibold text-text mb-1">
              Tin cậy
            </h4>
            <p className="text-[14px] text-text-muted">
              Vận hành ổn định, bảo mật và dễ mở rộng.
            </p>
          </div>
          <div>
            <h4 className="text-[16px] font-semibold text-text mb-1">Tối ưu</h4>
            <p className="text-[14px] text-text-muted">
              Tối ưu chi phí, tối ưu trải nghiệm, tối ưu kết quả.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";

const logos = [
  "/images/partners/partner-1.svg",
  "/images/partners/partner-2.svg",
  "/images/partners/partner-3.svg",
  "/images/partners/partner-4.svg",
  "/images/partners/partner-5.svg",
  "/images/partners/partner-6.svg",
];

export function Partners() {
  return (
    <section className="bg-muted/30 py-[80px]">
      <Container>
        <div className="text-center mb-10">
          <Heading
            level={2}
            className="font-heading text-[32px] leading-[40px] text-text mb-2"
          >
            Hợp tác cùng chúng tôi
          </Heading>
          <Paragraph className="text-text-muted">
            Đồng hành cùng các đối tác hàng đầu để kiến tạo giá trị bền vững.
          </Paragraph>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {logos.map((src, i) => (
            <div
              key={i}
              className="flex items-center justify-center p-4 rounded-lg bg-white shadow-sm"
            >
              <Image
                src={src}
                alt={`Partner ${i + 1}`}
                width={120}
                height={40}
                className="opacity-80"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

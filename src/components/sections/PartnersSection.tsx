import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";

const logos = [
  {
    name: "FPT",
    src: "/images/partners_logo/FPT_logo.png",
    width: 104,
    height: 64,
  },
  {
    name: "Viettel",
    src: "/images/partners_logo/Viettel_logo.png",
    width: 190,
    height: 38,
  },
  {
    name: "ChatGPT",
    src: "/images/partners_logo/chatgpt_logo.png",
    width: 62,
    height: 64,
  },
  {
    name: "Neo4j",
    src: "/images/partners_logo/neo4j_logo.png",
    width: 149,
    height: 52,
  },
  {
    name: "Qualcomm",
    src: "/images/partners_logo/Qualcomm_logo.png",
    width: 218,
    height: 40,
  },
  {
    name: "AWS",
    src: "/images/partners_logo/aws_logo.png",
    width: 56,
    height: 40,
  },
  {
    name: "Cloudflare",
    src: "/images/partners_logo/cloudFlare_logo.png",
    width: 82,
    height: 40,
  },
];

export function PartnersSection() {
  return (
    <section className="relative bg-gradient-to-r from-[#1851C1] to-[#2BA9FA] py-10">
      <Container>
        <Heading
          level={2}
          className="text-center text-white text-[20px] leading-[32px] font-bold mb-8"
        >
          Hợp tác cùng chúng tôi
        </Heading>

        {/* Mobile: scroll ngang; Desktop: grid */}
        <div className="flex overflow-x-auto no-scrollbar gap-12 md:grid md:grid-cols-7 md:gap-20 justify-center">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex-shrink-0 flex items-center justify-center h-16"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="h-auto max-h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const members = [
  { name: "Nguyễn An", role: "CEO", photo: "/images/team/ceo.jpg" },
  { name: "Trần Bình", role: "CTO", photo: "/images/team/cto.jpg" },
  { name: "Lê Châu", role: "Head of AI", photo: "/images/team/ai.jpg" },
  {
    name: "Phạm Dương",
    role: "Product Lead",
    photo: "/images/team/product.jpg",
  },
];

export function Team() {
  return (
    <section className="bg-background py-[96px]">
      <Container>
        <Heading
          level={2}
          className="text-center font-heading text-[32px] leading-[40px] text-text mb-10"
        >
          Đội ngũ của chúng tôi
        </Heading>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {members.map((m) => (
            <Card
              key={m.name}
              className="p-6 text-center hover:shadow-md transition"
            >
              <div className="mb-4">
                <Image
                  src={m.photo}
                  alt={m.name}
                  width={160}
                  height={160}
                  className="mx-auto rounded-full object-cover"
                />
              </div>
              <h3 className="text-[16px] font-semibold text-text">{m.name}</h3>
              <p className="text-[13px] text-text-muted">{m.role}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

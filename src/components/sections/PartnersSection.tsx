"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useAnimation /*, useReducedMotion*/ } from "framer-motion";
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

function LogoItem({
  name,
  src,
  width,
  height,
  onLoaded,
}: (typeof logos)[number] & { onLoaded: () => void }) {
  return (
    <div className="flex items-center justify-center h-16 shrink-0">
      <Image
        src={src}
        alt={name}
        width={width}
        height={height}
        className="h-auto max-h-12 w-auto object-contain"
        sizes="(max-width: 768px) 120px, 180px"
        priority={false}
        onLoadingComplete={onLoaded}
      />
    </div>
  );
}

export function PartnersSection() {
  const controls = useAnimation();
  const RESPECT_REDUCED_MOTION = true;

  const trackRef = useRef<HTMLDivElement>(null);
  const segmentRef = useRef<HTMLDivElement>(null);

  const [segmentWidth, setSegmentWidth] = useState(0);
  const [loadedCount, setLoadedCount] = useState(0);

  const SPEED = 80;

  const duration = useMemo(
    () => (segmentWidth ? segmentWidth / SPEED : 20),
    [segmentWidth]
  );

  useEffect(() => {
    let raf = 0;
    let tries = 0;
    const maxTries = 60;

    const measure = () => {
      const target = segmentRef.current;
      if (!target) return;
      const w = target.scrollWidth;
      if (w > 0) {
        setSegmentWidth(w);
        return;
      }
      if (tries < maxTries) {
        tries += 1;
        raf = requestAnimationFrame(measure);
      }
    };

    if (loadedCount >= logos.length) {
      measure();
    }
    return () => cancelAnimationFrame(raf);
  }, [loadedCount]);

  useEffect(() => {
    if (!segmentWidth) return;
    controls.start({
      x: [-segmentWidth, 0], // trái → phải
      transition: {
        duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  }, [controls, duration, segmentWidth]);

  const handleMouseEnter = () => {
    if (RESPECT_REDUCED_MOTION) return;
    controls.stop();
  };

  const handleMouseLeave = () => {
    if (!segmentWidth) return;
    controls.start({
      x: [-segmentWidth, 0],
      transition: {
        duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  };

  return (
    <section className="relative bg-gradient-to-r from-[#1851C1] to-[#2BA9FA] py-10">
      <Container>
        <Heading
          level={2}
          className="text-center text-white text-[20px] leading-[32px] font-bold mb-8"
        >
          Hợp tác cùng chúng tôi
        </Heading>

        <div
          className="
            group relative overflow-hidden rounded-xl
            [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
            [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
          "
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            ref={trackRef}
            animate={controls}
            className="flex w-max items-center gap-12 whitespace-nowrap"
          >
            {/* Segment A */}
            <div ref={segmentRef} className="flex items-center gap-12 pr-12">
              {logos.map((logo) => (
                <LogoItem
                  key={`a-${logo.name}`}
                  {...logo}
                  onLoaded={() => setLoadedCount((c) => c + 1)}
                />
              ))}
            </div>
            {/* Segment B */}
            <div className="flex items-center gap-12 pr-12">
              {logos.map((logo) => (
                <LogoItem
                  key={`b-${logo.name}`}
                  {...logo}
                  onLoaded={() => setLoadedCount((c) => c + 1)}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const sizeMap = {
  sm: { class: "h-8 w-8", size: 32 },
  md: { class: "h-10 w-10", size: 40 },
  lg: { class: "h-16 w-16", size: 64 },
};

export function Avatar({
  src,
  alt,
  className,
  size = "md",
}: {
  src: string;
  alt: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={sizeMap[size].size}
      height={sizeMap[size].size}
      className={cn(
        "rounded-full object-cover",
        sizeMap[size].class,
        className
      )}
    />
  );
}

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Avatar({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={40}
      height={40}
      className={cn("h-10 w-10 rounded-full object-cover", className)}
    />
  );
}

import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/images/logo.svg"
      alt="Antco Logo"
      width={120}
      height={40}
      className={className}
      priority
    />
  );
}

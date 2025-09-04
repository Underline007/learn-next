import type { Metadata } from "next";
import { inter, poppins } from "@/app/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Antco Website",
  description: "Corporate website built with Next.js + Tailwind",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}

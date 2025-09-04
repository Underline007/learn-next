import { Container } from "@/components/ui/container";
import { Logo } from "@/components/shared/Logo";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <Container className="py-10 grid gap-8 md:grid-cols-3">
        {/* Logo + description */}
        <div>
          <Logo />
          <p className="mt-3 text-sm text-muted-foreground">
            Building modern solutions for your business.
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="mb-3 text-sm font-semibold">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/careers">Careers</Link>
              </li>
              <li>
                <Link href="/privacy">Privacy</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social */}
        <div>
          <h4 className="mb-3 text-sm font-semibold">Follow us</h4>
          <div className="flex space-x-4">
            <Link href="https://twitter.com">Twitter</Link>
            <Link href="https://facebook.com">Facebook</Link>
            <Link href="https://linkedin.com">LinkedIn</Link>
          </div>
        </div>
      </Container>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Antco. All rights reserved.
      </div>
    </footer>
  );
}

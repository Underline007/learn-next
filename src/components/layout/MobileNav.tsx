import Link from "next/link";

export function MobileNav({
  items,
}: {
  items: { label: string; href: string }[];
}) {
  return (
    <div className="md:hidden border-t bg-background shadow">
      <nav className="flex flex-col space-y-2 p-4">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}

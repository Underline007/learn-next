import Link from 'next/link';
export function NavigationBar({
  items,
}: {
  items: { label: string; href: string }[];
}) {
  return (
    <nav className="flex gap-10">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-sm font-medium text-foreground hover:text-primary transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

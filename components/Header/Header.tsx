"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  const SActiveLink = "text-black no-underline text-3xl font-bold";
  const SUnactiveLink =
    "text-white hover:text-slate-700 no-underline text-3xl font-semibold";

  const pageLinks = [
    { name: "HOME", href: "/" },
    { name: "PRODUCTS", href: "/products" },
    { name: "DOCS", href: "/docs" },
    { name: "PLACE ORDER", href: "/order-product" },
  ];
  return (
    <header className="w-full p-3 bg-slate-500 ">
      <nav className="flex justify-center gap-x-14 duration-75 ">
        {pageLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              className={isActive ? SActiveLink : SUnactiveLink}
              href={link.href}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}

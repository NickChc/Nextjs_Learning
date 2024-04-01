"use client";
import { PropsWithChildren } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const authNavLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({ children }: PropsWithChildren) {
  const pathname = usePathname();
  return (
    <div className="w-full  flex flex-col items-center gap-y-1 ">
      {authNavLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link
            key={link.href}
            className={
              isActive
                ? "font-bold text-[purple] underline"
                : "no-underline text-black "
            }
            href={link.href}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}

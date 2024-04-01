"use client";
import { PropsWithChildren, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const authNavLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({ children }: PropsWithChildren) {
  const [input, setInput] = useState<string>("");

  const pathname = usePathname();
  return (
    <div className="w-full  flex flex-col items-center gap-y-1 ">
      <input
        className="p-3 outline-none "
        placeholder="non-preservable"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
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

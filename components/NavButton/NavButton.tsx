"use client";
import { useRouter } from "next/navigation";
import { PropsWithChildren } from "react";

interface NavButtonProps {
  path: string;
}

export function NavButton({
  children,
  path,
}: PropsWithChildren<NavButtonProps>) {
  const router = useRouter();
  return (
    <button
      className="p-3 border-solid border border-black rounded-sm outline-none cursor-pointer "
      onClick={() => router.push(path)}
    >
      {children}
    </button>
  );
}

import { PropsWithChildren } from "react";

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <>
      <p>THIS IS AUTH LAYOUT!</p>
      {children}
    </>
  );
}

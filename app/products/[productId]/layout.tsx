import { PropsWithChildren } from "react";

export default function ProductLayout({ children }: PropsWithChildren) {
  return (
    <>
      {children}
      <p>Features Products</p>
    </>
  );
}

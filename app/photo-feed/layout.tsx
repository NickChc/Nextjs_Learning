import { PropsWithChildren } from "react";

interface LayoutProps {
  modal: React.ReactNode;
  children: PropsWithChildren;
}

export default function Layout(props: LayoutProps) {
  return (
    <>
      <h1>AEEE</h1>
      {props.modal}
      {props.children}
    </>
  );
}

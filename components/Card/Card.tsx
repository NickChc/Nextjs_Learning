import { PropsWithChildren } from "react";

export function Card({ children }: PropsWithChildren) {
  return (
    <div className="p-[100px] m-[10px] shadow-xl border-solid border border-black grid place-items-center rounded-lg ">
      {children}
    </div>
  );
}

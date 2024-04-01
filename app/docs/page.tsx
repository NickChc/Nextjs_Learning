import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "DOCS",
  },
};

export default function Docs() {
  return (
    <div className="flex flex-col items-center ">
      <h1>DOCS</h1>
    </div>
  );
}

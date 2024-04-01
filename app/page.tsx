import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center ">
      <h1>HOME</h1>
      <Link href={"/blog"}>Blog</Link>
    </div>
  );
}

import Link from "next/link";

export default function Blog() {
  return (
    <div className="flex flex-col items-center ">
      <h1>BLOG</h1>
      <Link href={"/"}>HOME PAGE</Link>

      <Link href={"/products/1"} replace>Product 1</Link>
      <Link href={"/products/2"}>PRODUCT 2</Link>
    </div>
  );
}

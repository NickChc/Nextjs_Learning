"use client";
import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();

  function handleClick() {
    console.log("PLACING ORDER...");
    router.push("/");
  }

  return (
    <div className="w-full min-h-dvh flex flex-col items-center ">
      <h1>ORDER PRODUCT</h1>
      <button onClick={handleClick}>PLACE ORDER</button>
    </div>
  );
}

"use client";
import { TProduct } from "@/@types/general";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  product: TProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();

  return (
    <div
      className="flex flex-col items-center hover:bg-slate-300 rounded-md cursor-pointer duration-75"
      onClick={() => router.push(`/products/${product.id}`)}
    >
      <img
        className="w-[50%] aspect-square object-cover border-solid border border-slate-500 rounded-lg "
        src={product.images[0]}
        alt="product image"
        loading="lazy"
      />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
    </div>
  );
}

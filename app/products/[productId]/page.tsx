import { Metadata } from "next";
import { TProduct } from "@/@types/general";
import { NavButton } from "@/components/NavButton";

interface ProductPageProps {
  params: {
    productId: number;
  };
}

export function generateMetadata({ params }: ProductPageProps): Metadata {
  return {
    title: `PRODUCT ${params.productId}`,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const response = await fetch(
    `https://dummyjson.com/products/${params.productId}`
  );
  const product: TProduct = await response.json();

  

  return (
    <div className="w-[80%] flex gap-x-4 ">
      <div className="w-[30%] grid grid-cols-2 ">
        {product.images.map((img, index) => {
          return (
            <img
              className="w-[90%] m-1 aspect-square object-cover border-solid border border-black rounded-md "
              src={img}
              alt={`product image ${index + 1}`}
              loading="lazy"
            />
          );
        })}
      </div>
      <div>
        <h1>{product.title}</h1>
        <h2>{product.description}</h2>
        <NavButton path={`/products/${params.productId}/reviews`}>
          REVIEWS
        </NavButton>
      </div>
    </div>
  );
}

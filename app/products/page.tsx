import { ProductCard } from "@/components/ProductCard";
import { TProduct } from "@/@types/general";

export const metadata = {
  title: "PRODUCTS",
};

export default async function Products() {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  const products: TProduct[] = data.products;
  console.log(products);

  return (
    <div className="min-h-dvh flex flex-col items-center">
      <div className="w-[80%] grid grid-cols-4 gap-x-3 gap-y-6 mt-14">
        {products?.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}

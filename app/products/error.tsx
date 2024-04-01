"use client";

interface ProductsErrorProps {
  error: Error;
}

export default function ProductsError({ error }: ProductsErrorProps) {
  return <h1>{error.message}</h1>;
}

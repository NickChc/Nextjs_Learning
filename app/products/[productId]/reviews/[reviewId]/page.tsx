"use client";
import { notFound } from "next/navigation";
import { getRandom } from "@/utils/getRandom";

interface ReviewPageProps {
  params: {
    productId: number;
    reviewId: number;
  };
}

export default function ReviewPage({ params }: ReviewPageProps) {
  const random = getRandom(2);

  if (random === 1) {
    throw new Error("Error Loading Review!");
  }

  if (params.reviewId > 1000) {
    notFound();
  }
  return (
    <div>
      <h1>
        product ID: {params.productId}. review ID - {params.reviewId}
      </h1>
    </div>
  );
}

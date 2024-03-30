import { notFound } from "next/navigation";


interface ReviewPageProps {
  params: {
    productId: number;
    reviewId: number;
  };
}

export default function ReviewPage({ params }: ReviewPageProps) {
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

import { TComment } from "@/@types/general";
import { ReviewItem } from "@/app/products/[productId]/reviews/ReviewItem";
import { notFound } from "next/navigation";

export default async function Reviews() {
  const response = await fetch("https://dummyjson.com/comments");
  const data = await response.json();
  const comments: TComment[] = data.comments;

  return (
    <div className="min-h-dvh flex flex-col items-stretch gap-y-4 ">
      <h1 className="text-center ">REVIEWS</h1>
      {comments?.map((com) => {
        return <ReviewItem key={com.id} comment={com} />;
      })}
    </div>
  );
}

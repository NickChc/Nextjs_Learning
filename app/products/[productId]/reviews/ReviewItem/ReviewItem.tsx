"use client";
import { TComment } from "@/@types/general";
import { useRouter } from "next/navigation";

interface ReviewItemProps {
  comment: TComment;
}

export function ReviewItem({ comment }: ReviewItemProps) {
  const router = useRouter();
  return (
    <div
      className="p-3 border-solid border border-slate-800 rounded-md hover:text-white hover:bg-slate-500 cursor-pointer transition-[colors] duration-75 "
      onClick={() => router.push(`reviews/${comment.id}`)}
    >
      <h2>{comment.body}</h2>
    </div>
  );
}

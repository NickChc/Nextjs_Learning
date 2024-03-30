
interface NotFoundReviewProps {
    params: {
        reviewId: number;
    }
}

export default function NotFoundReview({ params }: NotFoundReviewProps) {
    return (
      <div className="min-h-dvh grid place-content-center ">
        <h1>Review Not Found!</h1>
      </div>
    );
}
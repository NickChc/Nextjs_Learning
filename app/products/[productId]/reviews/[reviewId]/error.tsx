"use client";

interface ReviewIdErrorProps {
  error: Error;
  reset: () => void;
}

export default function ReviewIdError({ error, reset }: ReviewIdErrorProps) {
  return (
    <div>
      <h1>ERROR, {error.message}</h1>
      <button onClick={reset}>TRY AGAIN</button>
    </div>
  );
}

"use client";
import { useRouter } from "next/navigation";
import { startTransition } from "react";

// Error boundaries must be Client Components

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };
  return (
    <div>
      <h2>{error.message}</h2>
      <button onClick={reload}>Try again</button>
    </div>
  );
}

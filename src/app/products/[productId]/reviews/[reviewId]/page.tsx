import React from "react";

export default async function page({
  params,
}: {
  params: Promise<{ reviewId: string }>;
}) {
  const reviewId = (await params).reviewId;
  return (
    <div>
      <h2>Review Details About {reviewId}</h2>
    </div>
  );
}

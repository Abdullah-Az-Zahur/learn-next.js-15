import React from "react";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div>
      <h1>
        Product {id} details rendered at {new Date().toLocaleTimeString()}{" "}
      </h1>
    </div>
  );
}

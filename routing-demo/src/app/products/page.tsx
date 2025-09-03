import Link from "next/link";
import React from "react";

const page = () => {
  const productId = 100;
  return (
    <div>
      <Link href="/">Home</Link>
      <h2>Product List</h2>
      <h4>
        <Link href="/products/1">Product 1</Link>
      </h4>
      <h4>
        {" "}
        <Link href="/products/2">Product 2</Link>
      </h4>
      <h4>
        <Link href="/products/3" replace>
          Product 3
        </Link>
      </h4>
      <h4>
        <Link href={`/products/${productId}`}>Product {productId}</Link>
      </h4>
    </div>
  );
};

export default page;

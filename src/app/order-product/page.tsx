"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function OrderProduct() {
  const router = useRouter();
  const handleOrder = () => {
    console.log("Placing Order");
    router.push("/");
  };
  return (
    <div>
      <h1>OrderProduct</h1>
      <button onClick={handleOrder} className="">
        Order
      </button>
    </div>
  );
}
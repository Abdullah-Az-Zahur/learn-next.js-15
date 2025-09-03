import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h3>f2 page</h3>
      <Link href={"/f4"}>F4</Link>
      <Link href={"/f5"}>F5</Link>
    </div>
  );
};

export default page;

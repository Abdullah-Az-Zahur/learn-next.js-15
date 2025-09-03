import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h3>F1 page</h3>
      <Link href={"/f1/f2"}>F2</Link>
      <Link href={"/f3"}>F3</Link>
    </div>
  );
};

export default page;

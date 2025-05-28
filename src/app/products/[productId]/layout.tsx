import React from "react";

export default function productDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <p>product Details Layout</p>
    </>
  );
}

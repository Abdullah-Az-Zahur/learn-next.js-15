import React from "react";

export default function productDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body>
          {children}
          <p>product Details Layout</p>
        </body>
      </html>
    </>
  );
}

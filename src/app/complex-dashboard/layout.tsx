import React from "react";

export default function ComplexDashboardLayout({
  children,
  users,
  revenue,
  notification,
}: {
  children: React.ReactNode;
  users?: React.ReactNode;
  revenue?: React.ReactNode;
  notification?: React.ReactNode;
}) {
  return (
    <>
      <div> {children} </div>
      <div className="flex">
        <div className="flex flex-col gap-4">
          <div> {users} </div>
          <div> {revenue} </div>
        </div>
        <div> {notification} </div>
      </div>
    </>
  );
}

import React from "react";

export default function ComplexDashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn = true;
  return isLoggedIn ? (
    <>
      <div> {children} </div>
      <div className="flex">
        <div className="flex flex-col gap-4">
          <div> {users} </div>
          <div> {revenue} </div>
        </div>
        <div> {notifications} </div>
      </div>
    </>
  ) : (
    login
  );
}

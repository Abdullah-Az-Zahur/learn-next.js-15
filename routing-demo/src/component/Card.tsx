import React from "react";

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-2 m-2 shadow-2xl border-2 justify-center items-center">
      {children}
    </div>
  );
};

export default Card;
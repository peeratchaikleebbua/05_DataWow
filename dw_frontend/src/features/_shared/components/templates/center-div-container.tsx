import React from "react";

const CenterDivContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center items-center h-screen">{children}</div>
  );
};

export default CenterDivContainer;

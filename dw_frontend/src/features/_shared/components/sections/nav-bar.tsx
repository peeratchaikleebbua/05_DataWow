import React from "react";
import BoardText from "../elements/a-board-text";
import { Button } from "../elements/button";

const NavBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="dark text-foreground flex w-full h-[50px]  flex-shrink-0 bg-green-950 items-center justify-between pl-5 pr-5">
        <BoardText />
        <Button>Sign In</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 bg-gray-200 h-full">
        <div>test</div>
        <div className="md:col-span-2">{children}</div>
        <div>test</div>
      </div>
    </div>
  );
};

export default NavBar;

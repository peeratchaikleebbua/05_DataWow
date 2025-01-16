"use client";

import React from "react";
import BoardText from "../elements/a-board-text";
import { Button } from "../elements/button";
import { signOut } from "next-auth/react";
import SideBar from "./side-bar";
import { HiOutlineBars3 } from "react-icons/hi2";
import DrawerSidebar from "./drawer-side-bar";
import { User } from "@/core/models/user/entity/user.entity";

const NavBar = ({
  children,
  userId,
}: {
  children: React.ReactNode;
  userId: User["id"];
}) => {
  return (
    <div className="flex flex-col h-full w-full">
      {/* Top navigation bar */}
      <div className="dark text-foreground flex w-full h-[50px]  flex-shrink-0 bg-green-950 items-center justify-between pl-5 pr-5">
        <BoardText />

        {/* Display sign-out button for larger screens */}
        <div className="hidden md:block">
          <Button onClick={() => signOut()}>Sign In</Button>
        </div>

        {/* Display drawer sidebar toggle for small screens */}
        <div className="block md:hidden">
          <DrawerSidebar userId={userId}>
            <HiOutlineBars3 className="cursor-pointer text-xl" />
          </DrawerSidebar>
        </div>
      </div>

      {/* Main grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 bg-gray-300 min-h-screen h-auto">
        {/* Sidebar only visible on larger screens */}
        <div className="hidden md:block">
          <SideBar userId={userId} />
        </div>

        <div className="md:col-span-3 w-full">{children}</div>
      </div>
    </div>
  );
};

export default NavBar;

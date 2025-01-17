import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "../elements/sheet";
import SideBar from "./side-bar";
import { User } from "@/core/models/user/entity/user.entity";
import { FaArrowRightLong } from "react-icons/fa6";


interface IDrawerSidebar {
  children: React.ReactNode;
  userId: User["id"];
}

const DrawerSidebar = ({ children, userId }: IDrawerSidebar) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseSheet = () => {
    setIsOpen(false);
  };
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="dark bg-green-950 text-foreground">
        <div className="grid gap-4 py-4">
          <FaArrowRightLong className="ml-5 cursor-pointer text-white" onClick={handleCloseSheet}/>
          <SideBar userId={userId} onLinkClick={handleCloseSheet} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default DrawerSidebar;

import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "../elements/sheet";
import SideBar from "./side-bar";
import { User } from "@/core/models/user/entity/user.entity";

interface IDrawerSidebar {
  children: React.ReactNode;
  userId: User["id"];
}

const DrawerSidebar = ({ children, userId }: IDrawerSidebar) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="dark bg-green-950 text-foreground">
        <SheetClose asChild>
          <div className="grid gap-4 py-4">
            <SideBar userId={userId} />
          </div>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};

export default DrawerSidebar;

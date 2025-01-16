import React from "react";
import { Button } from "../elements/button";
import Link from "next/link";
import { RiHome3Fill } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { Label } from "../elements/label";
import { User } from "@/core/models/user/entity/user.entity";

interface ISideBar {
  userId: User["id"];
}

const SideBar = ({ userId }: ISideBar) => {
  return (
    <div className="flex flex-col justify-start items-start md:mt-5 md:ml-5">
      <Button variant={"ghost"}>
        <RiHome3Fill />
        <Link type="submit" href="/post">
          <Label>Home</Label>
        </Link>
      </Button>
      <Button variant={"ghost"}>
        <FaRegEdit />
        <Link type="submit" href={`/post/${userId}`}>
          <Label>Our Blog</Label>
        </Link>
      </Button>
    </div>
  );
};

export default SideBar;

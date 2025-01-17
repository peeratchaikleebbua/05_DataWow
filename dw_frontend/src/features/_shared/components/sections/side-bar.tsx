import React from "react";
import { Button } from "../elements/button";
import Link from "next/link";
import { RiHome3Fill } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { Label } from "../elements/label";
import { User } from "@/core/models/user/entity/user.entity";

interface ISideBar {
  userId: User["id"];
  onLinkClick?: () => void;
}

const SideBar = ({ userId, onLinkClick }: ISideBar) => {
  return (
    <div className="flex flex-col justify-start items-start md:mt-5 md:ml-5">
      <Link type="submit" href="/post" passHref>
        <Button type="button" variant={"ghost"} onClick={onLinkClick}>
          <RiHome3Fill />
          <Label className="cursor-pointer">Home</Label>
        </Button>
      </Link>
      <Link type="submit" href={`/post/user/${userId}`} passHref>
        <Button type="button" variant={"ghost"} onClick={onLinkClick}>
          <FaRegEdit />
          <Label className="cursor-pointer">Our Blog</Label>
        </Button>
      </Link>
    </div>
  );
};

export default SideBar;

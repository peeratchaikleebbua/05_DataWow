
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

const UserAvatar = () => {
  return (
    <Avatar className="w-7 h-7 md:w-10 md:h-10">
      <AvatarImage
        src="https://github.com/shadcn.png"
        alt="@shadcn"
      />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;

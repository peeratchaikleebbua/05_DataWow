import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import React from "react";

const UserAvatar = () => {
  return (
    <Avatar className="w-7 h-7 md:w-10 md:h-10">
      <AvatarImage
        className="rounded-full"
        src="https://github.com/shadcn.png"
        alt="@shadcn"
      />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;

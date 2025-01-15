import BoardText from "@/features/_shared/components/elements/a-board-text";
import { Label } from "@radix-ui/react-label";
import Image from "next/image";
import React from "react";

const AuthCardBoard = () => {
  return (
    <div className="bg-green-800 w-full h-full rounded-3xl flex flex-col justify-center items-center gap-3">
      <div className="relative w-full max-w-xs h-64">
        <Image
          src="/images/datawow_login.png"
          alt="login"
          fill
          className="object-contain"
        />
      </div>
      <BoardText />
    </div>
  );
};

export default AuthCardBoard;

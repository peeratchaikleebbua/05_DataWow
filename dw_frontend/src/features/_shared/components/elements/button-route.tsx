"use client";

import React from "react";
import { Button } from "./button";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";


const ButtonRoute = () => {
  const router = useRouter();

  return (
    <Button className="rounded-full"  size="icon" onClick={() => router.back()}>
      <FaArrowLeft />
    </Button>
  );
};

export default ButtonRoute;

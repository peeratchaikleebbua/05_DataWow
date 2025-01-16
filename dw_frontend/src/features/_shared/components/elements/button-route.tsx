"use client";

import React from "react";
import { Button } from "./button";
import { ChevronLeftCircle } from "lucide-react";
import { useRouter } from "next/navigation";

const ButtonRoute = () => {
  const router = useRouter();

  return (
    <Button variant="outline" size="icon" onClick={() => router.back()}>
      <ChevronLeftCircle />
    </Button>
  );
};

export default ButtonRoute;

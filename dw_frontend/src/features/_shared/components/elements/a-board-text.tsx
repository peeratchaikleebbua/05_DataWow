import { Label } from "@radix-ui/react-label";
import { Castoro } from "next/font/google";
import React from "react";

const castoroItalic = Castoro({
  weight: "400",
  style: "italic",
  display: "auto",
  subsets: ["latin", "latin-ext"],
});

const BoardText = () => {
  return (
    <Label className={`text-2xl ${castoroItalic.className}`}>a Board</Label>
  );
};

export default BoardText;

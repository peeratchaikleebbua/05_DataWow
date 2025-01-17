import React from "react";
import { Button } from "./button";
import { cn } from "../../libs/utils";

interface IOutlinedButton {
  onClick: () => void;
  label: string;
  className?: string;
}

const OutlinedButton = ({ onClick, label, className }: IOutlinedButton) => {
  return (
    <Button
      type="button"
      className={cn("border-2 border-green-600", className)}
      variant={"link"}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default OutlinedButton;

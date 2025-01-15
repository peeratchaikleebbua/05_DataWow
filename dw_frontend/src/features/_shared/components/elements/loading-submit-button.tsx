import React from "react";
import { Button } from "./button";
import { Loader2 } from "lucide-react";

interface ILoadingSubmitButton {
  label: string;
  disabled: boolean;
}

const LoadingSubmitButton = ({ label, disabled }: ILoadingSubmitButton) => {
  return (
    <Button type="submit" disabled={disabled}>
      <Loader2 className="animate-spin" />
      {disabled ? null : label}
    </Button>
  );
};

export default LoadingSubmitButton;

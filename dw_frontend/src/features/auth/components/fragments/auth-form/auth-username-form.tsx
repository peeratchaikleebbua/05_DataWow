import TextForm from "@/features/_shared/components/fragments/form-inputs/text-form";
import React from "react";

interface IAuthUsernameForm {
  disabled?: boolean;
}

const AuthUsernameForm = ({ disabled }: IAuthUsernameForm) => {
  return (
    <TextForm
      name="username"
      required
      placeholder="Username"
      disabled={disabled}
    />
  );
};

export default AuthUsernameForm;

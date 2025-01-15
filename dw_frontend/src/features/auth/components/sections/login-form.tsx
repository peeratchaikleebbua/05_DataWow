import React from "react";
import AuthUsernameForm from "../fragments/auth-form/auth-username-form";

interface ILoginForm {
  disabled?: boolean;
}

const LoginForm = (props: ILoginForm) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <AuthUsernameForm {...props} />
    </div>
  );
};

export default LoginForm;

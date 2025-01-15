import React from "react";
import AuthUsernameForm from "../fragments/auth-form/auth-username-form";

interface ILoginForm {
  disabled?: boolean;
}

const LoginForm = (props: ILoginForm) => {
  return <AuthUsernameForm {...props} />;
};

export default LoginForm;

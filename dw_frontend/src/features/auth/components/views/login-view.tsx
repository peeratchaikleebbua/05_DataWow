"use client"

import React from "react";
import LoginTemplate from "../templates/login-template";
import { useLoginViewModel } from "../../hooks/view-models/use-login-view-model";
import { FormProvider } from "react-hook-form";
import LoadingSubmitButton from "@/features/_shared/components/elements/loading-submit-button";
import LoginForm from "../sections/login-form";

const LoginView = () => {
  const { method, onSubmit, loading } = useLoginViewModel();

  return (
    <FormProvider {...method}>
      <form onSubmit={method.handleSubmit(onSubmit)}>
        <LoginTemplate
          renderLoginSection={<LoginForm />}
          renderLoginButton={
            <LoadingSubmitButton label="Sign In" disabled={loading} />
          }
        />
      </form>
    </FormProvider>
  );
};

export default LoginView;

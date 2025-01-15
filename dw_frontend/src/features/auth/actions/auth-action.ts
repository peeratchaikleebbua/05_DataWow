"use server";

import { signIn } from "@/auth";
import { LoginUser } from "@/core/models/auth/entity/auth.entity";
import { CredentialsSignin } from "next-auth";

export const login = async (loginUser: LoginUser) => {
  try {
    await signIn("credentials", {
      redirect: false,
      callbackUrl: "/post",
      username: loginUser.username,
    });
  } catch (error) {
    const authError = error as CredentialsSignin;
    return authError.cause;
  }
};

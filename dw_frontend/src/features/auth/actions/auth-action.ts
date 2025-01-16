"use server";

import { signIn } from "@/auth";
import { LoginUser } from "@/core/models/auth/entity/auth.entity";

export const login = async (loginUser: LoginUser) => {
  try {
    const result = await signIn("credentials", {
      redirect: false,
      callbackUrl: "/post",
      username: loginUser.username,
    });

    return result;
  } catch (error) {
    const authError = error as Error;
    if (authError) {
      throw new Error("กรุณาตรวจสอบ username อีกครั้ง");
    } else {
      throw new Error("เกิดข้อผิดพลาดในการเข้าสู่ระบบ");
    }
  }
};

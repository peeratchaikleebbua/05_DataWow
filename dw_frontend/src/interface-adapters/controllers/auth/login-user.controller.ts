import { RepositoryResponse } from "@/core/common/repository.common";
import { InputParseError } from "@/core/errors/common";
import { LoginUser, loginUserSchema } from "@/core/models/auth/entity/auth.entity";
import {
  IAuthUser,
  LoginUserUseCase,
} from "@/core/models/auth/use-cases/login-user.use-case";
import { authRepository } from "@/infrastructures/remote-repository/repository/remote-auth-repository";
import { AxiosRequestConfig } from "axios";

/**
 * Controller
 * 1. check authenticateion
 * 2. check session
 * 3. check input validation if have
 * 4. invoke usecase
 * 5. return presenter if have
 */

export const loginUserController = async (
  loginUser: LoginUser,
  config?: AxiosRequestConfig
): Promise<RepositoryResponse<IAuthUser>> => {
  const loginUserUseCase = new LoginUserUseCase(authRepository);

  // check input validation
  const { data, error: inputParseError } = loginUserSchema.safeParse(loginUser);
  if (inputParseError) {
    throw new InputParseError("กรุณากรอกข้อมูลเข้าสู่ระบบให้ถูกต้อง", {
      cause: inputParseError,
    });
  }

  const user = await loginUserUseCase.execute({
    payload: data,
    config,
  });

  return user;
};

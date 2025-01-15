import { z } from "zod";

import { LoginUser } from "../entity/auth.entity";
import {
  RepositoryRequest,
  RepositoryResponse,
} from "@/core/common/repository.common";
import { userSchema } from "../../user/entity/user.entity";
import { IAuthRepository } from "../entity/auth.repository";

/**
 * Login User Schema
 * Token User Entity
 * Login Success
 */

export const authUserSchema = z
  .object({
    user: userSchema.pick({
      id: true,
      username: true,
    }),
  })
  .extend({
    accessToken: z.string(),
  });

export type IAuthUser = z.infer<typeof authUserSchema>;

/**
 * Login User UseCase
 */
export class LoginUserUseCase {
  constructor(private authRepository: IAuthRepository) {}

  async execute(
    request: RepositoryRequest<LoginUser>
  ): Promise<RepositoryResponse<IAuthUser>> {
    return await this.authRepository.login(request);
  }
}

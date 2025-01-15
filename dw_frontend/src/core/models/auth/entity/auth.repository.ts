import {
  RepositoryRequest,
  RepositoryResponse,
} from "@/core/common/repository.common";
import { LoginUser } from "./auth.entity";
import { IAuthUser } from "../use-cases/login-user.use-case";

export type IAuthRepository = {
  login(
    request: RepositoryRequest<LoginUser>
  ): Promise<RepositoryResponse<IAuthUser>>;
};

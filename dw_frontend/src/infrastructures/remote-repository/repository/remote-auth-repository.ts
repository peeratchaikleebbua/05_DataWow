import {
  RepositoryRequest,
  RepositoryResponse,
} from "@/core/common/repository.common";
import { LoginUser } from "@/core/models/auth/entity/auth.entity";
import { IAuthRepository } from "@/core/models/auth/entity/auth.repository";
import { IAuthUser } from "@/core/models/auth/use-cases/login-user.use-case";
import { AxiosApiResponse, postResource } from "../config/api-client";

export class RemoteAuthRepository implements IAuthRepository {
  private authUrl = "/auths";

  async login(
    request: RepositoryRequest<LoginUser>
  ): Promise<RepositoryResponse<IAuthUser>> {
    const response = await postResource<AxiosApiResponse<IAuthUser>>(
      `${this.authUrl}/login`,
      request.payload,
      request.config
    );
    return {
      data: response.data,
      meta: response.meta,
    };
  }
}

export const authRepository = new RemoteAuthRepository();

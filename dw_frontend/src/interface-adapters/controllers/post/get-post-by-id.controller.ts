import { RepositoryResponse } from "@/core/common/repository.common";
import { UnauthenticatedError } from "@/core/errors/auth";
import { InputParseError } from "@/core/errors/common";
import { Post } from "@/core/models/post/entity/post.entity";
import { getPostByIdSchema, GetPostByIdUseCase, IGetPostById } from "@/core/models/post/use-cases/get-post-by-id.use-case";
import { postRepository } from "@/infrastructures/remote-repository/repository/remote-post-repository";
import { AxiosRequestConfig } from "axios";

/**
 * Controller
 * 1. check authenticateion
 * 2. check session
 * 3. check input validation if have
 * 4. invoke usecase
 * 5. return presenter if have
 */

export const getPostByIdController = async (
  sessionId: number | undefined,
  getPostById: IGetPostById,
  config?: AxiosRequestConfig
): Promise<RepositoryResponse<Post>> => {
  // check authentication
  if (!sessionId) {
    throw new UnauthenticatedError("กรุณาเข้าสู่ระบบ");
  }

  const getPostByIdUseCase = new GetPostByIdUseCase(postRepository);

  // check input validation
  const { data, error: inputParseError } =
    getPostByIdSchema.safeParse(getPostById);
  if (inputParseError) {
    throw new InputParseError(`Invalid get Post Input`, {
      cause: inputParseError,
    });
  }

  // invoke usecase
  const newPost = await getPostByIdUseCase.execute({
    payload: data,
    config,
  });

  return newPost;
};

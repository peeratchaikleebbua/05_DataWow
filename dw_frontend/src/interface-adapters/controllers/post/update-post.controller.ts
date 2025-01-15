import { RepositoryResponse } from "@/core/common/repository.common";
import { UnauthenticatedError } from "@/core/errors/auth";
import { InputParseError } from "@/core/errors/common";
import { Post } from "@/core/models/post/entity/post.entity";
import {
  IUpdatePost,
  updatePostSchema,
  UpdatePostUseCase,
} from "@/core/models/post/use-cases/update-post.use-case";
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

export const updatePostController = async (
  sessionId: number | undefined,
  updatePost: IUpdatePost,
  config?: AxiosRequestConfig
): Promise<RepositoryResponse<Post>> => {
  // check authentication
  if (!sessionId) {
    throw new UnauthenticatedError("กรุณาเข้าสู่ระบบ");
  }

  const updatePostUseCase = new UpdatePostUseCase(postRepository);

  // check input validation
  const { data, error: inputParseError } =
    updatePostSchema.safeParse(updatePost);
  if (inputParseError) {
    throw new InputParseError(`Invalid Update Post Input`, {
      cause: inputParseError,
    });
  }

  // invoke usecase
  const newPost = await updatePostUseCase.execute({
    payload: data,
    config,
  });

  return newPost;
};

import { RepositoryResponse } from "@/core/common/repository.common";
import { UnauthenticatedError } from "@/core/errors/auth";
import { Post } from "@/core/models/post/entity/post.entity";
import { GetPostsUseCase } from "@/core/models/post/use-cases/get-posts.use-case";
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

export const getPostsController = async (
  sessionId: number | undefined,
  config?: AxiosRequestConfig
): Promise<RepositoryResponse<Post[]>> => {
  // check authentication
  if (!sessionId) {
    throw new UnauthenticatedError("กรุณาเข้าสู่ระบบ");
  }

  const getPostsUseCase = new GetPostsUseCase(postRepository);

  // invoke usecase
  const newPost = await getPostsUseCase.execute(config);

  return newPost;
};

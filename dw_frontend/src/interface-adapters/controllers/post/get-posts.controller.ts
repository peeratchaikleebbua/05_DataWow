import { RepositoryResponse } from "@/core/common/repository.common";
import { UnauthenticatedError } from "@/core/errors/auth";
import { InputParseError } from "@/core/errors/common";
import { Post } from "@/core/models/post/entity/post.entity";
import {
  getPostsSchema,
  GetPostsUseCase,
  IGetPosts,
} from "@/core/models/post/use-cases/get-posts.use-case";
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
  getPosts?: IGetPosts,
  config?: AxiosRequestConfig
): Promise<RepositoryResponse<Post[]>> => {
  // check authentication
  if (!sessionId) {
    throw new UnauthenticatedError("กรุณาเข้าสู่ระบบ");
  }

  const getPostsUseCase = new GetPostsUseCase(postRepository);

  // check input validation
  const { data, error: inputParseError } = getPostsSchema.safeParse(getPosts);
  if (inputParseError) {
    throw new InputParseError(`Invalid get Posts Input`, {
      cause: inputParseError,
    });
  }

  // invoke usecase
  const posts = await getPostsUseCase.execute({
    payload: data,
    config,
  });

  return posts;
};

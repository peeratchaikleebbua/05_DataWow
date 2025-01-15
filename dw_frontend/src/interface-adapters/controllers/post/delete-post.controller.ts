import { IMessage, RepositoryResponse } from "@/core/common/repository.common";
import { UnauthenticatedError } from "@/core/errors/auth";
import { InputParseError } from "@/core/errors/common";
import {
  deletePostSchema,
  DeletePostUseCase,
  IDeletePost,
} from "@/core/models/post/use-cases/delete-post.use-case";
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

export const deletePostController = async (
  sessionId: number | undefined,
  deletePost: IDeletePost,
  config?: AxiosRequestConfig
): Promise<RepositoryResponse<IMessage>> => {
  // check authentication
  if (!sessionId) {
    throw new UnauthenticatedError("กรุณาเข้าสู่ระบบ");
  }

  const deletePostUseCase = new DeletePostUseCase(postRepository);

  // check input validation
  const { data, error: inputParseError } =
    deletePostSchema.safeParse(deletePost);
  if (inputParseError) {
    throw new InputParseError(`Invalid delete Post Input`, {
      cause: inputParseError,
    });
  }

  // invoke usecase
  const post = await deletePostUseCase.execute({
    payload: data,
    config,
  });

  return post;
};

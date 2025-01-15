import { RepositoryResponse } from "@/core/common/repository.common";
import { UnauthenticatedError } from "@/core/errors/auth";
import { InputParseError } from "@/core/errors/common";
import {
  GetCommentsByPostIdSchema,
  GetCommentsByPostIdUseCase,
  IGetCommentsByPostId,
} from "@/core/models/comment/use-cases/get-comments-by-post-id.use-case";
import { commentRepository } from "@/infrastructures/remote-repository/repository/remote-comment-repository";
import { AxiosRequestConfig } from "axios";

/**
 * Controller
 * 1. check authenticateion
 * 2. check session
 * 3. check input validation if have
 * 4. invoke usecase
 * 5. return presenter if have
 */

export const getCommentsByPostIdController = async (
  sessionId: number | undefined,
  getCommentsByPostId: IGetCommentsByPostId,
  config?: AxiosRequestConfig
): Promise<RepositoryResponse<Comment[]>> => {
  // check authentication
  if (!sessionId) {
    throw new UnauthenticatedError("กรุณาเข้าสู่ระบบ");
  }

  const getCommentsByPostIdUseCase = new GetCommentsByPostIdUseCase(
    commentRepository
  );

  // check input validation
  const { data, error: inputParseError } =
    GetCommentsByPostIdSchema.safeParse(getCommentsByPostId);
  if (inputParseError) {
    throw new InputParseError(`Invalid comment query Input`, {
      cause: inputParseError,
    });
  }

  // invoke usecase
  const comments = await getCommentsByPostIdUseCase.execute({
    payload: data,
    config,
  });

  return comments;
};

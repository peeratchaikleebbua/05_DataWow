import { RepositoryResponse } from "@/core/common/repository.common";
import { UnauthenticatedError } from "@/core/errors/auth";
import { InputParseError } from "@/core/errors/common";
import {
  createCommentSchema,
  CreateCommentUseCase,
  ICreateComment,
} from "@/core/models/comment/use-cases/create-comment.use-case";
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

export const createCommentController = async (
  sessionId: string | undefined,
  createComment: ICreateComment,
  config?: AxiosRequestConfig
): Promise<RepositoryResponse<Comment>> => {
  // check authentication
  if (!sessionId) {
    throw new UnauthenticatedError("กรุณาเข้าสู่ระบบ");
  }

  const createCommentUseCase = new CreateCommentUseCase(commentRepository);

  // check input validation
  const { data, error: inputParseError } =
    createCommentSchema.safeParse(createComment);
  if (inputParseError) {
    throw new InputParseError(`Invalid Create Comment Input`, {
      cause: inputParseError,
    });
  }

  // invoke usecase
  const newComment = await createCommentUseCase.execute({
    payload: data,
    config,
  });

  return newComment;
};

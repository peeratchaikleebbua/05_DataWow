import { z } from "zod";

import {
  RepositoryRequest,
  RepositoryResponse,
} from "@/core/common/repository.common";
import { commentSchema } from "../entity/comment.entity";
import { ICommentRepository } from "../entity/comment.repository";

/**
 * GetCommentsByPostId Schema
 */

export const GetCommentsByPostIdSchema = commentSchema.pick({
  postId: true,
});

export type IGetCommentsByPostId = z.infer<typeof GetCommentsByPostIdSchema>;

/**
 * GetCommentsByPostId UseCase
 */

export class GetCommentsByPostIdUseCase {
  constructor(private commentRepository: ICommentRepository) {}

  async execute(
    request: RepositoryRequest<IGetCommentsByPostId>
  ): Promise<RepositoryResponse<Comment[]>> {
    return await this.commentRepository.getCommentsByPostId(request);
  }
}

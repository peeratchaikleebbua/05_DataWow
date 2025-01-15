import { z } from "zod";

import {
  RepositoryRequest,
  RepositoryResponse,
} from "@/core/common/repository.common";
import { commentSchema } from "../entity/comment.entity";
import { ICommentRepository } from "../entity/comment.repository";

/**
 * CreateComment Schema
 */

export const createCommentSchema = commentSchema.pick({
  content: true,
  postId: true,
});

export type ICreateComment = z.infer<typeof createCommentSchema>;

/**
 * CreateComment UseCase
 */

export class CreateCommentUseCase {
  constructor(private commentRepository: ICommentRepository) {}

  async execute(
    request: RepositoryRequest<ICreateComment>
  ): Promise<RepositoryResponse<Comment>> {
    return await this.commentRepository.createComment(request);
  }
}

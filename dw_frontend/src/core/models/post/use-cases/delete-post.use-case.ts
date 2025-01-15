import { z } from "zod";

import {
  IMessage,
  RepositoryRequest,
  RepositoryResponse,
} from "@/core/common/repository.common";
import { IPostRepository } from "../entity/post.repository";
import { postSchema } from "../entity/post.entity";

/**
 * DeletePost Schema
 */

export const deletePostSchema = postSchema.pick({
  id: true,
});

export type IDeletePost = z.infer<typeof deletePostSchema>;

/**
 * DeletePost UseCase
 */

export class DeletePostUseCase {
  constructor(private postRepository: IPostRepository) {}

  async execute(
    request: RepositoryRequest<IDeletePost>
  ): Promise<RepositoryResponse<IMessage>> {
    return await this.postRepository.deletePost(request);
  }
}

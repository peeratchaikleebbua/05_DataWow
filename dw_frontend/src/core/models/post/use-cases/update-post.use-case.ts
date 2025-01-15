import { z } from "zod";

import {
  RepositoryRequest,
  RepositoryResponse,
} from "@/core/common/repository.common";
import { IPostRepository } from "../entity/post.repository";
import { Post, postSchema } from "../entity/post.entity";

/**
 * UpdatePost Schema
 */

export const updatePostSchema = postSchema.pick({
  id: true,
  title: true,
  content: true,
  category: true,
});

export type IUpdatePost = z.infer<typeof updatePostSchema>;

/**
 * UpdatePost UseCase
 */

export class UpdatePostUseCase {
  constructor(private postRepository: IPostRepository) {}

  async execute(
    request: RepositoryRequest<IUpdatePost>
  ): Promise<RepositoryResponse<Post>> {
    return await this.postRepository.updatePost(request);
  }
}

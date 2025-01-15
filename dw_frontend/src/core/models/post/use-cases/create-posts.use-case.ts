import { z } from "zod";

import {
  RepositoryRequest,
  RepositoryResponse,
} from "@/core/common/repository.common";
import { IPostRepository } from "../entity/post.repository";
import { Post, postSchema } from "../entity/post.entity";

/**
 * CreatePosts Schema
 */

export const createPostsSchema = postSchema.pick({
  title: true,
  content: true,
  category: true,
});

export type ICreatePosts = z.infer<typeof createPostsSchema>;

/**
 * CreatePosts UseCase
 */

export class CreatePostsUseCase {
  constructor(private postRepository: IPostRepository) {}

  async execute(
    request: RepositoryRequest<ICreatePosts>
  ): Promise<RepositoryResponse<Post>> {
    return await this.postRepository.createPosts(request);
  }
}

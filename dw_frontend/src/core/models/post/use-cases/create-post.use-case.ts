import { z } from "zod";

import {
  RepositoryRequest,
  RepositoryResponse,
} from "@/core/common/repository.common";
import { IPostRepository } from "../entity/post.repository";
import { Post, basePostSchema } from "../entity/post.entity";

/**
 * CreatePost Schema
 */

export const createPostSchema = basePostSchema.pick({
  title: true,
  content: true,
  category: true,
});

export type ICreatePost = z.infer<typeof createPostSchema>;

/**
 * CreatePosts UseCase
 */

export class CreatePostUseCase {
  constructor(private postRepository: IPostRepository) {}

  async execute(
    request: RepositoryRequest<ICreatePost>
  ): Promise<RepositoryResponse<Post>> {
    return await this.postRepository.createPost(request);
  }
}

import { z } from "zod";

import {
  RepositoryRequest,
  RepositoryResponse,
} from "@/core/common/repository.common";
import { IPostRepository } from "../entity/post.repository";
import { Post, postSchema } from "../entity/post.entity";

/**
 * GetPosts Schema
 */

export const getPostsSchema = postSchema.pick({
  title: true,
  content: true,
  category: true,
});

export type IGetPosts = z.infer<typeof getPostsSchema>;

/**
 * GetPosts UseCase
 */

export class GetPostsUseCase {
  constructor(private postRepository: IPostRepository) {}

  async execute(request: RepositoryRequest<void>): Promise<RepositoryResponse<Post[]>> {
    return await this.postRepository.getPosts(request);
  }
}

import { z } from "zod";

import {
  RepositoryRequest,
  RepositoryResponse,
} from "@/core/common/repository.common";
import { IPostRepository } from "../entity/post.repository";
import { Post, postSchema } from "../entity/post.entity";

/**
 * GetPostById Schema
 */

export const getPostByIdSchema = postSchema.pick({
  id: true,
});

export type IGetPostById = z.infer<typeof getPostByIdSchema>;

/**
 * GetPostById UseCase
 */

export class GetPostByIdUseCase {
  constructor(private postRepository: IPostRepository) {}

  async execute(
    request: RepositoryRequest<IGetPostById>
  ): Promise<RepositoryResponse<Post>> {
    return await this.postRepository.getPostById(request);
  }
}

import {
  RepositoryRequest,
  RepositoryResponse,
} from "@/core/common/repository.common";
import { IPostRepository } from "../entity/post.repository";
import { Post, PostCategory, postSchema } from "../entity/post.entity";
import { z } from "zod";

/**
 * GetPosts Schema
 */

export const getPostsSchema = z.object({
  search: z.string().optional(),
  category: z.nativeEnum(PostCategory).optional(),
  userId: z.string().optional(),
});

export type IGetPosts = z.infer<typeof getPostsSchema>;

export const postListSchema = z.object({
  posts: z.array(postSchema),
});

export type PostList = z.infer<typeof postListSchema>

/**
 * GetPosts UseCase
 */

export class GetPostsUseCase {
  constructor(private postRepository: IPostRepository) {}

  async execute(
    request: RepositoryRequest<IGetPosts>
  ): Promise<RepositoryResponse<Post[]>> {
    let searchInputPayload: string = "";
    const searchInput = request.payload.search;

    if (searchInput && searchInput.length > 2) {
      searchInputPayload = searchInput;
    }

    request.payload.search = searchInputPayload;

    return await this.postRepository.getPosts(request);
  }
}

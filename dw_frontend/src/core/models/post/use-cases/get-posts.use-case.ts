import {
  RepositoryResponse,
} from "@/core/common/repository.common";
import { IPostRepository } from "../entity/post.repository";
import { Post } from "../entity/post.entity";
import { AxiosRequestConfig } from "axios";

/**
 * GetPosts UseCase
 */

export class GetPostsUseCase {
  constructor(private postRepository: IPostRepository) {}

  async execute(config?: AxiosRequestConfig): Promise<RepositoryResponse<Post[]>> {
    return await this.postRepository.getPosts(config);
  }
}

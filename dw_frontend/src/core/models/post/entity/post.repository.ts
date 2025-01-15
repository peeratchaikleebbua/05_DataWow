import {
  IMessage,
  RepositoryRequest,
  RepositoryResponse,
} from "@/core/common/repository.common";
import { ICreatePosts } from "../use-cases/create-posts.use-case";
import { Post } from "./post.entity";
import { IGetPostById } from "../use-cases/get-post-by-id.use-case";
import { IUpdatePost } from "../use-cases/update-post.use-case";
import { IDeletePost } from "../use-cases/delete-post.use-case";

export type IPostRepository = {
  createPosts(
    request: RepositoryRequest<ICreatePosts>
  ): Promise<RepositoryResponse<Post>>;
  getPosts(request: RepositoryRequest<void>): Promise<RepositoryResponse<Post[]>>;
  getPostById(
    request: RepositoryRequest<IGetPostById>
  ): Promise<RepositoryResponse<Post>>;
  updatePost(
    request: RepositoryRequest<IUpdatePost>
  ): Promise<RepositoryResponse<Post>>;
  deletePost(
    request: RepositoryRequest<IDeletePost>
  ): Promise<RepositoryResponse<IMessage>>;
};

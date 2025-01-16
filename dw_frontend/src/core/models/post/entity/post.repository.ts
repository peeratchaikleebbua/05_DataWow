import {
  IMessage,
  RepositoryRequest,
  RepositoryResponse,
} from "@/core/common/repository.common";
import { ICreatePost } from "../use-cases/create-post.use-case";
import { Post } from "./post.entity";
import { IGetPostById } from "../use-cases/get-post-by-id.use-case";
import { IUpdatePost } from "../use-cases/update-post.use-case";
import { IDeletePost } from "../use-cases/delete-post.use-case";
import { IGetPosts } from "../use-cases/get-posts.use-case";

export type IPostRepository = {
  createPost(
    request: RepositoryRequest<ICreatePost>
  ): Promise<RepositoryResponse<Post>>;
  getPosts(reqeust: RepositoryRequest<IGetPosts>): Promise<RepositoryResponse<Post[]>>;
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

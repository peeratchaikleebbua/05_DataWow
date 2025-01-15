import {
  IMessage,
  RepositoryRequest,
  RepositoryResponse,
} from "@/core/common/repository.common";
import { Post } from "@/core/models/post/entity/post.entity";
import { IPostRepository } from "@/core/models/post/entity/post.repository";
import { ICreatePost } from "@/core/models/post/use-cases/create-post.use-case";
import { IDeletePost } from "@/core/models/post/use-cases/delete-post.use-case";
import { IGetPostById } from "@/core/models/post/use-cases/get-post-by-id.use-case";
import { IUpdatePost } from "@/core/models/post/use-cases/update-post.use-case";
import {
  AxiosApiResponse,
  deleteResource,
  getResource,
  patchResource,
  postResource,
} from "../config/api-client";
import { AxiosRequestConfig } from "axios";

export class RemotePostRepository implements IPostRepository {
  private postUrl = "/posts";

  async createPost(
    request: RepositoryRequest<ICreatePost>
  ): Promise<RepositoryResponse<Post>> {
    const response = await postResource<AxiosApiResponse<Post>>(
      `${this.postUrl}`,
      request.payload,
      request.config
    );
    return {
      data: response.data,
      meta: response.meta,
    };
  }

  async getPosts(config?: AxiosRequestConfig): Promise<RepositoryResponse<Post[]>> {
    const response = await getResource<AxiosApiResponse<Post[]>>(
      `${this.postUrl}`,
      config
    );
    return {
      data: response.data,
      meta: response.meta,
    };
  }

  async getPostById(
    request: RepositoryRequest<IGetPostById>
  ): Promise<RepositoryResponse<Post>> {
    const response = await getResource<AxiosApiResponse<Post>>(
      `${this.postUrl}/${request.payload.id}`,
      request.config
    );
    return {
      data: response.data,
      meta: response.meta,
    };
  }

  async updatePost(
    request: RepositoryRequest<IUpdatePost>
  ): Promise<RepositoryResponse<Post>> {
    const { id, ...updatedPost } = request.payload;
    const response = await patchResource<AxiosApiResponse<Post>>(
      `${this.postUrl}/${id}`,
      updatedPost,
      request.config
    );
    return {
      data: response.data,
      meta: response.meta,
    };
  }

  async deletePost(
    request: RepositoryRequest<IDeletePost>
  ): Promise<RepositoryResponse<IMessage>> {
    const response = await deleteResource<AxiosApiResponse<IMessage>>(
      `${this.postUrl}/${request.payload.id}`,
      request.config
    );
    return {
      data: response.data,
      meta: response.meta,
    };
  }
}

export const postRepository = new RemotePostRepository();
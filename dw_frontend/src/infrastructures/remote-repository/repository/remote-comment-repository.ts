import {
  RepositoryRequest,
  RepositoryResponse,
} from "@/core/common/repository.common";
import { ICommentRepository } from "@/core/models/comment/entity/comment.repository";
import { ICreateComment } from "@/core/models/comment/use-cases/create-comment.use-case";
import {
  AxiosApiResponse,
  getResource,
  postResource,
} from "../config/api-client";
import { IGetCommentsByPostId } from "@/core/models/comment/use-cases/get-comments-by-post-id.use-case";
import { Comment } from "@/core/models/comment/entity/comment.entity";

export class RemoteCommentRepository implements ICommentRepository {
  private commentUrl = "/comments";

  async createComment(
    request: RepositoryRequest<ICreateComment>
  ): Promise<RepositoryResponse<Comment>> {
    const response = await postResource<AxiosApiResponse<Comment>>(
      `${this.commentUrl}`,
      request.payload,
      request.config
    );
    return {
      data: response.data,
      meta: response.meta,
    };
  }

  async getCommentsByPostId(
    request: RepositoryRequest<IGetCommentsByPostId>
  ): Promise<RepositoryResponse<Comment[]>> {
    const response = await getResource<AxiosApiResponse<Comment[]>>(
      `${this.commentUrl}`,
      {
        params: {
          postId: request.payload.postId,
        },
        ...request?.config,
      }
    );
    return {
      data: response.data,
      meta: response.meta,
    };
  }
}

export const commentRepository = new RemoteCommentRepository();

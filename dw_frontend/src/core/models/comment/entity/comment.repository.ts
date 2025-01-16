import {
  RepositoryRequest,
  RepositoryResponse,
} from "@/core/common/repository.common";
import { ICreateComment } from "../use-cases/create-comment.use-case";
import { IGetCommentsByPostId } from "../use-cases/get-comments-by-post-id.use-case";
import { Comment } from "./comment.entity";

export type ICommentRepository = {
  createComment(
    request: RepositoryRequest<ICreateComment>
  ): Promise<RepositoryResponse<Comment>>;
  getCommentsByPostId(
    request: RepositoryRequest<IGetCommentsByPostId>
  ): Promise<RepositoryResponse<Comment[]>>;
};

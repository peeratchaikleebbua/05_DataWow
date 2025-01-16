import { IGetPosts } from "../use-cases/get-posts.use-case";
import { Post } from "./post.entity";

/**
 * Post Query Key
 * Cache Key Name
 */

export const defaultPostQueryKey = "posts";

export const postQueryKeys = {
  posts: (getPosts?: IGetPosts) => [defaultPostQueryKey, getPosts] as const,
  post: (id: Post["id"]) => [defaultPostQueryKey, id],
};

import { Post } from "./post.entity";

/**
 * Post Query Key
 * Cache Key Name
 */


export const defaultPostQueryKey = "posts";

export const postQueryKeys = {
  posts: [defaultPostQueryKey] as const,
  post: (id: Post["id"]) => [defaultPostQueryKey, id],
};

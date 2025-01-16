import { postQueryKeys } from "@/core/models/post/entity/post.query-key";
import { IGetPosts } from "@/core/models/post/use-cases/get-posts.use-case";
import { clientSession } from "@/features/_shared/utils/client-session";
import { getPostsController } from "@/interface-adapters/controllers/post/get-posts.controller";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useGetPostsQuery = (getPosts?: IGetPosts) => {
  return useQuery({
    queryKey: postQueryKeys.posts(getPosts),
    queryFn: async () => {
      const { config, sessionId } = await clientSession();
      return getPostsController(sessionId, getPosts, config());
    },
    placeholderData: keepPreviousData,
    staleTime: 0,
  });
};

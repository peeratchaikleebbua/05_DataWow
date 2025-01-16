import { postQueryKeys } from "@/core/models/post/entity/post.query-key";
import { clientSession } from "@/features/_shared/utils/client-session";
import { getPostsController } from "@/interface-adapters/controllers/post/get-posts.controller";
import { useQuery } from "@tanstack/react-query";

export const useGetPostsQuery = () => {
  return useQuery({
    queryKey: postQueryKeys.posts,
    queryFn: async () => {
      const { config, sessionId } = await clientSession();
      return getPostsController(sessionId, config());
    },
    staleTime: 0,
  });
};

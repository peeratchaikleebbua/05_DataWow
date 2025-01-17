import { auth } from "@/auth";
import { postQueryKeys } from "@/core/models/post/entity/post.query-key";
import UserPostListView from "@/features/post/components/views/user-post-list-view";
import { getPostsController } from "@/interface-adapters/controllers/post/get-posts.controller";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

interface IPostDetailPage {
  params: {
    userId: string;
  };
}

export default async function UserPostPage({ params }: IPostDetailPage) {
  const userId = params.userId;

  const session = await auth();
  const sessionId = session?.account.id;
  const queryClient = new QueryClient();

  // get post from userId
  await queryClient.prefetchQuery({
    queryKey: postQueryKeys.posts({ search: "", userId: userId }),
    queryFn: () =>
      getPostsController(sessionId, { search: "", userId: userId }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <UserPostListView userId={Number(userId)} />
    </HydrationBoundary>
  );
}

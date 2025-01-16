import { auth } from "@/auth";
import { postQueryKeys } from "@/core/models/post/entity/post.query-key";
import PostDetailView from "@/features/post/components/views/post-detail-view";
import { getPostByIdController } from "@/interface-adapters/controllers/post/get-post-by-id.controller";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

interface IPostDetailPage {
  params: {
    postId: string;
  };
}

export default async function PostDetailPage({ params }: IPostDetailPage) {
  const postId = Number(params.postId);

  const session = await auth();
  const sessionId = session?.account.id;
  const queryClient = new QueryClient();

  // get post and comment from postId
  await queryClient.prefetchQuery({
    queryKey: postQueryKeys.post(postId),
    queryFn: () => getPostByIdController(sessionId, { id: postId }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PostDetailView postId={postId} />
    </HydrationBoundary>
  );
}

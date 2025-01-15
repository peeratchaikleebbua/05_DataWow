import { auth } from "@/auth";
import { postQueryKeys } from "@/core/models/post/entity/post.query-key";
import { getPostsController } from "@/interface-adapters/controllers/post/get-posts.controller";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import React from "react";

export default async function PostsPage() {
  // params => id
  // searchParams => ?edit, ?draft, ?revalidate

  const session = await auth();
  const sessionId = session?.account.id;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: postQueryKeys.posts,
    queryFn: () => getPostsController(sessionId),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <></>
    </HydrationBoundary>
  );
}

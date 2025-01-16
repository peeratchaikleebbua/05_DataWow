"use client"

import React from "react";
import { usePostListViewModel } from "../../hooks/view-model/use-post-list-view-model";
import PostListTemplate from "../templates/post-list-template";

const PostListView = () => {
  const { posts } = usePostListViewModel();

  return <PostListTemplate posts={posts} />;
};

export default PostListView;

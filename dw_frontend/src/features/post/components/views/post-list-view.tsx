"use client";

import React from "react";
import { usePostListViewModel } from "../../hooks/view-model/use-post-list-view-model";
import PostListTemplate from "../templates/post-list-template";

const PostListView = () => {
  const postData = usePostListViewModel();

  return <PostListTemplate postData={postData} />;
};

export default PostListView;

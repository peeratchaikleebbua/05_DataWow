"use client";

import React from "react";
import { usePostListViewModel } from "../../hooks/view-model/use-post-list-view-model";
import PostListTemplate from "../templates/post-list-template";
import { FormProvider } from "react-hook-form";

const PostListView = () => {
  const postData = usePostListViewModel();

  return (
    <FormProvider {...postData.method}>
      <PostListTemplate postData={postData} />
    </FormProvider>
  );
};

export default PostListView;

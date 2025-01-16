"use client";

import { Post } from "@/core/models/post/entity/post.entity";
import React from "react";
import { usePostDetailViewModel } from "../../hooks/view-model/use-post-detail-view-model";
import PostDetailTemplate from "../templates/post-detail-template";
import { FormProvider } from "react-hook-form";

interface IPostDetailView {
  postId: Post["id"];
}

const PostDetailView = ({ postId }: IPostDetailView) => {
  const { post, comment } = usePostDetailViewModel({ postId });

  return (
    <FormProvider {...comment.method}>
      <PostDetailTemplate post={post} comment={comment} />
    </FormProvider>
  );
};

export default PostDetailView;

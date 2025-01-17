"use client";

import { User } from "@/core/models/user/entity/user.entity";
import React from "react";
import PostListTemplate from "../templates/post-list-template";
import { usePostListViewModel } from "../../hooks/view-model/use-post-list-view-model";
import { FormProvider } from "react-hook-form";

interface IUserPostListView {
  userId: User["id"];
}

const UserPostListView = ({ userId }: IUserPostListView) => {
  const postData = usePostListViewModel(userId);

  return (
    <FormProvider {...postData.method}>
      <PostListTemplate postData={postData} showAction />
    </FormProvider>
  );
};

export default UserPostListView;

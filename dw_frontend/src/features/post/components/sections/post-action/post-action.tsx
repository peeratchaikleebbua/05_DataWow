"use client";

import { Button } from "@/features/_shared/components/elements/button";
import { Input } from "@/features/_shared/components/elements/input";
import React from "react";
import PostCreateModal from "../post-modal/post-create-modal";
import PostCategorySelectForm from "../../fragments/post-form/post-category-select-form";
import { FormProvider } from "react-hook-form";
import { usePostCreateViewModel } from "@/features/post/hooks/view-model/use-post-create-view-model";

const PostAction = () => {
  const { method } = usePostCreateViewModel();
  return (
    <FormProvider {...method}>
      <form>
        <div className="grid grid-cols-5 gap-3">
          <Input className="col-span-3" />
          <PostCategorySelectForm />
          <PostCreateModal>
            <Button>Create +</Button>
          </PostCreateModal>
        </div>
      </form>
    </FormProvider>
  );
};

export default PostAction;

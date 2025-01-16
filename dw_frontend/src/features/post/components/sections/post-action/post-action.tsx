"use client";

import { Button } from "@/features/_shared/components/elements/button";
import React from "react";
import PostCreateModal from "../post-modal/post-create-modal";
import { FormProvider } from "react-hook-form";
import { usePostCreateViewModel } from "@/features/post/hooks/view-model/use-post-create-view-model";
import { usePostListViewModel } from "@/features/post/hooks/view-model/use-post-list-view-model";
import PostSearchTitle from "../../fragments/post-search/post-search-title";
import PostCategorySearch from "../../fragments/post-search/post-category-search";

interface IPostAction {
  search: ReturnType<typeof usePostListViewModel>["search"];
}

const PostAction = ({ search }: IPostAction) => {
  const { method } = usePostCreateViewModel();
  return (
    <FormProvider {...method}>
      <form>
        <div className="grid grid-cols-5 gap-3">
          <div className="col-span-3">
            <PostSearchTitle
              currentSearch={search.query.searchQuery || ""}
              onSearch={search.setQuery.handleSearchPosts}
            />
          </div>
          <PostCategorySearch
            currentSelect={search.query.categoryQuery}
            onSelect={search.setQuery.handleCategoryChange}
          />
          <PostCreateModal>
            <Button>Create +</Button>
          </PostCreateModal>
        </div>
      </form>
    </FormProvider>
  );
};

export default PostAction;

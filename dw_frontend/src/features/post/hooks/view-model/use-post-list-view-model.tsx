import { useState } from "react";
import { useGetPostsQuery } from "../../services/post-query";
import { IGetPosts } from "@/core/models/post/use-cases/get-posts.use-case";

export const usePostListViewModel = () => {
  /**
   * step 1: common state
   */

  const [searchQuery, setSearchQuery] = useState<IGetPosts["search"]>("");
  const [categoryQuery, setCategoryQuery] = useState<
    IGetPosts["category"] | undefined
  >(undefined);

  /**
   *  step 2: react query
   */
  const { data: posts } = useGetPostsQuery({
    search: searchQuery,
    category: categoryQuery,
  });

  /**
   *  step 3: action
   */

  const handleSearchPosts = (search: IGetPosts["search"]) => {
    setSearchQuery(search);
  };

  const handleCategoryChange = (category: IGetPosts["category"]) => {
    setCategoryQuery(category);
  };

  return {
    posts: posts?.data,
    search: {
      query: {
        searchQuery,
        categoryQuery,
      },
      setQuery: {
        handleSearchPosts,
        handleCategoryChange,
      },
    },
  };
};

import { useState } from "react";
import { useGetPostsQuery } from "../../services/post-query";
import {
  IGetPosts,
  PostList,
  postListSchema,
} from "@/core/models/post/use-cases/get-posts.use-case";
import { User } from "@/core/models/user/entity/user.entity";
import { useFieldArray, useForm } from "react-hook-form";
import { Post } from "@/core/models/post/entity/post.entity";
import { zodResolver } from "@hookform/resolvers/zod";

export const usePostListViewModel = (userId?: User["id"]) => {
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
    userId: userId?.toString(),
  });

  /**
   *  step 2: postForm
   */

  const method = useForm<PostList>({
    values: {
      posts: posts?.data ?? [],
    },
    resolver: zodResolver(postListSchema),
  });

  const { fields } = useFieldArray({
    control: method.control,
    name: "posts",
  });

  /**
   *  step 4: action
   */

  const handleSearchPosts = (search: IGetPosts["search"]) => {
    setSearchQuery(search);
  };

  const handleCategoryChange = (category: IGetPosts["category"]) => {
    setCategoryQuery(category);
  };

  return {
    posts: fields,
    method,
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

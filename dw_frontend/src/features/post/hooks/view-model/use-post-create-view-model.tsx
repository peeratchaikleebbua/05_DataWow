"use client"

import { Post, postSchema } from "@/core/models/post/entity/post.entity";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const usePostCreateViewModel = () => {
  /**
   * step 1: common state
   */
  /**
   *  step 2: react query
   */

  /**
   *  step 3: create post form
   */

  const method = useForm<Post>({
    mode: "onChange",
    resolver: zodResolver(postSchema),
  });

  /**
   *  step 4: action
   */

  const onSubmit = async (data: Post) => {
    console.log("data", data);
  };

  return {
    method,
    onSubmit,
  };
};

"use client";

import { Post, postSchema } from "@/core/models/post/entity/post.entity";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useCreatePostMutaiton } from "../../services/post-mutation";

export const usePostCreateViewModel = () => {
  /**
   * step 1: common state
   */
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);

    // clear the post
    method.reset();

    // reset error
    method.clearErrors();
  };

  /**
   *  step 2: react query
   */

  const { mutateAsync } = useCreatePostMutaiton();

  /**
   *  step 3: create post form
   */

  const method = useForm<Post>({
    resolver: zodResolver(postSchema),
  });

  console.log("error", method.formState.errors);

  /**
   *  step 4: action
   */

  const onSubmit = async () => {
    const isValidPost = await method.trigger("content", {
      shouldFocus: true,
    });

    if (!isValidPost) {
      return; // if invalid do nothing
    }
    const newPost = method.getValues();

    // create post
    mutateAsync({
      ...newPost,
    });

    // clear the post
    method.reset();

    // close form
    closeModal();
  };

  return {
    method,
    modal: {
      isModalOpen,
      openModal,
      closeModal,
    },
    onSubmit,
  };
};

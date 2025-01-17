"use client";

import { Post, postSchema } from "@/core/models/post/entity/post.entity";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useFieldArray, useForm, useFormContext } from "react-hook-form";
import { useCreatePostMutaiton } from "../../services/post-mutation";
import { PostList } from "@/core/models/post/use-cases/get-posts.use-case";

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
    reset();

    // reset error
    clearErrors();
  };

  /**
   *  step 2: react query
   */

  const { mutateAsync } = useCreatePostMutaiton();

  /**
   *  step 3: create post form
   */

  const { control, reset, clearErrors, trigger, getValues } = useFormContext<PostList>();

  const {} = useFieldArray({
    control,
    name: "posts"
  })

  // const method = useForm<Post>({
  //   resolver: zodResolver(postSchema),
  // });

  // console.log("error", method.formState.errors);

  /**
   *  step 4: action
   */

  const onSubmit = async () => {
    const isValidPost = await trigger("content");

    console.log('validPost', isValidPost)

    if (!isValidPost) {
      return; // if invalid do nothing
    }
    const newPost = getValues();

    console.log('newPost', newPost)

    // // create post
    // mutateAsync({
    //   ...newPost,
    // });

    // clear the post
    reset();

    // close form
    closeModal();
  };

  return {
    modal: {
      isModalOpen,
      openModal,
      closeModal,
    },
    onSubmit,
  };
};

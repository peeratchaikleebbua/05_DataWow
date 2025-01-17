"use client";

import { Post } from "@/core/models/post/entity/post.entity";
import { useState } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { useCreatePostMutaiton } from "../../services/post-mutation";
import { PostList } from "@/core/models/post/use-cases/get-posts.use-case";

interface IPostCreateModal {
  isOpen: boolean;
  mode: "create";
  currentIndex: number;
}

export const usePostCreateViewModel = () => {
  /**
   * step 1: common state
   */

  const [modalState, setModalState] = useState<IPostCreateModal>({
    isOpen: false,
    mode: "create",
    currentIndex: -1,
  });

  const handleOpenModal = () => {
    setModalState({
      isOpen: true,
      mode: "create",
      currentIndex: fields.length,
    });
  };

  const handleCloseModal = () => {
    setModalState({
      isOpen: false,
      mode: "create",
      currentIndex: -1,
    });

    // clear the post
    reset({
      posts: fields,
    });
  };

  /**
   *  step 2: react query
   */

  const { mutateAsync } = useCreatePostMutaiton();

  /**
   *  step 3: create post form
   */

  const { control, trigger, reset, getValues } = useFormContext<PostList>();

  const { fields } = useFieldArray({
    control,
    name: "posts",
  });

  /**
   *  step 4: action
   */

  const handleValidatePost = async () => {
    const fieldToValidate: (keyof Post)[] = ["title", "category", "content"];

    const validation = fieldToValidate.map((val) => {
      return `posts.${modalState.currentIndex}.${val}`;
    }) as (keyof PostList)[];

    const isValid = await trigger(validation, {
      shouldFocus: true,
    });

    return isValid; // Return the validation result
  };

  const handleCreatePost = async () => {
    const isValidPost = await handleValidatePost();

    if (!isValidPost) {
      return; // if invalid do nothing
    }

    const newPost = getValues(`posts.${modalState.currentIndex}`);

    // create post
    mutateAsync({
      ...newPost,
    });

    // close form
    handleCloseModal();
  };

  return {
    modal: {
      modalState,
      handleOpenModal,
      handleCloseModal,
    },
    action: {
      handleCreatePost,
    },
    index: fields.length,
  };
};

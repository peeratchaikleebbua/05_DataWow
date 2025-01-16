import { Post } from "@/core/models/post/entity/post.entity";
import { useGetPostByIdQuery } from "../../services/post-query";
import { useCreateCommentMutation } from "../../services/comment-mutation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Comment,
  commentSchema,
} from "@/core/models/comment/entity/comment.entity";
import { useState } from "react";

interface IUsePostDetailViewModel {
  postId: Post["id"];
}

export const usePostDetailViewModel = ({ postId }: IUsePostDetailViewModel) => {
  /**
   * step 1: common state
   */

  const [isModalOpen, setIsModalOpen] = useState(false); // For mobile modal
  const [isFormVisible, setIsFormVisible] = useState(false); // For larger screen form visibility

  // Function to open modal for mobile screens
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close modal for mobile screens
  const closeModal = () => {
    setIsModalOpen(false);

    // clear the comment
    method.reset();

    // reset error
    method.clearErrors();
  };

  // Function to toggle form visibility for larger screens
  const toggleFormVisibility = () => {
    setIsFormVisible((prev) => !prev);
  };

  const handleCancel = () => {
    setIsFormVisible(false); // Hide the form

    // clear the comment
    method.reset();

    // reset error
    method.clearErrors();
  };

  /**
   *  step 2: react query
   */

  const { data: post } = useGetPostByIdQuery(postId);
  const { mutateAsync } = useCreateCommentMutation();

  /**
   *  step 3: Create Comment Form
   */

  const method = useForm<Comment>({
    resolver: zodResolver(commentSchema),
  });

  /**
   *  step 4: action
   */

  const handleCreateComment = async () => {
    const isValidComment = await method.trigger("content", {
      shouldFocus: true,
    });

    if (!isValidComment) {
      return; // if invalid do nothing
    }
    const newComment = method.getValues("content");

    // create comment
    mutateAsync({
      content: newComment,
      postId,
    });

    // clear the comment
    method.reset();

    // close form
    handleCancel();
    closeModal();
  };

  return {
    post: post?.data,
    comment: {
      method,
      toggle: {
        isFormVisible,
        handleCancel,
        toggleFormVisibility,
      },
      modal: {
        isModalOpen,
        openModal,
        closeModal,
      },
      handleCreateComment,
    },
  };
};

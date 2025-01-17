import { Post } from "@/core/models/post/entity/post.entity";
import { useDeletePostMutaiton } from "../../services/post-mutation";
import { useState } from "react";

export const usePostDeleteViewModel = () => {
  /**
   * step 1: common state
   */

  // modalState
  const [modalState, setModalState] = useState<boolean>(false);

  const handleOpenModal = () => {
    setModalState(true);
  };

  const handleCloseModal = () => {
    setModalState(false);
  };

  /**
   *  step 2: react query
   */

  const { mutateAsync } = useDeletePostMutaiton();

  /**
   *  step 3: action
   */

  const handleDeletePost = async (postId: Post["id"]) => {
    await mutateAsync({ id: postId });

    // close modal
    handleCloseModal();
  };

  return {
    modal: {
      modalState,
      handleOpenModal,
      handleCloseModal,
    },
    action: {
      handleDeletePost,
    },
  };
};

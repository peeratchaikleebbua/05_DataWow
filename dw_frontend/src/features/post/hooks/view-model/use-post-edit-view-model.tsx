import { Post } from "@/core/models/post/entity/post.entity";
import { useState } from "react";
import { useUpdatePostMutaiton } from "../../services/post-mutation";
import { useFormContext } from "react-hook-form";
import { PostList } from "@/core/models/post/use-cases/get-posts.use-case";

interface IPostEditModal {
  isOpen: boolean;
  mode: "edit";
  currentIndex: number;
}

export const usePostEditViewModel = () => {
  /**
   * step 1: common state
   */

  // modalState
  const [modalState, setModalState] = useState<IPostEditModal>({
    isOpen: false,
    mode: "edit",
    currentIndex: -1,
  });

  const handleOpenModal = (rowIndex: number) => {
    setModalState({
      isOpen: true,
      mode: "edit",
      currentIndex: rowIndex,
    });
  };

  const handleCloseModal = () => {
    setModalState({
      isOpen: false,
      mode: "edit",
      currentIndex: -1,
    });
  };

  /**
   *  step 2: react query
   */

  const { mutateAsync } = useUpdatePostMutaiton();

  /**
   *  step 3: formdata
   */

  const { getValues, trigger } = useFormContext<PostList>();

  /**
   *  step 4: action
   */

  const handleValidatePost = async () => {
    const isValid = await trigger(`posts.${modalState.currentIndex}`, {
      shouldFocus: true,
    });

    return isValid; // Return the validation result
  };

  const handleEditPost = async () => {
    const isValid = await handleValidatePost();

    if (!isValid) {
      return; // Validation failed, do not proceed
    }

    const data = getValues(`posts.${modalState.currentIndex}`);
    mutateAsync(data);

    // Close modal
    handleCloseModal();
  };

  return {
    modal: {
      modalState,
      handleOpenModal,
      handleCloseModal,
    },
    action: {
      handleEditPost,
    },
  };
};

export default usePostEditViewModel;

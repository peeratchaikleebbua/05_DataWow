import { Post } from "@/core/models/post/entity/post.entity";
import { useState } from "react";
import { useUpdatePostMutaiton } from "../../services/post-mutation";

export const usePostEditViewModel = () => {
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

  const {} = useUpdatePostMutaiton();

  /**
   *  step 3: react query
   */

  

  /**
   *  step 3: action
   */

  const handleEditPost = async () => {};
};

export default usePostEditViewModel;

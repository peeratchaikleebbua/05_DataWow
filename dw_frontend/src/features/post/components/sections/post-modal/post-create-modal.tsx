import { Button } from "@/features/_shared/components/elements/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/features/_shared/components/elements/dialog";
import React from "react";
import PostCreateForm from "../post-aggregated-form/post-create-form";

interface IPostCreateModal {
  isOpenModal: boolean;
  closeModal: () => void;
  children: React.ReactNode;
  onSubmit?: () => void;
}

const PostCreateModal = ({
  children,
  onSubmit,
  isOpenModal,
  closeModal,
}: IPostCreateModal) => {
  return (
    <Dialog
      open={isOpenModal}
      onOpenChange={(isOpen) => !isOpen && closeModal()}
    >
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create Post</DialogTitle>
        </DialogHeader>

        <div className="flex items-center w-full space-x-2">
          <PostCreateForm />
        </div>

        <DialogFooter className="sm:justify-start">
          <Button type="button" variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button onClick={onSubmit}>Post</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PostCreateModal;

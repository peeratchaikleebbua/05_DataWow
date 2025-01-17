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
  index: number;
  mode: "create" | "edit";
}

const PostCreateModal = ({
  children,
  onSubmit,
  isOpenModal,
  closeModal,
  index,
  mode,
}: IPostCreateModal) => {
  return (
    <Dialog
      open={isOpenModal}
      onOpenChange={(isOpen) => !isOpen && closeModal()}
    >
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-lg max-w-sm rounded-lg">
        <DialogHeader>
          <DialogTitle>
            {mode === "create" ? "Create Post" : "Edit Post"}
          </DialogTitle>
        </DialogHeader>
        <PostCreateForm index={index} />
        <DialogFooter className="sm:justify-end">
          <Button type="button" variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button onClick={onSubmit}>
            {mode === "create" ? "post" : "confirm"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PostCreateModal;

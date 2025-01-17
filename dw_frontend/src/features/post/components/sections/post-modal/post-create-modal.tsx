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
import OutlinedButton from "@/features/_shared/components/elements/outlined-button";

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
      <DialogContent className="sm:max-w-lg max-sm:h-2/3 max-w-sm rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-left font-bold text-2xl">
            {mode === "create" ? "Create Post" : "Edit Post"}
          </DialogTitle>
        </DialogHeader>
        <PostCreateForm index={index} />
        <DialogFooter className="sm:justify-end sm:flex-row sm:gap-2 flex flex-col gap-2">
          <OutlinedButton onClick={closeModal} label="Close" />
          <Button onClick={onSubmit}>
            {mode === "create" ? "Post" : "confirm"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PostCreateModal;

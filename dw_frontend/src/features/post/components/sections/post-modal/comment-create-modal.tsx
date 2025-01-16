import { Button } from "@/features/_shared/components/elements/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/features/_shared/components/elements/dialog";
import React from "react";
import CommentContentForm from "../../fragments/comment-form/comment-content-form";

interface ICommentCreateModal {
  isOpenModal: boolean;
  closeModal: () => void;
  children: React.ReactNode;
  onSubmit: () => void;
}

const CommentCreateModal = ({
  children,
  onSubmit,
  isOpenModal,
  closeModal,
}: ICommentCreateModal) => {
  return (
    <Dialog
      open={isOpenModal}
      onOpenChange={(isOpen) => !isOpen && closeModal()}
    >
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-sm rounded-lg">
        <DialogHeader>
          <DialogTitle>Add Comments</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <CommentContentForm />
        </div>
        <div className="flex flex-col gap-3">
          <Button type="button" variant="outline" onClick={closeModal}>
            Close
          </Button>
          <Button onClick={onSubmit}>Posts</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CommentCreateModal;

import { Button } from "@/features/_shared/components/elements/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/features/_shared/components/elements/dialog";
import React from "react";
import PostCreateForm from "../post-aggregated-form/post-create-form";

interface IPostCreateModal {
  children: React.ReactNode;
  onSubmit?: () => void;
}

const PostCreateModal = ({ children, onSubmit }: IPostCreateModal) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create Post</DialogTitle>
        </DialogHeader>

        <div className="flex items-center space-x-2">
          <PostCreateForm />
        </div>

        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
          <DialogClose>
            <Button onClick={onSubmit}>Post</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PostCreateModal;

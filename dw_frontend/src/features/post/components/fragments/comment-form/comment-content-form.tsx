import TextAreaForm from "@/features/_shared/components/fragments/form-inputs/text-area-form";
import React from "react";

interface ICommentContentForm {
  disabled?: boolean;
}

const CommentContentForm = ({ disabled }: ICommentContentForm) => {
  return (
    <TextAreaForm
      name="content"
      placeholder="what's on your mind..."
      required
      disabled={disabled}
    />
  );
};

export default CommentContentForm;

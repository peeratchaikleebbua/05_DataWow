import TextAreaForm from "@/features/_shared/components/fragments/form-inputs/text-area-form";
import React from "react";

interface IPostContentForm {
  disabled?: boolean;
}

const PostContentForm = ({ disabled }: IPostContentForm) => {
  return (
    <TextAreaForm
      name="content"
      placeholder="What's on your mind..."
      required
      disabled={disabled}
    />
  );
};

export default PostContentForm;

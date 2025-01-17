import TextAreaForm from "@/features/_shared/components/fragments/form-inputs/text-area-form";
import React from "react";

interface IPostContentForm {
  disabled?: boolean;
  index?: number;
}

const PostContentForm = ({ disabled, index }: IPostContentForm) => {
  return (
    <TextAreaForm
      name={`${index ? `content.${index}` : "content"}`}
      placeholder="What's on your mind..."
      required
      disabled={disabled}
    />
  );
};

export default PostContentForm;

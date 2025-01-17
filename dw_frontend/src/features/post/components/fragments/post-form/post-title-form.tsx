import TextForm from "@/features/_shared/components/fragments/form-inputs/text-form";
import React from "react";

interface IPostTitleForm {
  disabled?: boolean;
  index?: number;
}

const PostTitleForm = ({ disabled, index }: IPostTitleForm) => {
  return (
    <TextForm
      name={`${index !== undefined? `posts.${index}.title` : "title"}`}
      required
      disabled={disabled}
      placeholder="Title"
    />
  );
};

export default PostTitleForm;

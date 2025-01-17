import { PostBaseFormEntity } from "@/core/models/post/entity/post.value-objects";
import SelectForm from "@/features/_shared/components/fragments/form-inputs/select-form";
import React from "react";

interface IPostCategorySelectForm {
  disabled?: boolean;
  index?: number;
}

const PostCategorySelectForm = ({
  disabled,
  index,
}: IPostCategorySelectForm) => {
  return (
    <SelectForm
      name={`${index !== undefined ? `posts.${index}.category` : "category"}`}
      labelName="Category"
      placeholder="Choose a community"
      options={PostBaseFormEntity.postCategoryOptions}
      required
      disabled={disabled}
    />
  );
};

export default PostCategorySelectForm;

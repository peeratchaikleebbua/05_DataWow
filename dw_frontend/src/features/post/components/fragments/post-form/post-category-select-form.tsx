import { PostBaseFormEntity } from "@/core/models/post/entity/post.value-objects";
import SelectForm from "@/features/_shared/components/fragments/form-inputs/select-form";
import React from "react";

interface IPostCategorySelectForm {
  disabled?: boolean;
}

const PostCategorySelectForm = ({ disabled }: IPostCategorySelectForm) => {
  return (
    <SelectForm
      name="category"
      labelName="Category"
      options={PostBaseFormEntity.postCategoryOptions}
      required
      disabled={disabled}
    />
  );
};

export default PostCategorySelectForm;

import TextForm from "@/features/_shared/components/fragments/form-inputs/text-form";
import React from "react";

interface IPostTitleForm {
  disabled?: boolean;
}

const PostTitleForm = ({ disabled }: IPostTitleForm) => {
  return (
    <TextForm
      name="title"
      labelName="หัวข้อ"
      required
      disabled={disabled}
      placeholder="ระบุหัวข้อ"
    />
  );
};

export default PostTitleForm;

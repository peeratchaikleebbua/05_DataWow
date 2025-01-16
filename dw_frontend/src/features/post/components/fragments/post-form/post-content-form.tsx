import TextAreaForm from "@/features/_shared/components/fragments/form-inputs/text-area-form";
import React from "react";

interface IPostContentForm {
  disabled?: boolean;
}

const PostContentForm = ({ disabled }: IPostContentForm) => {
  return (
    <TextAreaForm
      name="content"
      labelName="เนื้อหา"
      placeholder="ระบุเนื้อหา"
      required
      disabled={disabled}
    />
  );
};

export default PostContentForm;

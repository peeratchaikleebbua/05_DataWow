import React from "react";
import PostCategorySelectForm from "../../fragments/post-form/post-category-select-form";
import PostTitleForm from "../../fragments/post-form/post-title-form";
import PostContentForm from "../../fragments/post-form/post-content-form";

interface IPostCreateForm {
  disabled?: boolean;
  index: number
}

const PostCreateForm = (props: IPostCreateForm) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="md:w-1/2">
        <PostCategorySelectForm {...props} />
      </div>
      <PostTitleForm {...props} />
      <PostContentForm {...props} />
    </div>
  );
};

export default PostCreateForm;

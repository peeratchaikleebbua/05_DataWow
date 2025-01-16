import React from "react";
import PostCategorySelectForm from "../../fragments/post-form/post-category-select-form";
import PostTitleForm from "../../fragments/post-form/post-title-form";
import PostContentForm from "../../fragments/post-form/post-content-form";

interface IPostCreateForm {
  disabled?: boolean;
}

const PostCreateForm = (props: IPostCreateForm) => {
  return (
    <div>
      <PostCategorySelectForm {...props} />
      <PostTitleForm {...props} />
      <PostContentForm {...props} />
    </div>
  );
};

export default PostCreateForm;

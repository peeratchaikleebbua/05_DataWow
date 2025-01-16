import { Button } from "@/features/_shared/components/elements/button";
import { Input } from "@/features/_shared/components/elements/input";
import React from "react";
import PostCreateModal from "../post-modal/post-create-modal";
import PostCategorySelectForm from "../../fragments/post-form/post-category-select-form";

const PostAction = () => {


  return (
    <>
      <div className="grid grid-cols-5 gap-3">
        <Input className="col-span-3" />
        <PostCategorySelectForm />
       
            <PostCreateModal>
              <Button>Create +</Button>
            </PostCreateModal>
  
      </div>
    </>
  );
};

export default PostAction;

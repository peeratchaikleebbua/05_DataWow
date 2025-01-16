import { PostCategory } from "@/core/models/post/entity/post.entity";
import { PostCategoryLabel } from "@/core/models/post/entity/post.value-objects";
import { Badge } from "@/features/_shared/components/elements/badge";
import React from "react";

interface IPostBadge {
  postCategory: PostCategory;
}

const PostBadge = ({ postCategory }: IPostBadge) => {
  return <Badge variant="secondary" >{PostCategoryLabel[postCategory]}</Badge>;
};

export default PostBadge;

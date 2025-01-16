import { Post } from "@/core/models/post/entity/post.entity";
import { IGetPosts } from "@/core/models/post/use-cases/get-posts.use-case";
import { Input } from "@/features/_shared/components/elements/input";

import React from "react";

interface IPostSearchTitle {
  currentSearch: Post["title"];
  onSearch: (search: IGetPosts['search']) => void;
}

const PostSearchTitle = ({ currentSearch, onSearch }: IPostSearchTitle) => {
  return <Input value={currentSearch} onChange={(e) => onSearch(e.target.value)} />;
};

export default PostSearchTitle;

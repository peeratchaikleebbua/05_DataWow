import { Post } from "@/core/models/post/entity/post.entity";
import { PostBaseFormEntity } from "@/core/models/post/entity/post.value-objects";
import { IGetPosts } from "@/core/models/post/use-cases/get-posts.use-case";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/features/_shared/components/elements/select";
import React from "react";

interface IPostCategorySearch {
  currentSelect: Post["category"] | undefined;
  onSelect: (category: IGetPosts["category"]) => void;
}

const PostCategorySearch = ({
  currentSelect,
  onSelect,
}: IPostCategorySearch) => {
  return (
    <Select
      value={currentSelect?.toString() || "none"}
      onValueChange={(value) =>
        onSelect(value === "none" ? undefined : Number(value))
      }
    >
      <SelectTrigger>
        <SelectValue placeholder="select category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="none"></SelectItem>
          {PostBaseFormEntity.postCategoryOptions.map((option, index) => (
            <SelectItem key={index} value={option.value.toString()}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default PostCategorySearch;

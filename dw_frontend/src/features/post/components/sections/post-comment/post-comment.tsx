import { Comment } from "@/core/models/comment/entity/comment.entity";
import UserAvatar from "@/features/_shared/components/elements/user-avatar";
import DateText from "@/features/_shared/components/fragments/date-text";
import { Label } from "@radix-ui/react-label";
import React from "react";

interface IPostComment {
  comment: Comment;
}

const PostComment = ({ comment }: IPostComment) => {
  return (
    <div className="flex flex-row gap-2 pl-5 w-full">
      <UserAvatar />
      <div className="flex flex-col gap-2 w-full">
        <div>
          <Label>{comment.author?.username} </Label>
          <DateText date={comment.createdAt} />
        </div>
        <Label className="font-normal break-all">{comment.content}</Label>
      </div>
    </div>
  );
};

export default PostComment;

import { Post } from "@/core/models/post/entity/post.entity";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from "@/features/_shared/components/elements/card";
import React from "react";
import { FaComment } from "react-icons/fa6";
import PostBadge from "../../elements/post-badge";
import UserAvatar from "@/features/_shared/components/elements/user-avatar";
import { Label } from "@/features/_shared/components/elements/label";

interface IPostCard {
  post: Post;
  showActions?: boolean;
}

const PostCard = ({ post }: IPostCard) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex flex-row gap-2 items-center">
          <UserAvatar />
          <Label>{post.author?.username}</Label>
        </CardTitle>
        <CardDescription className="flex justify-start">
          <PostBadge postCategory={post.category} />
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-3 text-left">
        <Label className="text-2xl font-bold text-wrap">{post.title}</Label>
        <Label className="line-clamp-2 font-normal">{post.content}</Label>
      </CardContent>
      <CardFooter className="flex justify-start">
        <div className="flex flex-row gap-2 items-center">
          <FaComment className="text-gray-200" />
          <Label>{post.Comment?.length} Comments</Label>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PostCard;

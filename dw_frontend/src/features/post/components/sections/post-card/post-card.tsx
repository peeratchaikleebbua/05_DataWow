import { Post } from "@/core/models/post/entity/post.entity";
import { Button } from "@/features/_shared/components/elements/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/features/_shared/components/elements/card";
import { Check } from "lucide-react";
import React from "react";
import PostBadge from "../../elements/post-badge";
import UserAvatar from "@/features/_shared/components/elements/user-avatar";
import { Label } from "@/features/_shared/components/elements/label";

interface IPostCard {
  post: Post;
}

const PostCard = ({ post }: IPostCard) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex flex-col gap-2">
          <UserAvatar />
          {post.author?.username}
          <PostBadge postCategory={post.category} />
        </CardTitle>
        <CardContent className="flex flex-col gap-2">
          <Label>{post.title}</Label>
          <Label>{post.content}</Label>
        </CardContent>
      </CardHeader>
      <CardFooter>
        <Button className="flex justify-start">
          <Label>{"comm"}</Label>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PostCard;

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
import { useParams, useRouter } from "next/navigation";
import { dateConversion } from "@/features/_shared/utils/date-conversion";
import DateText from "@/features/_shared/components/fragments/date-text";

interface IPostCard {
  post: Post;
  showActions?: boolean;
  showDate?: boolean;
}

const PostCard = ({ post, showActions, showDate }: IPostCard) => {
  const router = useRouter();
  const params = useParams();
  const postId = params.postId;
  const isDetailPage = postId;

  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle className="flex flex-row gap-2 items-center">
          <UserAvatar />
          <Label>{post.author?.username}</Label>
          {showDate && <DateText date={post.createdAt} />}
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
          <FaComment
            className={`text-gray-200 ${isDetailPage ? "" : "cursor-pointer"}`}
            onClick={() => !isDetailPage && router.push(`/post/${post.id}`)}
          />
          <Label className="text-xs font-light text-gray-400">
            {post.Comment?.length} Comments
          </Label>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PostCard;

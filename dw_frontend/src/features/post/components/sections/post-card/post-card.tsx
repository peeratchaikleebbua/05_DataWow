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
import { RiEdit2Line } from "react-icons/ri";
import { FaRegTrashAlt } from "react-icons/fa";

import DateText from "@/features/_shared/components/fragments/date-text";
import { IUpdatePost } from "@/core/models/post/use-cases/update-post.use-case";
import { usePostListViewModel } from "@/features/post/hooks/view-model/use-post-list-view-model";
import AlertModal from "@/features/_shared/components/fragments/alert-modal";

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
        <CardTitle className="flex justify-between">
          <div className="flex flex-row gap-2 items-center">
            <UserAvatar />
            <Label>{post.author?.username}</Label>
            {showDate && <DateText date={post.createdAt} />}
          </div>
          {showActions && (
            <div className="flex flex-wrap gap-3">
              {/* <RiEdit2Line />
              <AlertModal
                title="Please confirm if you wish to delete the post"
                content="Are you sure you want to delete the post? Once deleted, it cannot be recovered."
                renderingTrigger={<FaRegTrashAlt className="cursor-pointer" />}
                isOpenModal={postAction.modal.modalState.openModal}
                closeModal={postAction.modal.handleCloseModal}
                renderingAction={<></>}
              /> */}
            </div>
          )}
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

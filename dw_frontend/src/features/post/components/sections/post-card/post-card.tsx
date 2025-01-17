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
import DateText from "@/features/_shared/components/fragments/date-text";
import usePostEditViewModel from "@/features/post/hooks/view-model/use-post-edit-view-model";
import AlertModal from "@/features/_shared/components/fragments/alert-modal";
import { FaRegTrashAlt } from "react-icons/fa";
import PostCreateModal from "../post-modal/post-create-modal";
import { RiEdit2Line } from "react-icons/ri";
import { usePostDeleteViewModel } from "@/features/post/hooks/view-model/use-post-delete-view-model";
import { Button } from "@/features/_shared/components/elements/button";

interface IPostCard {
  post: Post;
  showActions?: boolean;
  showDate?: boolean;
  index: number;
}

const PostCard = ({ post, showActions, showDate, index }: IPostCard) => {
  const router = useRouter();
  const params = useParams();
  const postId = params.postId;
  const isDetailPage = postId;

  const { action, modal } = usePostEditViewModel();
  const { action: deleteAction, modal: deleteModal } = usePostDeleteViewModel();

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
              <PostCreateModal
                onSubmit={action.handleEditPost}
                isOpenModal={modal.modalState.isOpen}
                mode={modal.modalState.mode}
                closeModal={modal.handleCloseModal}
                index={index}
              >
                <RiEdit2Line
                  className="cursor-pointer"
                  onClick={() => modal.handleOpenModal(index)}
                />
              </PostCreateModal>
              <AlertModal
                title="Please confirm if you wish to delete the post"
                content="Are you sure you want to delete the post? Once deleted, it cannot be recovered."
                renderingTrigger={
                  <FaRegTrashAlt
                    className="cursor-pointer"
                    onClick={deleteModal.handleOpenModal}
                  />
                }
                isOpenModal={deleteModal.modalState}
                closeModal={deleteModal.handleCloseModal}
                renderingAction={
                  <Button
                    variant={"destructive"}
                    onClick={() => deleteAction.handleDeletePost(post.id)}
                  >
                    Delete
                  </Button>
                }
              />
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

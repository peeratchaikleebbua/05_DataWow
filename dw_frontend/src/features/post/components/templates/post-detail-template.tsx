import { Post } from "@/core/models/post/entity/post.entity";
import React from "react";
import PostCard from "../sections/post-card/post-card";
import PostComment from "../sections/post-comment/post-comment";
import { Button } from "@/features/_shared/components/elements/button";
import CommentCreateModal from "../sections/post-modal/comment-create-modal";
import CommentContentForm from "../fragments/comment-form/comment-content-form";
import { usePostDetailViewModel } from "../../hooks/view-model/use-post-detail-view-model";
import ButtonRoute from "@/features/_shared/components/elements/button-route";
import OutlinedButton from "@/features/_shared/components/elements/outlined-button";

interface IPostDetailTemplate {
  post?: Post;
  comment: ReturnType<typeof usePostDetailViewModel>["comment"];
}

const PostDetailTemplate = ({ post, comment }: IPostDetailTemplate) => {
  return (
    <>
      <div className="bg-white h-full">
        <div className="w-full max-md:p-5 max-w-screen-md mx-auto pt-4 flex flex-col gap-5">
          {/* button to route back to all posts */}
          <div className="pl-5">
            <ButtonRoute />
          </div>

          {/* Display post */}
          {post && <PostCard post={post} showDate />}

          {/* For screens smaller than md, show modal trigger button */}
          <div className="block md:hidden">
            <CommentCreateModal
              onSubmit={comment.handleCreateComment}
              isOpenModal={comment.modal.isModalOpen}
              closeModal={comment.modal.closeModal}
            >
              <OutlinedButton
                onClick={comment.modal.openModal}
                label="Add Comments"
                className="ml-5"
              />
            </CommentCreateModal>
          </div>

          {/* For screens md and larger, show the "Add Comments" button and conditionally show the form */}
          <div className="hidden md:block">
            {!comment.toggle.isFormVisible && (
              <OutlinedButton
                onClick={comment.toggle.toggleFormVisibility}
                label="Add Comments"
                className="ml-5"
              />
            )}

            {/* Conditionally render the form after clicking "Add Comments" */}
            {comment.toggle.isFormVisible && (
              <>
                <div className="pl-5">
                  <CommentContentForm />
                </div>
                <div className="flex justify-end gap-2 mt-3">
                  <OutlinedButton
                    onClick={comment.toggle.handleCancel}
                    label={"Cancel"}
                    className="ml-5"
                  />
                  <Button onClick={comment.handleCreateComment}>Post</Button>
                </div>
              </>
            )}
          </div>

          {/* Display comments */}
          {post?.Comment &&
            post.Comment.length > 0 &&
            post.Comment.map((comment, index) => (
              <div key={index}>
                <PostComment comment={comment} />
              </div>
            ))}
        </div>
      </div>
      {/* Create Comment Modal */}
    </>
  );
};

export default PostDetailTemplate;

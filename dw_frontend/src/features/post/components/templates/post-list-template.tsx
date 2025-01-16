import { Post } from "@/core/models/post/entity/post.entity";
import React from "react";
import PostCard from "../sections/post-card/post-card";
import PostAction from "../sections/post-action/post-action";

interface IPostListTemplate {
  posts?: Post[];
}

const PostListTemplate = ({ posts }: IPostListTemplate) => {
  return (
    <div className="w-full flex flex-col gap-3 mt-3">
      <PostAction />
      {posts &&
        posts.length > 0 &&
        posts.map((post, index) => (
          <div key={index}>
            <PostCard post={post} />
          </div>
        ))}
    </div>
  );
};

export default PostListTemplate;

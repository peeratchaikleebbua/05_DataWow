import { Post } from "@/core/models/post/entity/post.entity";
import React from "react";
import PostCard from "../sections/post-card/post-card";

interface IPostListTemplate {
  posts?: Post[];
}

const PostListTemplate = ({ posts }: IPostListTemplate) => {
  return (
    <div className="w-full">
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

import React from "react";
import PostCard from "../sections/post-card/post-card";
import PostAction from "../sections/post-action/post-action";
import { usePostListViewModel } from "../../hooks/view-model/use-post-list-view-model";

interface IPostListTemplate {
  postData: ReturnType<typeof usePostListViewModel>;
}

const PostListTemplate = ({ postData }: IPostListTemplate) => {
  const posts = postData.posts;

  return (
    <div className="w-full flex flex-col gap-3 mt-3">
      <PostAction search={postData.search} />
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

import React from "react";
import PostCard from "../sections/post-card/post-card";
import PostAction from "../sections/post-action/post-action";
import { usePostListViewModel } from "../../hooks/view-model/use-post-list-view-model";

interface IPostListTemplate {
  postData: ReturnType<typeof usePostListViewModel>;
  showAction?: boolean;
}

const PostListTemplate = ({ postData, showAction }: IPostListTemplate) => {
  const posts = postData.posts;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div className="w-full flex flex-col gap-3 mt-3 md:col-span-2">
        <PostAction search={postData.search} />
        {posts &&
          posts.length > 0 &&
          posts.map((post, index) => (
            <div key={index}>
              <PostCard
                post={post}
                showDate
                showActions={showAction}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default PostListTemplate;

import { useGetPostsQuery } from "../../services/post-query";

export const usePostListViewModel = () => {
  /**
   * step 1: common state
   */
  /**
   *  step 2: react query
   */
  const { data: posts } = useGetPostsQuery();

  /**
   *  step 3: create post form
   */


  /**
   *  step 4: action
   */



  return {
    posts: posts?.data,
 
  };
};

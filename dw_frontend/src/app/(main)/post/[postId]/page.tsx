interface IPostPage {
  params: {
    postId: number;
  };
}

export default async function PostPage({params}: IPostPage) {

  const postId = params.postId

  return <>{}</>;
}

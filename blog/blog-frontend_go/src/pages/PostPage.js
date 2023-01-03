import HeaderContainer from "../containers/common/HeaderContainer";
import PostViewer from "../components/posts/PostViewer";
import PostViewerContainer from "../containers/post/PostViewerContainer";

const PostPage = () => {
  return (
    <>
      <HeaderContainer />
      <PostViewerContainer />
    </>
  );
};

export default PostPage;
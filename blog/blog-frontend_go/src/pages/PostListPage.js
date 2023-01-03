import Button from "../components/common/Button";
import Header from "../components/common/Header";
import HeaderContainer from "../containers/common/HeaderContainer";
import PostList from "../components/posts/PostList";
import PostListContainer from "../containers/post/PostListContainer";

const PostListPage = () => {
  return(
    <>
      <HeaderContainer />
      <PostListContainer />
    </>
  )
}

export default PostListPage;
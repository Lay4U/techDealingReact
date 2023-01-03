import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, withRouter } from "react-router-dom";
import { readPost, unloadPost } from "../../modules/post";
import PostViewer from "../../components/posts/PostViewer";
import PostActionButtons from "../../components/posts/PostActionButtons";
import { setOriginalPost } from "../../modules/write";
import { removePost } from "../../lib/api/posts";


const PostViewerContainer = ({  }) => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { post, error, loading, user } = useSelector(({ post, laoding }) => ({
    post: post.post,
    error: post.error,
    loading: loading['post/READ_POST'],
    user: user.user,
  }));

  useEffect(() => {
    dispatch(readPost(postId));
    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, postId])

  const onEdit = () => {
    dispatch(setOriginalPost(post));
    navigate('/write');
  };

  const onRemove = async () => {
    try {
      await removePost(postId);
      navigate('/');
    }catch (e) {
      console.log(e);
    }
  }

  const ownPost = (user && user._id) === (post && post.user._id);

  return <PostViewer post={post} loading={loading} error={error}
  actionButtons={ ownPost && <PostActionButtons onEdit={onEdit} />}/>;
}

export default PostViewerContainer;
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getPublishedPosts } from "../actions/post";

import Spinner from "../component/layout/Spinner";
import Section from "../component/common/section";
import PostCard from "../component/posts/PostCard";
import Alert from "../component/layout/Alert.jsx";
import Card from "../component/common/card";

const Posts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPublishedPosts());
  }, [dispatch]);
  const loading = useSelector((state) => state.postReducer.loading);
  const posts = useSelector((state) => state.postReducer.posts);

  return (
    <Section id='postsSection' minHeight='40rem' padding='10vh 8rem 1rem 8rem'>
      <div className='posts'>
        <div className='posts__title'>
          <h1>LES ACTUALITÉS DU STUDIO</h1>
        </div>
        <Alert />
        {loading ? (
          <Spinner />
        ) : posts.length > 0 ? (
          posts.map((post) => <PostCard key={post._id} post={post} />)
        ) : (
          <Card>
            <p>Aucun article</p>
          </Card>
        )}
      </div>
    </Section>
  );
};

export default Posts;

import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPosts } from "../../actions/post";

import Spinner from "../layout/Spinner";
import Actions from "../layout/Actions";

const PostsList = () => {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.postReducer);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return posts.loading ? (
    <Spinner />
  ) : (
    <table className='posts-lists'>
      <thead>
        <tr>
          <th>Statut</th>
          <th>Article</th>
          <th>Auteur</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {posts.posts.map((post) => (
          <tr key={post._id}>
            <td
              style={{ color: "white", fontWeight: "bold" }}
              className={post.status}
            >
              {post.status}
            </td>
            <td>
              {post.status === "Brouillon" ? (
                <Link
                  href={{
                    pathname: "/dashboard-create-post",
                    query: { id: post._id },
                  }}
                >
                  <a>{post.title}</a>
                </Link>
              ) : (
                <Link href={"/" + post._id}>
                  <a>{post.title}</a>
                </Link>
              )}
            </td>
            <td>{post.author.name}</td>
            <td>
              <Actions id={post._id} fontSize='1.5rem' />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PostsList;

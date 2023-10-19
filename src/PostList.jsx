import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPostsAsync,
  selectAllPosts,
  selectPostsStatus,
  selectError,
} from "./postsSlice";

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const status = useSelector(selectPostsStatus);
  const error = useSelector(selectError);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPostsAsync());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <h2>Loading...</h2>;
  }

  if (status === "failed") {
    return <h2>Error: {error}</h2>;
  }

  const refetchData = () => {
    dispatch(fetchPostsAsync());
  };

  return (
    <div>
      <h1>List of Posts</h1>
      <button onClick={refetchData}>Refresh</button>
      <ul style={{ listStyle: "none" }}>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;

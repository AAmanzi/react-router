import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { fetchPosts } from "../../data";
import Loading from "../Loading";
import { Button, PostListContainer, PostsWrapper } from "./index.styled";

const PostList = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetchPosts().then(setPosts);
  }, []);

  if (!posts) {
    return <Loading />;
  }

  return (
    <PostListContainer>
      <Link to="/posts/add">
        <Button type="secondary">
          <h1>Add new post</h1>
        </Button>
      </Link>
      <PostsWrapper>
        {posts.map((post) => (
          <Link key={post.id} to={`/posts/${post.id}`}>
            {post.title}
          </Link>
        ))}
      </PostsWrapper>
    </PostListContainer>
  );
};

export default PostList;

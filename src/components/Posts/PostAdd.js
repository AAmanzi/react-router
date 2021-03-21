import React, { useState } from "react";
import { Redirect } from "react-router";

import PostForm from "./PostForm";
import { createPost } from "../../data";

const PostAdd = () => {
  const [isCreated, setIsCreated] = useState(false);

  const handleCreatePost = (post) => {
    createPost(post).then(() => setIsCreated(true));
  };

  if (isCreated) {
    return <Redirect to="/posts" />;
  }

  return <PostForm onSubmit={handleCreatePost} />;
};

export default PostAdd;

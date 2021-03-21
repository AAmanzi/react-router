import React from "react";

import { updatePost } from "../../data";
import PostForm from "./PostForm";
import withFetchPost from "../withFetchPost";

const PostEdit = ({ post }) => {
  const handleUpdatePost = (post) => {
    updatePost(post).then(() => setIsPostUpdated(true));
  };

  return <PostForm post={post} onSubmit={handleUpdatePost} />;
};

export default withFetchPost(PostEdit);

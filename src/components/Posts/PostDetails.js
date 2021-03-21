import React from "react";
import { Link } from "react-router-dom";

import withFetchPost from "../withFetchPost";

const PostDetails = ({ post }) => {
  return (
    <div>
      <h3>Title: {post.title}</h3>
      <p>Id: {post.id}</p>
      <p>Author: {post.author}</p>
      <Link to={`/posts/edit/${post.id}`}>
        <button>Update</button>
      </Link>
    </div>
  );
};

export default withFetchPost(PostDetails);

import { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router-dom";

import { fetchPostDetails } from "../data";
import Loading from "./Loading";

const withFetchPost = (Component) => () => {
  const params = useParams();
  const [post, setPost] = useState(null);
  const [isPostFetched, setIsPostFetched] = useState(false);

  useEffect(() => {
    fetchPostDetails(params.id).then((post) => {
      setPost(post);
      setIsPostFetched(true);
    });
  }, []);

  if (!post?.id && isPostFetched) {
    return <Redirect to="/404" />;
  }

  if (!post) {
    return <Loading />;
  }

  return <Component post={post} />;
};

export default withFetchPost;

import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

// import Auth from "../utils/auth";
import { QUERY_POST } from "../utils/queries";

const SinglePost = (props) => {
  const { id: postId } = useParams();
  const { loading, data } = useQuery(QUERY_POST, {
    variables: { id: postId },
  });

  const post = data?.post || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <p>A post goes here</p>
        <p>
          <span style={{ fontWeight: 700 }}>{post.username}</span> posted on{" "}
          {post.createdAt}
        </p>
      </div>
    </div>
  );
};

export default SinglePost;

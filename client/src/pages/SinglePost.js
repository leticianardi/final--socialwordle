import React from "react";
import { useParams } from "react-router-dom";

import ReplyList from "../components/ReplyList/ReplyList";
import ReplyForm from "../components/ReplyForm/ReplyForm";

import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
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
        <p>
          <span>
            {post.username}
          </span>{" "}
          post on {post.createdAt}
        </p>
        <div>
          <p>{post.postText}</p>
        </div>
      </div>

      {post.replyCount > 0 && (
        <ReplyList replies={post.replies} />
      )}
      {Auth.loggedIn() && <ReplyForm postId={post._id} />}
    </div>
  );
};

export default SinglePost;
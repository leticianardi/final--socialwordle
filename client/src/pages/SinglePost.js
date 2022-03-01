import React from "react";
import { useParams } from "react-router-dom";

import ReplyList from "../components/ReplyList";
import ReplyForm from "../components/ReplyForm";

import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_POST, QUERY_POST } from "../utils/queries";

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
            {reply.username}
          </span>{" "}
          post on {reply.createdAt}
        </p>
        <div>
          <p>{reply.postText}</p>
        </div>
      </div>

      {post.replyCount > 0 && (
        <ReplyList replies={post.replies} />
      )}
      {Auth.loggedIn() && <ReplyForm postId={reply._id} />}
    </div>
  );
};

export default SinglePost
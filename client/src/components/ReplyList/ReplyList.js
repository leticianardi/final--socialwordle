import React from "react";
import { useParams } from "react-router-dom";

import ReplyList from "../components/ReactionList";
import ReplyForm from "../components/ReactionForm";

import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_THOUGHT } from "../utils/queries";

const SingleThought = (props) => {
  const { id: thoughtId } = useParams();

  const { loading, data } = useQuery(QUERY_THOUGHT, {
    variables: { id: thoughtId },
  });

  const thought = data?.thought || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            {reply.username}
          </span>{" "}
          thought on {reply.createdAt}
        </p>
        <div className="card-body">
          <p>{reply.thoughtText}</p>
        </div>
      </div>

      {reply.replyCount > 0 && (
        <ReplyList reactions={reply.replies} />
      )}
      {Auth.loggedIn() && <ReplyForm thoughtId={reply._id} />}
    </div>
  );
};

export default SingleThought;
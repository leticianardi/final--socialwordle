import React from 'react'
import { Link } from "react-router-dom";

const ReplyList = ({ replies}) => {
  return (
      <span>Reply board</span>
  );
      {replies &&
        replies.map((replies) => (
          <p className="/" key={replies._id}>
            {replies.repliesBody} {"// "}
              {replies.username} on {replies.createdAt}
          </p>
        ))}
};

export default ReplyList
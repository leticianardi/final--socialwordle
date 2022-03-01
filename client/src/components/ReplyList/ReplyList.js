import React from 'react'
import { Link } from "react-router-dom";

const ReplyList = ({ replies}) => {
  return (
    <div className="card mb-3">
    <div className="card-header">
      <span className="text-light">Reply board</span>
    </div>
    <div className="card-body">
      {replies &&
        replies.map((replies) => (
          <p className="pill mb-3" key={replies._id}>
            {replies.repliesBody} {"// "}
              {replies.username} on {replies.createdAt}
          </p>
        ))}
    </div>
  </div>

  );
  
};

export default ReplyList
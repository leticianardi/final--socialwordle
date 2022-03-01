import React from 'react'
import { Link } from "react-router-dom";

const ReplyList = ({ replies}) => {
  return (
    <div>
    <div>
      <span>Reply board</span>
    </div>
    <div>
      {replies &&
        replies.map((replies) => (
          <p key={replies._id}>
            {replies.replyBody} {"// "}
              {replies.username} on {replies.createdAt}
          </p>
        ))}
    </div>
  </div>

  );
  
};

export default ReplyList
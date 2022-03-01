import React from 'react'
import { Link } from "react-router-dom";

const ReplyList = ({ replies }) => {
  return (
    <div>
    <div>
      <span>Response Board</span>
    </div>
    <div>
      {replies &&
        replies.map((reply) => (
          <p key={reply._id}>
            {reply.replyBody} 
              {replies.username} on {replies.create}
          </p>
        ))}
    </div>
  </div>

  );
  
};

export default ReplyList
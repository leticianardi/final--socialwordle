import React from 'react'

const ReplyList = ({ replies }) => {
  return (
 
    <div>
      {replies &&
        replies.map((reply) => (
          <p key={reply._id}>
          {replies.username} {replies.createdAt}
            {reply.replyBody}
          </p>
        ))}
    </div>

  );
  
};

export default ReplyList
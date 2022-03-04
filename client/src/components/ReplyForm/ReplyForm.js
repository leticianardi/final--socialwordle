import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { ADD_REPLY } from "../../utils/mutations";
import"../../styles/ReplyForm.css"

const ReplyForm = ({ postId }) => {
  const [replyBody, setBody] = useState("");
  const [characterCount, setCharacterCount] = useState(0);
  const [addReply, { error }] = useMutation(ADD_REPLY);

  const handleChange = (event) => {
    if (event.target.value.length <= 280) {
      setBody(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await addReply({
        variables: { replyBody, postId },
      });

      setBody("");
      setCharacterCount(0);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="reply-container">
      <div>
        <p className={`${characterCount === 280 || error ? "text-error" : ""}`}>
          {characterCount}/280
          {error && <span className="ml-2">Something went wrong...</span>}
        </p>
      </div>

      <div>
        <form onSubmit={handleFormSubmit}>
          <textarea
            placeholder="Reply"
            value={replyBody}
            onChange={handleChange}
          ></textarea>
          <button className="button-6" type="submit">Submit</button>
        </form>
        {error && <div>Something went wrong...</div>}
      </div>
    </div>
  );
};

export default ReplyForm;

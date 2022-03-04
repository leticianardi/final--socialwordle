import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_POST } from "../../utils/mutations";
import { QUERY_POSTS, QUERY_ME } from "../../utils/queries";
import "../../styles/PostForm.css";

const PostForm = () => {
  const [postText, setText] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const [addPost, { error }] = useMutation(ADD_POST, {
    update(cache, { data: { addPost } }) {
      try {
        const { posts } = cache.readQuery({ query: QUERY_POSTS });
        cache.writeQuery({
          query: QUERY_POSTS,
          data: { posts: [addPost, ...posts] },
        });
      } catch (e) {
        console.error(e);
      }

      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, posts: [...me.posts, addPost] } },
      });
    },
  });

  const handleChange = (event) => {
    if (event.target.value.length <= 280) {
      setText(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await addPost({
        variables: { postText },
      });
      setText("");
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="container">
      <div className="container-form">
        <div className="form-title">
          <p>Don't share the word of the day.</p>
        </div>
      </div>

      <form onSubmit={handleFormSubmit}>
        <textarea
          placeholder="Share your results for today"
          value={postText}
          onChange={handleChange}
        ></textarea>
        <p
          className={` ${characterCount === 280 || error ? "text-error" : ""}`}
        >
          {characterCount}/280
          {error && <span className="ml-2">Something went wrong...</span>}
        </p>
        <button className="button-6" type="submit">Guess</button>
      </form>
    </div>
  );
};

export default PostForm;

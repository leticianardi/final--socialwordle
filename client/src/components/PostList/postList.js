import React from "react";
import { Link } from "react-router-dom";
import "../../styles/PostList.css";

const PostList = ({ posts, title }) => {
  if (!posts.length) {
    return <h3>No posts yet</h3>;
  }
  return (
    <div className="container">
      <h3>{title}</h3>
      {posts &&
        posts.map((post) => (
          <div key={post._id} className="card-box">
            <p className="card-title">
              <Link
                to={`/profile/${post.username}`}
                style={{ fontWeight: 700 }}
              >
                {post.username}
              </Link>{" "}
              posted on {post.createdAt}
            </p>
            <div className="card-body">
              <Link to={`/post/${post._id}`}>
                <p>{post.postText}</p>
                <p className="reply-count">
                  Replies: {post.replyCount} || Click to{" "}
                  {post.replyCount ? "see the guesses" : "start guessing"}.
                </p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PostList;

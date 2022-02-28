import React from "react";
import { Link } from "react-router-dom";

const Friends = ({ friendCount, username, friends }) => {
  if (!friends || !friends.length) {
    return <p>{username}, time to add friends</p>;
  }
  return (
    <div>
      <h3>
        {username}'s {friendCount} {friendCount === 1 ? "friend" : "friends"}
      </h3>
      {friends.map((friend) => (
        <button className="btn w-100 display-block mb-2" key={friend._id}>
          <Link to={`/profile/${friend.username}`}>{friend.username}</Link>
        </button>
      ))}
    </div>
  );
};

export default Friends;

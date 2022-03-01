import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";

import { QUERY_USER, QUERY_ME } from "../utils/queries";
import { ADD_FRIEND } from "../utils/mutations";
import Auth from "../utils/auth";

import PostForm from "../components/PostForm/PostForm";
import PostList from "../components/PostList/postList";
import FriendList from "../components/FriendList/Friends";
import "../styles/Profile.css";

const Profile = (props) => {
  const [addFriend] = useMutation(ADD_FRIEND);

  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  // add friend button
  const handleClick = async () => {
    try {
      await addFriend({
        variables: { id: user._id },
      });
    } catch (e) {
      console.error(e);
    }
  };

  // redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Redirect to="/profile" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return <h3>You need to be logged in to see this page</h3>;
  }

  return (
    <div>
      <div className="title">
        <h2>Viewing {userParam ? `${user.username}'s` : "your"} profile.</h2>
        {userParam && <button onClick={handleClick}>Add Friend</button>}
      </div>

      <div className="post-list">
        <div>
          <PostList posts={user.posts} title={`${user.username}' posts`} />
        </div>
      </div>

      <div>
        <FriendList
          username={user.username}
          friendCount={user.friendCount}
          friends={user.friends}
        />
      </div>

      <div className="post-form">
        <div>{!userParam && <PostForm />}</div>
      </div>
    </div>
  );
};

export default Profile;

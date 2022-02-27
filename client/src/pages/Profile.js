import React from "react";
import { Redirect, useParams } from "react-router-dom";

import PostList from "../components/PostList/postList";

// TODO: when add friend is readSync, add useMutation here
import { useQuery } from "@apollo/client";
// import { useQuery, useMutation } from "@apollo/client";

import { QUERY_USER, QUERY_ME } from "../utils/queries";
import Auth from "../utils/auth";
import PostForm from "../components/PostForm";

const Profile = (props) => {
  // TODO: add friend
  // const [addFriend] = useMutation(ADD_FRIEND);

  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

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
      <div>
        <h2>Viewing {userParam ? `${user.username}'s` : "your"} profile.</h2>

        {/* TODO: add friend logic */}
        {/* {userParam && (
      <button onCLick={handleClick}>Add Friend</button>
     )} */}
      </div>

      <div>
        <div>
          <PostList posts={user.posts} title={`${user.username}' posts`} />
        </div>
      </div>

      {/* TODO: friends list */}
      {/* <div>
        <FriendList
          username={user.username}
          friendCount={user.friendCount}
          friends={user.friends}
        />
      </div> */}

      <div>{!userParam && <PostForm />}</div>
    </div>
  );
};

export default Profile;

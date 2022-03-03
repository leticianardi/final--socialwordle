import React from "react";
import PostList from "../components/PostList/postList";
import PostForm from "../components/PostForm/PostForm";
import './Home';

import { useQuery } from "@apollo/client";
import { QUERY_POSTS } from "../utils/queries";
// TODO: when friend list is done, use the next import
// import { QUERY_POSTS, QUERY_ME_BASIC } from "../utils/queries";
import Auth from "../utils/auth";

//TODO:
// import FriendList from '../components/FriendList';

const Home = () => {
  const { loading, data } = useQuery(QUERY_POSTS);
  // const { data: userData } = useQuery(QUERY_ME_BASIC);
  const posts = data?.posts || [];
  console.log(posts);

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div>
        {loggedIn && (
          <div>
            <PostForm />
          </div>
        )}

        <div className={` col-12 mb-3 ${loggedIn}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <PostList posts={posts} title="Guesses for today:" />
          )}
        </div>

        {/* {loggedIn && userData ? (
          <div className="col-12 col-lg-3 mb-3">
            <FriendList
              username={userData.me.username}
              friendCount={userData.me.friendCount}
              friends={userData.me.friends}
            />
          </div>
        ) : null} */}
      </div>
    </main>
  );
};

export default Home;

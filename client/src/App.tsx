import React from "react";

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Topbar from "./components/Topbar/Topbar";
// import Score from "./components/Score/Score";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import SinglePost from "./pages/SinglePost";
import Frontpage from "./pages/Frontpage";
import Game from "./pages/Game";
import Profile from "./pages/Profile";
import GamePt from "./pages/GamePt";
import GameEng from "./pages/GameEng";
// import Footer from "./components/Footer/Footer";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Topbar />
          <main className="container">
            <Route path="/" exact component={Frontpage} />
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/play" component={Game} />
            {/* <Route exact path="/score" component={Score} /> */}
            <Route path="/profile/:username?" component={Profile} />
            <Route path="/post/:id" component={SinglePost} />
            <Route path="/portuguese" component={GamePt} />
            <Route path="/english" component={GameEng} />

            {/* <Route component={NoMatch} /> */}
          </main>
          {/* <Footer /> */}
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

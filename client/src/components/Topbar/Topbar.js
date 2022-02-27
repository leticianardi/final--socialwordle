import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import "../../styles/Topbar.css";


const Topbar = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="nav">
      <div className="nav-title">
        <Link to="/">
          <h1>Social Wordle</h1>
        </Link>
      </div>

      <div className="nav-links">
        <nav className="nav-links-items">
          {Auth.loggedIn() ? (
            <>
              <Link to="/profile">My profile</Link>
              <a href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Topbar;

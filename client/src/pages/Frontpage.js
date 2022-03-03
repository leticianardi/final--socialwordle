import React from "react";
import "../styles/Frontpage.css";
import Logo from "../img/Wordlingo-logo.png";

const Frontpage = () => {
  return (
  
    <div className="front-section">
      <div className="front-left">
        <div className="front-left-wrapper">
          <h2 className="front-intro">Welcome to</h2>
          <h1 className="front-name">Wordlingo</h1>
          <div className="front-title">
            <div className="front-titlle-wrapper">
              {/* <div className="a-title-item">...</div> */}
              {/* <div className="front-title-item">...</div> */}
              {/* <div className="front-title-item">...</div> */}
              {/* <div className="front-title-item">...</div> */}
            </div>
          </div>
          <p className="front-description">
            Share your score with your friends.
          </p>
        </div>
      </div>

      <div className="front-right">
        <div className="front-img-bg"></div>
        <img src={Logo} alt="" className="front-img" />
      </div>
    </div>
   

  );
};

export default Frontpage;

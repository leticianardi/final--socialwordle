import React from "react";
import AppGame from "../components/PlayGame/AppGame";
import AppGameEng from "../components/PlayGame/AppGameEng";

const Game = () => {
  function ChooseLanguage(props) {
    const userType = props.type;

    if (userType == 1) {
      return <p>Here, You can write admin template. You are a Admin.</p>;
    } else if (userType == 2) {
      return <p>Here, You can write manager template. You are a Manager.</p>;
    }

    return <p>Here, You can write user template. You are a User.</p>;
  }

  return (
    <div className="container">
      <h1>React If Condition Example - HDTuto.com</h1>

      <ChooseLanguage type={2} />
    </div>
  );
};

export default Game;

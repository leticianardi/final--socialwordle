import React from "react";
// import { Link } from "react-router-dom";
import GamePt from "./GamePt";
// import GameEng from "./GameEng";

const Game = () => {
  return (
    // <div>
    //   <p>
    //     You can play this game in two languages.
    //     <p>
    //       The answers are connected: if you guesse the word in Portuguese, you
    //       will have a hint for the word in English and viceversa. Good luck.
    //     </p>
    //   </p>

    //   <div>
    //     <p>
    //       <Link to={`/portuguese`}>Portuguese</Link>
    //     </p>
    //     <p>
    //       <Link to={`/english`}>English</Link>
    //     </p>
    //   </div>
    // </div>
    <div>
      <GamePt />
    </div>
  );
};

export default Game;

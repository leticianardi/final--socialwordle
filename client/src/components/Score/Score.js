import React, { useState } from "react";
import Profiles from "./Profiles";
import { Leaderboard } from "./Database";
// import { useContext, useEffect, useState } from "react";
// import { GlobalSettingsContext } from "../hooks/useGlobalSettings";
// import { GuessDistributionKeys, StatisticsContext } from "../hooks/useStatistics";

// import { Redirect, useParams } from "react-router-dom";
// import { useQuery, useMutation } from "@apollo/client";
// import { QUERY_USER, QUERY_ME } from "../utils/queries";

export default function Score() {
  // grab user + friends informartion from database

  // grab User score from localStorage

  // display scores and sort them

  const [period, setPeriod] = useState(0);

  const handleClick = (e) => {
    setPeriod(e.target.dateset.id);
  };
  return (
    <div>
      <h1>Scores</h1>

      <div>
        <button onClick={handleClick} data-id="0">
          today
        </button>
        <button onClick={handleClick} data-id="7">
          this week
        </button>
        <button onClick={handleClick} data-id="30">
          this month
        </button>
        <button onClick={handleClick} data-id="365">
          all time
        </button>
      </div>

      <Profiles Leaderboard={timeFrame(Leaderboard, period)}></Profiles>
    </div>
  );
}

function timeFrame(data, timeFrame) {
  const today = new Date();
  const previous = new Date(today);
  previous.setDate(previous.getDate() - (timeFrame + 1));

  let filter = data.filter((val) => {
    let userDate = new Date(val.dt);
    if (timeFrame === 0) return val;
    return previous <= userDate && today >= userDate;
  });

  return filter.sort((score1, score2) => {
    if (score1.score === score2.score) {
      return score2.score - score1.score;
    } else {
      return score2.score - score1.score;
    }
  });
}

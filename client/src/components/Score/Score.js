// import { useContext, useEffect, useState } from "react";
// import { GlobalSettingsContext } from "../hooks/useGlobalSettings";
// import { GuessDistributionKeys, StatisticsContext } from "../hooks/useStatistics";

export default function Score() {

 const handleClick = (e) => {
  console.log(e)
 }
  return (
    <div>
     <h1>Scores</h1>


    <div>
     <button onClick={handleClick} data-id='0'>today</button>
     <button onClick={handleClick} data-id='7'>this week</button>
     <button onClick={handleClick} data-id='30'>this month</button>
     <button onClick={handleClick} data-id='365'>all time</button>
    </div>

    </div>
  )
}


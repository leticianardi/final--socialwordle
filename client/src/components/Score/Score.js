// // import { useContext, useEffect, useState } from "react";
// // import { GlobalSettingsContext } from "../hooks/useGlobalSettings";
// // import { GuessDistributionKeys, StatisticsContext } from "../hooks/useStatistics";

// import { Redirect, useParams } from "react-router-dom";
// import { useQuery, useMutation } from "@apollo/client";
// import { QUERY_USER, QUERY_ME } from "../utils/queries";

// export default function Score() {
//   // grab user + friends informartion from database

//   // grab User score from localStorage

//   // display scores and sort them

//   const handleClick = (e) => {
//     console.log(e);
//   };
//   return (
//     <div>
//       <h1>Scores</h1>

//       <div>
//         <button onClick={handleClick} data-id="0">
//           today
//         </button>
//         <button onClick={handleClick} data-id="7">
//           this week
//         </button>
//         <button onClick={handleClick} data-id="30">
//           this month
//         </button>
//         <button onClick={handleClick} data-id="365">
//           all time
//         </button>
//       </div>

//       <Profiles Leaderboard={Leaderboard}></Profiles>
//     </div>
//   );
// }

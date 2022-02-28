import React from "react";

export default function Profiles({ Leaderboard }) {
  return <div id="profile">{Item(Leaderboard)}</div>;
}

function Item(data) {
  return (
    <>
      {data.map((value, index) => (
        <div key={index}>
          <div>
            {/* <img></img> */}
            <div>
              <h3>{value.name}</h3>
              <span>{value.location}</span>
            </div>
          </div>
          <div>
            <span>{value.score}</span>
          </div>
        </div>
      ))}
    </>
  );
}

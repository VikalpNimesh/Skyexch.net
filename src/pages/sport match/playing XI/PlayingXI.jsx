import React from "react";
import "./PlayingXI.css"
import PlayingPlayer from "./PlayingPlayers";
const PlayingXI = () => {
  return (
    <>
      <div className="playing11-main-box">
        <div className="Squad_logos">
          <div className="header_team teama">
            <div className="team_ttle">
              <img src="https://images.entitysport.com/assets/uploads/2024/04/Rectangle-3461-2024-04-11T065750.977.png" />
              <div>Globelink Weststar</div>
            </div>
          </div>
          <div className="header_team teamb">
            <div className="team_ttle">
              <img src="https://images.entitysport.com/assets/uploads/2024/04/Rectangle-3461-2024-04-11T065852.346.png" />
              <div>Brickwork Development</div>
            </div>
          </div>
              </div>
        <PlayingPlayer/>
        <PlayingPlayer/>
      </div>
    </>
  );
};

export default PlayingXI;

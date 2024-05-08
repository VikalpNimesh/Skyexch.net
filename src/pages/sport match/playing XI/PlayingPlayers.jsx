import React, { useState } from "react";

const PlayingPlayer = () => {
  // State to manage players' status (in or out)
  const [players, setPlayers] = useState({
    "Hari Prasanth": false,
    "Jiju Janardhanan": false,
    "Laxman Sreekumar": false,
    // Add other players here...
  });

  // Function to toggle player's status
  const togglePlayerStatus = (playerName) => {
    setPlayers((prevState) => ({
      ...prevState,
      [playerName]: !prevState[playerName],
    }));
  };

  return (
    <div className="Squads_hd s-playing">
      <span className="position">Playing XI</span>
      <div className="data-impact">
      
        {/* Add the second team's list similarly */}
        <ul className="list1 en-team_a">
          {Object.keys(players).map((player) => (
            <li key={player}>
              <a
                href="javascript:void(0);"
                onClick={() => togglePlayerStatus(player)}
              >
                <img
                  src={`https://images.entitysport.com/assets/uploads/2024/04/Rectangle-3461-2024-04-11T065750.977.png`}
                  alt={player}
                />
                <span
                  className="player-name hide-mobile"
                  out={players[player].toString()}
                >
                  {player}
                </span>
                {/* <span className="player-name hide-desktop">{player}</span> */}
                <div className="player-role">Batsmen</div>
              </a>
            </li>
          ))}
        </ul>
        <ul className="list1 en-team_a">
          {Object.keys(players).map((player) => (
            <li key={player}>
              <a
                href="javascript:void(0);"
                onClick={() => togglePlayerStatus(player)}
              >
                <img
                  src={`https://images.entitysport.com/assets/uploads/2024/04/Rectangle-3461-2024-04-11T065750.977.png`}
                  alt={player}
                />
                <span
                  className="player-name hide-mobile"
                  out={players[player].toString()}
                >
                  {player}
                </span>
                {/* <span className="player-name hide-desktop">{player}</span> */}
                <div className="player-role">Batsmen</div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PlayingPlayer;

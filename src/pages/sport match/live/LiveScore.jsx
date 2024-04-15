import React from "react";
import { BatsmanRow } from "../batting table/BattingTable";
import { BowlingTableRow } from "../Bowling table/BowlingTable";
import "./LiveScore.css";
const LiveScore = () => {
  return (
    <div className="live-score-box">
      <table className="battings table1 mb30">
        <tbody>
          <tr className="header1">
            <th className="col-player">Batsmen</th>
            <th className="col-info how_out hide-mobile"></th>
            <th className="col-runs">R</th>
            <th className="col-balls">B</th>
            <th className="col-fours">4S</th>
            <th className="col-sixes">6S</th>
            <th className="col-sr">SR</th>
          </tr>
          <BatsmanRow
            player="Yash Jagdale (C)"
            howOut="c A Jadhav b P Salvi"
            runs="21"
            balls="13"
            fours="2"
            sixes="1"
            strikeRate="161.54"
          />
          <BatsmanRow
            player="Yash Jagdale (C)"
            howOut="c A Jadhav b P Salvi"
            runs="21"
            balls="13"
            fours="2"
            sixes="1"
            strikeRate="161.54"
          />

          {/* Add more BatsmanRow and BatsmanFOWRow components for other players */}
          {/* Add Extra and Total rows */}
          {/* Add Yet To Bat row */}
        </tbody>
      </table>
      <table className="bowlings table1">
        <tbody>
          <tr className="header1">
            <th className="col-player">BOWLING</th>
            <th className="col-overs">O</th>
            <th className="col-maidens">M</th>
            <th className="col-runs">R</th>
            <th className="col-wickets">W</th>
            <th className="col-econ">ECON</th>
          </tr>
          <BowlingTableRow
            player="Piyush Salvi"
            overs="4"
            maidens="1"
            runs="23"
            wickets="1"
            econ="5.75"
          />
          <BowlingTableRow
            player="Piyush Salvi"
            overs="4"
            maidens="1"
            runs="23"
            wickets="1"
            econ="5.75"
          />
          {/* Add more BowlingTableRow components for other bowlers */}
        </tbody>
      </table>
      <div className="live-info-box">
        <div className="live-info">
          <div className="live-inner-div current-partnership">
            <div>Current Partnership:</div> 12 run (0.3 ov)
          </div>
          <div className="live-inner-div last-wicket">
            <div>Last Wicket:</div> Atish Kumbhar 43 (29)
          </div>
          <div className="live-inner-div fall-of-wicket">
            <div>Fall of Wicket:</div> 163/8 (18.2 ov)
          </div>
        </div>
        <div className="live-info">
          <div className="live-inner-div right-crt crr">
            CRR: <span>9.29</span>
          </div>
          <div className="live-inner-div right-crt lto">
            Last Ten Overs: <span>84/6 8.40</span>
          </div>
        </div>
      </div>
      {/* **************recent**************** */}
      <div className="recent-box">
        <div className="rec">RECENT</div>
        <div className="recent-runs">
          <div className="overend">OV 19</div>
          <span className="ball run4">4</span>
          <span className="ball run4">4</span>
          <span className="ball run4">4</span>
          <span className="ball dot">·</span>
          <div className="overend">OV 18</div>
          <span className="ball dot">·</span>
          <span className="ball run1">1</span>
          <span className="ball run1">1</span>
          <span className="ball dot">·</span>
          <span className="ball run1">1</span>
          <div className="overend">OV 17</div>
          <span className="ball run1">1</span>
          <span className="ball dot">·</span>
          <span className="ball run2">2</span>
          <span className="ball run1">1</span>
          <span className="ball run4">4</span>
          <span className="ball dot">·</span>
          <div className="overend">OV 16</div>
          <span className="ball run6">6</span>
          <span className="ball run1">1</span>
          <span className="ball run1lb">1lb</span>
          <span className="ball run1">1</span>
          <span className="ball run1">1</span>
          <span className="ball dot">·</span>
          <div className="overend">OV 15</div>
          <span className="ball run6">6</span>
          <span className="ball run4">4</span>
          <span className="ball run1">1</span>
        </div>
      </div>

      {/* ******************match commentry*************** */}
      <div className="match-commentry-box">
        <div className="comment comment-ball">
          <div className="commentary-left">
            <div className="score ">4</div>
            <div className="ovb">18.5</div>
          </div>
          <div className="col-mid"></div>
          <div className="text">Ramakrishna Ghosh to Umar Shah, Four,</div>
        </div>
        <div className="comment comment-ball">
          <div className="commentary-left">
            <div className="floatleft score score-4">4</div>
            <div className="ovb">18.5</div>
          </div>
          <div className="col-mid"></div>
          <div className="text">Ramakrishna Ghosh to Umar Shah, Four,</div>
        </div>
        <div className="comment comment-ball comment-bg">
          <div className="row-ovr">
            <div className="col-xs-12">
              <div className="endover">End of over 18 (3 runs)</div>
              <div className="batsman">Atharva Dakway 0 (1)</div>
              <div className="batsman">Atish Kumbhar 43 (27)</div>
            </div>
            <div className="col-mid"></div>
            <div className="col-xs-12">
              <div className="endover">
                <img src="https://images.entitysport.com/assets/uploads/2024/04/Punit-Balan-Group.png" />
                Punit Balan Group 163/7
              </div>
              <div className="bowler">Piyush Salvi 4-0-28-1</div>
              <div className="bowler">Ramakrishna Ghosh 3-0-30-1</div>
            </div>
          </div>
        </div>
        <div className="comment comment-ball">
          <div className="commentary-left">
            <div className="score ">4</div>
            <div className="ovb">18.5</div>
          </div>
          <div className="col-mid"></div>
          <div className="text">Ramakrishna Ghosh to Umar Shah, Four,</div>
        </div>
        <div className="comment comment-ball">
          <div className="commentary-left">
            <div className="floatleft score score-4">4</div>
            <div className="ovb">18.5</div>
          </div>
          <div className="col-mid"></div>
          <div className="text">Ramakrishna Ghosh to Umar Shah, Four,</div>
        </div>
        <div className="comment comment-ball comment-bg">
          <div className="row-ovr">
            <div className="col-xs-12">
              <div className="endover">End of over 18 (3 runs)</div>
              <div className="batsman">Atharva Dakway 0 (1)</div>
              <div className="batsman">Atish Kumbhar 43 (27)</div>
            </div>
            <div className="col-mid"></div>
            <div className="col-xs-12">
              <div className="endover">
                <img src="https://images.entitysport.com/assets/uploads/2024/04/Punit-Balan-Group.png" />
                Punit Balan Group 163/7
              </div>
              <div className="bowler">Piyush Salvi 4-0-28-1</div>
              <div className="bowler">Ramakrishna Ghosh 3-0-30-1</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveScore;

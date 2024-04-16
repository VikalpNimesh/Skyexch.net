import BowlingTable from "../Bowling table/BowlingTable";
import BattingTable from "../batting table/BattingTable";
import FOWTable from "../fall wicket/FOWTable";
import LiveMatchHeader from "../liveMatchSection/LiveMatchHeader";
import MatchDetails from "../match details/MatchDetails";
import "./MatchContent.css";



const MatchContent = () => {
  return (
    <>
    {/* <LiveMatchHeader/> */}
    <div >
      <ul className="match-links">
        <li className="match-link">LIVE</li>
        <li className="match-link">SCORECARD</li>
        <li className="match-link">COMMENTARY</li>
        <li className="match-link">PLAYING XI</li>
      </ul>
      <div className="inning-scorecard">
        <div className="inning-heading">
          <div className="taem-logo-name-box">
            <span className="team-logo">
              <img src="https://images.entitysport.com/assets/uploads/2024/04/Ashtapailu-Sports.png" />
            </span>
            <span className="inning-name">
              <span className="hide-mobile">Ashtapailu Sports Inning</span>
              {/* <span className="hide-desktop">APS Inning</span> */}
            </span>
          </div>
          <div className="scores_full ">150/8 (20 ov)</div>
        </div>
              
      </div>
      <div className="inning-content">
        <BattingTable />
        <BowlingTable/>
        <FOWTable />
        <MatchDetails/>
        </div>
      </div>
      </>
  );
};

export default MatchContent;

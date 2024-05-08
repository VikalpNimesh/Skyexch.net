import React from "react";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import "./style.css";
import CarouselSection from "../home/carousel/CarouselSection";
import EntitySection from "../home/entity section/EntitySection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import LiveMatchHeader from "./liveMatchSection/LiveMatchHeader";
import HeadlineBox from "../home/moreNews/HeadlineBox";
import MatchContent from "./MatchContent.jsx/MatchContent";
import H2H from "./h2h/H2H";
import PlayingXI from "./playing XI/PlayingXI";
import Comentary from "./commentary/Comentary";
import LiveScore from "./live/LiveScore";

const SportMatch = () => {
  return (
    <ContentWrapper>
      <div className="tab-section">
        <EntitySection />
        <CarouselSection />
      </div>

      <div className="sport-match-section">
        <div className="sport-flex-box">
          <h2>Sport-matches</h2>
          <div className="sport-match-flex">
            {/* ****************social-links******************* */}
            <div className="live-match-section">
              <div className="social-post-box">
                <ul>
                  <li className="live-social-link">
                    <div>
                      <FontAwesomeIcon icon={faFacebook} />
                    </div>
                  </li>
                  <li className="live-social-link">
                    <div>
                      <FontAwesomeIcon icon={faInstagram} />
                    </div>
                  </li>
                  <li className="live-social-link">
                    <div>
                      <FontAwesomeIcon icon={faTwitter} />
                    </div>
                  </li>
                  <li className="live-social-link">
                    <div>
                      <FontAwesomeIcon icon={faTwitter} />
                    </div>
                  </li>
                </ul>
              </div>
              <div style={{ width: "100%" }}>
                <div className="match-center-header ">
                  <div className="mtc-left">
                    <div className="teamLogo">
                      <img src="https://images.entitysport.com/assets/uploads/2024/04/Ashtapailu-Sports.png" />
                    </div>
                    <div className="teamName">
                      <div className="hide-mobile">Ashtapailu Sports</div>
                      {/* <div className="hide-desktop">APS</div> */}
                    </div>
                  </div>
                  <div className="mtc-center">
                    <div className="match-info">
                      <span className=" status-3">Live</span>, Live Now
                    </div>
                    <div className="status_note ">
                      Nok 99 need 20 runs in 10.0 remaining overs
                    </div>
                    <div className="flexed-score">
                      <div className="teamAscoreFull">
                        <div className=" teamaScore">150/8</div>
                        <div className=" teamaOver">20 OV</div>
                      </div>
                      <img
                        src="https://dashboard.entitysport.com/widget/assets/images/cricket/betwee.svg"
                        alt=""
                      />
                      <div className="teamBscoreFull">
                        <div className=" teambScore">131/2</div>
                        <div className=" teambOver">10 OV</div>
                      </div>
                    </div>{" "}
                    <hr />
                    <div className="venue">Shinde High School Ground, Pune</div>
                  </div>
                  <div className="mtc-right">
                    <div className="teamLogo">
                      <img src="https://images.entitysport.com/assets/uploads/2024/04/Nok-99.png" />
                    </div>
                    <div className="teamName">
                      <div className="hide-mobile">Nok 99</div>
                      {/* <div className="hide-desktop">NOK</div> */}
                    </div>
                  </div>
                </div>
                <div className="manthematch">
        <div className="dummy-man-of-the-match ">
          <img
            src="https://dashboard.entitysport.com/widget/assets/images/cricket/dummy-player.png"
            alt=""
          />
        </div>
        <div className="flex-the-man">
          <b>Man of the Match</b>
          <a href="javascript:void(0);">Atish Kumbhar</a>
        </div>
      </div>
                {/* <MatchContent/> */}
                {/* <LiveScore/> */}
                <Comentary/>
                <PlayingXI/>
                <H2H/>
              </div>
              {/* <LiveMatchHeader /> */}
            </div>
          </div>
        </div>
        <HeadlineBox />
      </div>
    </ContentWrapper>
  );
};

export default SportMatch;

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

const SportMatch = () => {
  return (
    <ContentWrapper>
      <div className="tab-section">
        <EntitySection />
        <CarouselSection />
      </div>
      <div className="sport-match-section">
        <h2>Sport-matches</h2>

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
          <LiveMatchHeader />

        </div>
              
      </div>
    </ContentWrapper>
  );
};

export default SportMatch;

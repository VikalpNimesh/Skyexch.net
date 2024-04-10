import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-top">
        <img
          src="https://skyexch.net/wp-content/uploads/2022/06/sky_footer_logo.png"
          alt="Skyexch"
          data-rjs="2"
        />

        <div className="footer-box">
          <ul>
            <li className="footer-link">
              <div>
                <FontAwesomeIcon icon={faFacebook} />
              </div>
            </li>
            <li className="footer-link">
              <div>
                <FontAwesomeIcon icon={faInstagram} />
              </div>
            </li>
            <li className="footer-link">
              <div>
                <FontAwesomeIcon icon={faTwitter} />
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <ul>
          <li>GDPR</li>
          <li>DMCA</li>
          <li>Disclaimer</li>
          <li>Terms and Conditions</li>
          <li>Privacy Policy</li>
          <li>Copyright Notice</li>
        </ul>
      </div>

      <div className="copyright">
        <p>
          Copyright © 2023 <a href="https://skyexch.net/">Skyexchange</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;

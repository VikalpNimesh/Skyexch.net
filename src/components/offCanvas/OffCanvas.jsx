import React from "react";
import { data } from "../../data/navData.js";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const OffCanvas = () => {
  return (
    <div>
      <div
        className="offcanvas offcanvas-start off-canvas"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <img
            className="logo"
            src="https://skyexch.net/wp-content/uploads/2022/06/sky_header_logo.png"
            alt=""
            style={{ width: "200px", margin: "auto" }}
          />
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body nav-body">
          {data.map((link, i) => (
            <div className="links" key={i}>
              {link}
            </div>
          ))}
          <div className="sign-up">
            <button>SIGN UP</button>
          </div>
          <div className="whats-up">
            <button>WHATSAPP ID</button>
          </div>

          <div className="social-box">
            <span>CONNECT WITH US</span>
            <ul>
              <li className="social-link">
                <FontAwesomeIcon icon={faFacebook} />
              </li>
              <li className="social-link">
                <FontAwesomeIcon icon={faInstagram} />
              </li>
              <li className="social-link">
                <FontAwesomeIcon icon={faTwitter} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffCanvas;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const Header = () => {
  return (
    <div className="main-header">
      <div className="header">
        <div className="logo">
        <FontAwesomeIcon className="header-bar" data-bs-toggle="offcanvas" href="#offcanvasExample"  icon={faBars} />
          <img
            src="https://skyexch.net/wp-content/uploads/2022/06/sky_header_logo.png"
            alt=""
          />
        </div>
        <div className="social-links">
        <span className="sign-up-btn"><a href="https://wa.link/skyexchnet">SIGNUP</a></span>
          <ul>
          
            <li className="social-link social-link-text">CONNECT WITH US</li>
            <li className="social-link">
              <FontAwesomeIcon icon={faFacebookF} />
            </li>
            <li className="social-link">
              <FontAwesomeIcon icon={faXTwitter} />
            </li>
            <li className="social-link">
              <FontAwesomeIcon icon={faInstagram} />
            </li>
          </ul>
          <div className="search-bar">
            <FontAwesomeIcon className="social-link" icon={faMagnifyingGlass} />
          </div>
          {/* <img className="header-whatsapp" src="https://skyexch.net/wp-content/themes/the-league-child/images/whatsapp.png" alt="whatsapp icon"></img> */}
        </div>
      </div>
      <hr />
      <div className="lower-header">
       
        <div>
          <FontAwesomeIcon className="menu-bar" data-bs-toggle="offcanvas" href="#offcanvasExample"  icon={faBars} />
        </div>
        <div className="nav-links">
          <ul>
            <li className="nav-link">cricket news</li>
            <li className="nav-link">ipl</li>
            <li className="nav-link">wpl</li>
            <li className="nav-link">psl</li>
            <li className="nav-link">ind vs eng</li>
            <li className="nav-link">football</li>
            <li className="nav-link">web stories</li>
            <li className="nav-link">wwe</li>
            <li className="nav-link">entertainment</li>
            <li className="nav-link">sign up</li>
          </ul>
          <div className="wp">WHATSAPP ID</div>
        </div>
      </div>
    </div>
  );
};

export default Header;

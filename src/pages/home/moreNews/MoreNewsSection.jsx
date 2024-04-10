

import React from "react";
import "./style.css";
import MoreNewsBox from "./MoreNewsBox";
// import NewsBox from "./NewsBox";

const MoreNewsSection = () => {
  return (
    <div className="news-section">
      <div className="news-content-head">
        <h2>More News</h2>
          </div>
          <div className="story-boxes">
              <MoreNewsBox/>
              <MoreNewsBox/>
          </div>

          <button className='more-post-btn'>
                More Posts
              </button>
    </div>
  );
};

export default MoreNewsSection;

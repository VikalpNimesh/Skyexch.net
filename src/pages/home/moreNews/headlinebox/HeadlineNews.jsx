

import React from "react";
import "./style.css"

const HeadlineNews = () => {
    return (
      
    <div className="news-box">
      <img
        width="400"
        height="240"
        src="https://skyexch.net/wp-content/uploads/2024/03/2-20-400x240.png"
        alt="Cameron Green"
        decoding="async"
      ></img>

      <div className="news-info-box">
        <div className="post-info">
          <div>Cricket News</div>
          <span>/ 1 month ago</span>
        </div>
        <div className="story-info">
          Australian head coach plans to rest Cameron Green for white-ball
          fixtures to keep him fit for Border-Gavaskar Trophy
        </div>
        {/* <div className="extra-info">
          Cameron Green played a gem of a knock against New Zealand during the
          first...
        </div>
        <div className="post-by">
          <span>By </span>
        </div> */}
      </div>
    </div>
  );
};

export default HeadlineNews;

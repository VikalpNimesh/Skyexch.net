import React from "react";
import "./style.css";
import NewsBox from "./NewsBox";

const NewsSection = () => {
  return (
    <div className="news-section">
      <div className="news-content-head">
        <h2>Cricket News</h2>
        <div className="widget-head-link">More Cricket News </div>
          </div>
          <div className="story-boxes">
              <NewsBox/>
              <NewsBox/>
              <NewsBox/>
              <NewsBox/>
          </div>
    </div>
  );
};

export default NewsSection;

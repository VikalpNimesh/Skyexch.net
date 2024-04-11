import React from "react";
import HeadlineNews from "./headlinebox/HeadlineNews";

const HeadlineBox = () => {
  return (
    <div className="headline-section">
      <div className="headline-tab">
        <ul>
          <li>HEADLINE</li>
          <li>TRENDING</li>
        </ul>
      </div>
      <HeadlineNews />
      <HeadlineNews />
      <HeadlineNews />
      <HeadlineNews />
    </div>
  );
};

export default HeadlineBox;

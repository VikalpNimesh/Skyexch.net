import React from "react";
import "./style.css";

const BannerSection = () => {
  return (
    <div className="banner-main">
      <div className="banner">
        <img
          src="https://skyexch.net/wp-content/uploads/2024/03/2-22.png.webp"
          alt=""
          srcset=""
        />
        <div className="banner-title">
          <button type="button">India vs England 2024</button>
          <h1>
            Team India veteran praises Ravichandran Ashwin’s fitness levels
            ahead of his 100th Test
          </h1>
          <p>
            India have already clinched the series 3-1 with one game to go in
            the five-match Test series against England
          </p>
        </div>
      </div>
      <div className="banner-inner-relative">
        <div className="banner-inner">
          <img
            src="https://skyexch.net/wp-content/uploads/2024/03/2-22.png.webp"
            alt=""
            srcset=""
          />
          <div className="banner-title">
            <button type="button">India vs England 2024</button>
            <h1>
              Team India veteran praises Ravichandran Ashwin’s fitness levels
              ahead of his 100th Test
            </h1>
          </div>
        </div>
        <div className="banner-inner">
          <img
            src="https://skyexch.net/wp-content/uploads/2024/03/2-22.png.webp"
            alt=""
            srcset=""
          />
          <div className="banner-title">
            <button type="button">India vs England 2024</button>
            <h1>
              Team India veteran praises Ravichandran Ashwin’s fitness levels
              ahead of his 100th Test
            </h1>
          </div>
        </div>
      </div>
      <div className="tNc">
        <p>Contest Terms & Conditions</p>
        <p>
          1. Multiple entries are not allowed, only one entry per participant.
        </p>
        <p>
          2. Single participant with the most accurate prediction will be
          eligible for the winner selection.
        </p>
        <p>
          3. Winners will be decided based on the most accurate predictions.
        </p>
        <p>4. Winners will be announced on Mar 11, 2024 7:00 PM IST.</p>
      </div>
    </div>
  );
};

export default BannerSection;

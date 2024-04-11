import React from "react";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import BannerSection from "../news/bannerSection/BannerSection";
import MoreNews from "../news/moreNews/MoreNews";

const DetailedNews = () => {
  return (
    <div>
      <ContentWrapper>
              <BannerSection />
              <MoreNews/>
      </ContentWrapper>
    </div>
  );
};

export default DetailedNews;

import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import BannerSection from "./bannerSection/BannerSection";
import ContestAlert from "./bannerSection/ContestAlert";
import CarouselSection from "./carousel/CarouselSection";
import EntitySection from "./entity section/EntitySection";
import MoreNews from "./moreNews/MoreNews";
import NewsSection from "./newSection/NewsSection";
import Sponser from "./sponserSection/Sponser";
import "./style.css";
const Home = () => {
  return (
    <div>
      <div className="home"></div>
      <ContentWrapper>
        <div className="tab-section">
          <EntitySection />
          <CarouselSection />
        </div>
        <div className="bannerbox">
          <BannerSection />
          <ContestAlert />
        </div>

        <div>
          <NewsSection />
          <NewsSection />
          <NewsSection />
        </div>

        <div>
          <MoreNews />
        </div>

        <div>
          <Sponser />
        </div>
      </ContentWrapper>
      <div className="addvertise">
        <img src="https://skyexch.net/wp-content/uploads/2023/08/skyexch-ad-728x90-1.jpg" />{" "}
      </div>
    </div>
  );
};

export default Home;

import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import Header from "../../components/header/Header";
import OffCanvas from "../../components/offCanvas/OffCanvas";
import BannerSection from "./bannerSection/BannerSection";
import ContestAlert from "./bannerSection/ContestAlert";
import CarouselSection from "./carousel/CarouselSection";
import EntitySection from "./entity section/EntitySection";
import "./style.css";
const Home = () => {
  return (
    <div>
      <div className="home">
        <ContentWrapper>
          <Header />
          <OffCanvas />
        </ContentWrapper>
      </div>
      <ContentWrapper>
        <div className="tab-section">
          <EntitySection />
          <CarouselSection />
        </div>
        <div className="bannerbox">
          <BannerSection />
          <ContestAlert />
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Home;

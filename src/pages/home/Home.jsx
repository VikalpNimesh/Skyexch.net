import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import OffCanvas from "../../components/offCanvas/OffCanvas";
import BannerSection from "./bannerSection/BannerSection";
import ContestAlert from "./bannerSection/ContestAlert";
import CarouselSection from "./carousel/CarouselSection";
import EntitySection from "./entity section/EntitySection";
import MoreNews from "./moreNews/MoreNews";
import HeadlineBox from "./newSection/HeadlineBox";
import NewsBox from "./newSection/NewsBox";
import NewsSection from "./newSection/NewsSection";
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

        <div>
          <NewsSection/>
          <NewsSection/>
          <NewsSection/>
        </div>

        <div>
          <MoreNews/>
        </div>
        
      </ContentWrapper>
      <Footer/>
    </div>
  );
};

export default Home;

import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import Header from "../../components/header/Header";
import OffCanvas from "../../components/offCanvas/OffCanvas";
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
        <EntitySection />
    </div>
  );
};

export default Home;

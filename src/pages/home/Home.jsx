import { useState } from "react";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import Header from "../../components/header/Header";
import OffCanvas from "../../components/off canvas/OffCanvas";
import EntitySection from "./entity section/EntitySection";
import "./style.css";
const Home = () => {
  const [isCanvas, setisCanvas] = useState(false);
  return (
    <div>
      <div className="home">
        <ContentWrapper>
          <Header setisCanvas={setisCanvas} />
          {<OffCanvas />}
        </ContentWrapper>
      </div>
        <EntitySection />
    </div>
  );
};

export default Home;

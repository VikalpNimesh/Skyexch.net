import ContentWrapper from "./components/contentWrapper/ContentWrapper";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import OffCanvas from "./components/offCanvas/OffCanvas";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailedNews from "./pages/news/DetailedNews";
import "./App.css"
import SportMatch from "./pages/sport match/SportMatch";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <ContentWrapper>
          <Header />
          <OffCanvas />
        </ContentWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news-heading" element={<DetailedNews />} />
          <Route path="/sport-match" element={<SportMatch />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;

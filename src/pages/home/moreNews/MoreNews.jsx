
import HeadlineBox from "./HeadlineBox";
import "./style.css";
import MoreNewsSection from "./MoreNewsSection";

const MoreNews = () => {
  return (
    <>
      <div >
        <div className="more-news" style={{"display":"flex" , "gap":"20px"}}> 
          <MoreNewsSection />
          
          <HeadlineBox/>
        </div>
      </div>
    </>
  );
};

export default MoreNews;

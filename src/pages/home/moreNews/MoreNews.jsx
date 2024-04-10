import React from 'react'
import NewsSection from '../newSection/NewsSection'
import NewsBox from '../newSection/NewsBox'
import HeadlineBox from '../newSection/HeadlineBox'
import "./style.css"

const MoreNews = () => {
  return (
      <div>
          <div className="more-news">
          <div>
            <NewsSection>
            <div>
            <NewsBox  />
          <NewsBox  />
              <NewsBox />
              
              
            </div>
          <HeadlineBox />
          </NewsSection>
          {/* <button className='more-post-btn'>
                More Posts
              </button> */}
          </div>
          
        </div>
    </div>
  )
}

export default MoreNews
import React from 'react'
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'
import "./style.css"
import CarouselSection from '../home/carousel/CarouselSection'
import EntitySection from '../home/entity section/EntitySection'

const SportMatch = () => {
    return (
        <ContentWrapper>
            <div className="tab-section">
          <EntitySection />
          <CarouselSection />
        </div>
            
    <div className='sport-match-section'>SportMatch</div>
      </ContentWrapper>
  )
}

export default SportMatch
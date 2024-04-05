import ContentWrapper from "../../../components/contentWrapper/ContentWrapper"
import "./style.css"

const EntitySection = () => {
  return (
    <div className="entity_section">
          <ContentWrapper>
              <div className="entity_tabs">
                  <div className="entity_tab">Live</div>
                  <div className="entity_tab">Fixture</div>
                  <div className="entity_tab">Result</div>
              </div>
      </ContentWrapper>
    </div>
  )
}

export default EntitySection

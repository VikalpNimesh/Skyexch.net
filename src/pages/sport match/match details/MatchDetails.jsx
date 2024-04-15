import React from 'react';

import "./MatchDetails.css"
const MatchDetails = () => {
    return (
        <div className="scorecard-unflexed">
            <div className="entity_sport_cricket_widget box">
                <div className="widget-title" style={{ fontWeight: 'bold' }}>Match Details</div>
            </div>
            <div className="match-details">
                <div className="mtc-date">
                    <div className="entity-sm-8">
                        <strong>Date</strong>
                        <div>2024-04-11</div>
                    </div>
                    <div className="entity-sm-8">
                        <strong>Venue</strong>
                        <div className="venue">Shinde High School Ground, Pune</div>
                    </div>
                </div>
                <div className="mtc-venue">
                    <div className="entity-sm-8">
                        <strong>Umpires</strong>
                        <ul className="list1"></ul>
                    </div>
                    <div className="entity-sm-8">
                        <strong>TV Umpires</strong>
                        <ul className="list1"></ul>
                    </div>
                    <div className="entity-sm-8">
                        <strong>Match Referee</strong>
                        <ul className="list1"></ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MatchDetails;

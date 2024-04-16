import React from "react";
import "./Comentary.css";

const Comentary = () => {
  return (
    <>
      <div className="innings-commentry-box">
        <div className="inning-heading">
          <div className="taem-logo-name-box">
            <span className="team-logo">
              <img src="https://images.entitysport.com/assets/uploads/2024/04/Ashtapailu-Sports.png" />
            </span>
            <span className="inning-name">
              <span className="hide-mobile">Ashtapailu Sports Inning</span>
              {/* <span className="hide-desktop">APS Inning</span> */}
            </span>
          </div>
          <div className="scores_full ">150/8 (20 ov)</div>
        </div>
      </div>
      <div className="inning-commentary-content">
        <div className="inning-run-filters">
          <div className="filter filter-Highlights">
            <label>
              <input
                className="filter-input"
                type="radio"
                name="filter[Highlights]"
                value="all"
              />
              <br />
              All
            </label>
            <label>
              <input
                className="filter-input"
                type="radio"
                name="filter[Highlights]"
                value="run4"
              />
              <br />
              Fours
            </label>
            <label>
              <input
                className="filter-input"
                type="radio"
                name="filter[Highlights]"
                value="run6"
              />
              <br />
              Sixes
            </label>
            <label>
              <input
                className="filter-input"
                type="radio"
                name="filter[Highlights]"
                value="wicket"
              />
              <br />
              Wicket
            </label>
          </div>
        </div>
        <div className="select-box">
          <select className="filter-Batsman" name="filter[Batsman]">
            <option value="all">Any Batsman</option>
            <option value="bat101172">Hamdan Tahir</option>
            <option value="bat138211">Wajid Hussain Khan</option>
            <option value="bat100608">Junaid Khan</option>
            <option value="bat126388">Mayank Rajesh Kumar</option>
            <option value="bat112834">Rahul Chopra</option>
            <option value="bat104691">Israr Ahmed</option>
            <option value="bat101181">Sapandeep Singh-I</option>
            <option value="bat113277">Shahbaz Ahmed</option>
            <option value="bat101182">Saqib Manshad</option>
          </select>
          <select
            className="filter-Bowler"
            name="filter[Bowler]"
          >
            <option value="all">Any Bowler</option>
            <option value="bowl114740">Shanib Muhammad</option>
            <option value="bowl137704">Muhammed Fayis</option>
            <option value="bowl120809">Mazhar Hussain</option>
            <option value="bowl114737">Mohammed Ajmal </option>
            <option value="bowl119063">Abdul Safer</option>
            <option value="bowl101193">Gopakumar Gopalakrishnan</option>
            <option value="bowl114741">Rizwan KS</option>
          </select>
        </div>
        <div className="match-commentry-box">
        <div className="comment comment-ball">
          <div className="commentary-left">
            <div className="score ">4</div>
            <div className="ovb">18.5</div>
          </div>
          <div className="col-mid"></div>
          <div className="text">Ramakrishna Ghosh to Umar Shah, Four,</div>
        </div>
        <div className="comment comment-ball">
          <div className="commentary-left">
            <div className="floatleft score score-4">4</div>
            <div className="ovb">18.5</div>
          </div>
          <div className="col-mid"></div>
          <div className="text">Ramakrishna Ghosh to Umar Shah, Four,</div>
        </div>
        <div className="comment comment-ball">
          <div className="commentary-left">
            <div className="score ">4</div>
            <div className="ovb">18.5</div>
          </div>
          <div className="col-mid"></div>
          <div className="text">Ramakrishna Ghosh to Umar Shah, Four,</div>
        </div>
        <div className="comment comment-ball">
          <div className="commentary-left">
            <div className="floatleft score score-4">4</div>
            <div className="ovb">18.5</div>
          </div>
          <div className="col-mid"></div>
          <div className="text">Ramakrishna Ghosh to Umar Shah, Four,</div>
        </div>
        <div className="comment comment-ball comment-bg">
          <div className="row-ovr">
            <div className="col-xs-12">
              <div className="endover">End of over 18 (3 runs)</div>
              <div className="batsman">Atharva Dakway 0 (1)</div>
              <div className="batsman">Atish Kumbhar 43 (27)</div>
            </div>
            <div className="col-mid"></div>
            <div className="col-xs-12">
              <div className="endover">
                <img src="https://images.entitysport.com/assets/uploads/2024/04/Punit-Balan-Group.png" />
                Punit Balan Group 163/7
              </div>
              <div className="bowler">Piyush Salvi 4-0-28-1</div>
              <div className="bowler">Ramakrishna Ghosh 3-0-30-1</div>
            </div>
          </div>
        </div>
        <div className="comment comment-ball">
          <div className="commentary-left">
            <div className="score ">4</div>
            <div className="ovb">18.5</div>
          </div>
          <div className="col-mid"></div>
          <div className="text">Ramakrishna Ghosh to Umar Shah, Four,</div>
        </div>
        <div className="comment comment-ball">
          <div className="commentary-left">
            <div className="floatleft score score-4">4</div>
            <div className="ovb">18.5</div>
          </div>
          <div className="col-mid"></div>
          <div className="text">Ramakrishna Ghosh to Umar Shah, Four,</div>
        </div>
        <div className="comment comment-ball">
          <div className="commentary-left">
            <div className="score ">4</div>
            <div className="ovb">18.5</div>
          </div>
          <div className="col-mid"></div>
          <div className="text">Ramakrishna Ghosh to Umar Shah, Four,</div>
        </div>
        <div className="comment comment-ball">
          <div className="commentary-left">
            <div className="floatleft score score-4">4</div>
            <div className="ovb">18.5</div>
          </div>
          <div className="col-mid"></div>
          <div className="text">Ramakrishna Ghosh to Umar Shah, Four,</div>
        </div>
        <div className="comment comment-ball comment-bg">
          <div className="row-ovr">
            <div className="col-xs-12">
              <div className="endover">End of over 18 (3 runs)</div>
              <div className="batsman">Atharva Dakway 0 (1)</div>
              <div className="batsman">Atish Kumbhar 43 (27)</div>
            </div>
            <div className="col-mid"></div>
            <div className="col-xs-12">
              <div className="endover">
                <img src="https://images.entitysport.com/assets/uploads/2024/04/Punit-Balan-Group.png" />
                Punit Balan Group 163/7
              </div>
              <div className="bowler">Piyush Salvi 4-0-28-1</div>
              <div className="bowler">Ramakrishna Ghosh 3-0-30-1</div>
            </div>
          </div>
        </div>
      </div>
      </div>
    
    </>
  );
};

export default Comentary;

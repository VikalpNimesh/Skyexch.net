import React from "react";
import "./BattingTable.css";

const BatsmanRow = ({
  player,
  howOut,
  runs,
  balls,
  fours,
  sixes,
  strikeRate,
}) => {
  return (
    <tr className="row-batsman">
      <td className="col-player">{player}</td>
      {/* <td className="col-info how_out hide-mobile">{howOut}</td> */}
      <td>{""}</td>
      <td className="col-runs">{runs}</td>
      <td className="col-balls">{balls}</td>
      <td className="col-fours">{fours}</td>
      <td className="col-sixes">{sixes}</td>
      <td className="col-sr">{strikeRate}</td>
    </tr>
  );
};

const BatsmanFOWRow = ({ howOut }) => {
  return (
    <tr className="row-batsman-fow hide-desktop">
      <td colSpan="6">
        <div className="how_out">{howOut}</div>
      </td>
      <td>{""}</td>
    </tr>
  );
};
const ExtraRuns = () => {
  return (
    <>
      <tr className="_row">
        <td>Extra</td>
        <td className="textright" colspan="6">
          8 (b 0, w 7, nb 0, lb 1)
        </td>
      </tr>
      <tr className="_row">
        <td>Total</td>
        <td className="textright" colspan="6">
          150/8 (20)
        </td>
      </tr>
      <tr className="_row">
        <td>Yet To Bat</td>
        <td className="textright" colspan="6">
          <a >A Shukla</a>
        </td>
      </tr>
    </>
  );
};

const BattingTable = () => {
  return (
    <table className="battings table1 mb30">
      <tbody>
        <tr className="header1">
          <th className="col-player">Batsmen</th>
          <th className="col-info how_out hide-mobile"></th>
          <th className="col-runs">R</th>
          <th className="col-balls">B</th>
          <th className="col-fours">4S</th>
          <th className="col-sixes">6S</th>
          <th className="col-sr">SR</th>
        </tr>
        <BatsmanRow
          player="Yash Jagdale (C)"
          howOut="c A Jadhav b P Salvi"
          runs="21"
          balls="13"
          fours="2"
          sixes="1"
          strikeRate="161.54"
        />
        <BatsmanFOWRow howOut="c A Jadhav b P Salvi" />
        <BatsmanRow
          player="Yash Jagdale (C)"
          howOut="c A Jadhav b P Salvi"
          runs="21"
          balls="13"
          fours="2"
          sixes="1"
          strikeRate="161.54"
        />
        <BatsmanFOWRow howOut="c A Jadhav b P Salvi" />
        <BatsmanRow
          player="Yash Jagdale (C)"
          howOut="c A Jadhav b P Salvi"
          runs="21"
          balls="13"
          fours="2"
          sixes="1"
          strikeRate="161.54"
        />
        <BatsmanFOWRow howOut="c A Jadhav b P Salvi" />
        <BatsmanRow
          player="Yash Jagdale (C)"
          howOut="c A Jadhav b P Salvi"
          runs="21"
          balls="13"
          fours="2"
          sixes="1"
          strikeRate="161.54"
        />
        <BatsmanFOWRow howOut="c A Jadhav b P Salvi" />
        <ExtraRuns />
        {/* Add more BatsmanRow and BatsmanFOWRow components for other players */}
        {/* Add Extra and Total rows */}
        {/* Add Yet To Bat row */}
      </tbody>
    </table>
  );
};

export default BattingTable;

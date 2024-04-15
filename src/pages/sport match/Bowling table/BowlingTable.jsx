import React from 'react';

const BowlingTableRow = ({ player, overs, maidens, runs, wickets, econ }) => {
    return (
        <tr className="_row">
            <td className="col-player">{player}</td>
            <td className="col-overs">{overs}</td>
            <td className="col-maidens">{maidens}</td>
            <td className="col-runs">{runs}</td>
            <td className="col-wickets">{wickets}</td>
            <td className="col-econ">{econ}</td>
        </tr>
    );
};

const BowlingTable = () => {
    return (
        <table className="bowlings table1">
            <tbody>
                <tr className="header1">
                    <th className="col-player">BOWLING</th>
                    <th className="col-overs">O</th>
                    <th className="col-maidens">M</th>
                    <th className="col-runs">R</th>
                    <th className="col-wickets">W</th>
                    <th className="col-econ">ECON</th>
                </tr>
                <BowlingTableRow player="Piyush Salvi" overs="4" maidens="1" runs="23" wickets="1" econ="5.75" />
                <BowlingTableRow player="Sachin Bhosale" overs="4" maidens="0" runs="36" wickets="1" econ="9.00" />
                <BowlingTableRow player="Sohan Jamale" overs="4" maidens="0" runs="30" wickets="4" econ="7.50" />
                <BowlingTableRow player="Neel Gandhi" overs="2" maidens="0" runs="19" wickets="0" econ="9.50" />
                <BowlingTableRow player="Roshan Waghsare" overs="3" maidens="0" runs="22" wickets="0" econ="7.33" />
                <BowlingTableRow player="Rohan Damle" overs="3" maidens="0" runs="19" wickets="2" econ="6.33" />
                {/* Add more BowlingTableRow components for other bowlers */}
            </tbody>
        </table>
    );
};

export default BowlingTable;

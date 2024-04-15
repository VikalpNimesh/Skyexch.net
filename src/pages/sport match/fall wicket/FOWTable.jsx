import React from 'react';

const FOWTableRow = ({ player, fow, over }) => {
    return (
        <tr className="_row">
            <td className="col-player">{player}</td>
            <td className="col-overs"><b>{fow}</b></td>
            <td className="col-econ"><b>{over}</b></td>
        </tr>
    );
};

const FOWTable = () => {
    return (
        <div className="fows">
            <table className="bowlings table1">
                <tbody>
                    <tr className="header1">
                        <th className="col-player">Fall Of Wickets</th>
                        <th className="col-overs">FOW</th>
                        <th className="col-econ">Over</th>
                    </tr>
                    <FOWTableRow player="Y Jagdale" fow="1-23" over="2.3" />
                    <FOWTableRow player="S Hardikar" fow="2-34" over="4.6" />
                    <FOWTableRow player="S Autade" fow="3-67" over="8.5" />
                    <FOWTableRow player="R Karanjkar" fow="4-78" over="10.5" />
                    <FOWTableRow player="A Thenge" fow="5-97" over="13.1" />
                    <FOWTableRow player="S Abhang" fow="6-110" over="13.5" />
                    <FOWTableRow player="S Desai" fow="7-120" over="15.6" />
                    <FOWTableRow player="A Rathod" fow="8-124" over="17.1" />
                    {/* Add more FOWTableRow components for other fall of wickets */}
                </tbody>
            </table>
        </div>
    );
};

export default FOWTable;

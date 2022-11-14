import React from 'react';
import StatusItem from '../components/StatusItem';

function Status() {
    const outerStyle ={
        minHeight: "40vh"
    }

    const cardStyle = {
        width: "60%"
    }

    return (
        <div className="py-4" style={outerStyle}>
            <div className="card mx-auto my-4" style={cardStyle}>
            <div className="card-header text-center">
                <h4 className="font-weight-bold">Tidepool Server Status</h4>
            </div>
            <ul className="list-group list-group-flush" style={{width: "100%"}}>
                <StatusItem name={"Collection Server"} endpoint={"https://api.tidepool.finance/v1/stats/server"}/>
                <StatusItem name={"Storage Server"} endpoint={"https://api.tidepool.finance/v1/stats/database"}/>
                <StatusItem name={"Data API"} endpoint={"https://api.tidepool.finance/v1/"}/>
                <StatusItem name={"tidepool.finance"} endpoint={"https://tidepool.finance/"}/>

            </ul>
            </div>
        </div>
    );
}

export default Status;
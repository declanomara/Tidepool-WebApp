import React, { useState, useEffect } from 'react';
import { loadAggregateData } from "../util/content";

function Dashboard() {
    const [data, setData] = useState([]);
    useEffect(() => {
        loadAggregateData().then((data) => {
            console.log(data);
            setData(data);
        });
        }, []);

    return (
        <div className="m-4">
            <h3 className="h3">Aggregate Data: </h3>
        </div>
    );
}

export default Dashboard;
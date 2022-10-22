import React, { useState, useEffect } from 'react';
import DataIntakeInfo from '../components/DataIntakeCard';
import DataVizCard from '../components/DataVizCard';
import { loadAggregateData } from "../util/content";

function Dashboard() {
    const [data, setData] = useState([]);

    useEffect(() => {
        loadAggregateData().then((data) => {
            setData(data);
        });
        }, []);

    return (
        <div className="container-fluid">
            <div className="row mt-2">
                <div className="col-xs-12 col-lg-9">
                    <div className="row ml-1 mb-2">
                        <DataVizCard />
                    </div>
                </div>
                <div className="col-xs-12 col-lg-3">
                    <DataIntakeInfo data={data} />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
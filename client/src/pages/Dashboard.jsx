import React, { useState, useEffect } from 'react';
import DataIntakeCard from '../components/DataIntakeCard';
import DataVizCard from '../components/DataVizCard';
import { getCurrencyCounts, getCurrencyRates } from "../util/content";

function Dashboard() {
    const [counts, setCounts] = useState([]);
    const [rates, setRates] = useState([]);


    useEffect(() => {
        getCurrencyCounts().then((data) => {
            setCounts(data);
        });

        getCurrencyRates().then((data) => {
            setRates(data);
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
                    <DataIntakeCard counts={counts} rates={rates} />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
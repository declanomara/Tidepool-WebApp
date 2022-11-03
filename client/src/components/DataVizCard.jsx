import React from 'react';
import Chart from 'chart.js/auto';
import { Scatter } from "react-chartjs-2";


function DataVizCard () {
    var x = [];
    var y = [];
    var raw_data = []

    var _ = Chart;
    if(_ === ''){console.log("just for linter")}

    for(var i = 0; i < 100; i++) {
        x.push(i);
        y.push(i*i);
        raw_data.push({x: i, y: i*i})
    }

    const data = {
        datasets: [
            {
                label: 'Financial Data',
                data: raw_data,
                backgroundColor: 'rgba(255, 99, 132, 1)'
            }
        ]
    }

    return (
        <div className="card" style={{flex: "0 0 100%"}}>
            <div className="card-body">
                <h5 className="card-title">Financial Data</h5>
                <Scatter data={data} />
            </div>
        </div>
    );
}

export default DataVizCard;

import React, { useState, useEffect, useCallback} from 'react';
import DataListItem from './DataListItem';

function DataIntakeInfo({counts, rates}) {
    const [currencyInfos, setCurrencyInfos] = useState();
    const [selectedDataType, setSelectedDataType] = useState("Count");


    console.log(rates);
    const setDisplayType = useCallback((dataType) => {
        const currencies = [];

        if (dataType === "count") {
            for (const [key, value] of Object.entries(counts)) {
                const display = Number(value).toLocaleString(undefined, {minimumFractionDigits: 0});
                currencies.push(<DataListItem key={key} k={key} value={display} />);
            }
        }

        if (dataType === "rate") {
            for (const [key, value] of Object.entries(rates)) {
                const display = Number(value['rate']).toLocaleString(undefined, {minimumFractionDigits: 2});
                currencies.push(<DataListItem key={key} k={key} value={display} />);
            }
        }

        // for(var k in counts) {
        //     var value;

        //     if(dataType === "count") {
        //         value = Number(counts[k]).toLocaleString(undefined, {minimumFractionDigits: 0});
        //     }

        //     if(dataType === "data_rate") {
        //         value = Number(rates[k]["rate"]).toLocaleString(undefined, {minimumFractionDigits: 2});
        //     }
            
        //     currencies.push(<DataListItem key={k} k={k} value={value} />);
        // }
        
        currencies.sort((a, b) => { return a.value > b.value ? 1 : -1});

        setCurrencyInfos(currencies);
    }, [counts, rates]);

    useEffect(() => {
        setDisplayType("count");
    }, [setDisplayType]);

    return (
        <div className="card  text-center">
            <div className="card-body">
                <h5 className="card-title font-weight-bold"> Live Currency Stats </h5>
                <div className="dropdown">
                    <span className="font-weight-normal mx-2">Select data type:</span>
                    <button className="btn btn-sm btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        { selectedDataType }
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <button className="dropdown-item" onClick={() => {setDisplayType("count"); setSelectedDataType("Count");}}>Count</button>
                        <button className="dropdown-item" onClick={() => {setDisplayType("data_rate"); setSelectedDataType("Data Rate");}}>Data Rate</button>
                    </div>
                </div>
            </div>
            <ul className="list-group list-group-flush">
                { currencyInfos || "Loading..." }
            </ul>
        </div>
    )

}

export default DataIntakeInfo;
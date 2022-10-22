import React, { useState, useEffect, useCallback} from 'react';
import DataListItem from './DataListItem';

function DataIntakeInfo({data}) {
    const [currencyInfos, setCurrencyInfos] = useState();
    const [selectedDataType, setSelectedDataType] = useState("Count");

    const setDisplayType = useCallback((dataType) => {
        const currencies = [];

        for(var k in data) {
            var fractionDigits;
            if(dataType === "count") {
                fractionDigits = 0;
            }

            if(dataType === "data_rate") {
                fractionDigits = 2;
            }

            var value = Number(data[k][dataType]);
            var displayValue = value.toLocaleString(undefined, {minimumFractionDigits: fractionDigits});
            
            currencies.push(<DataListItem key={k} k={k} value={value} displayValue={displayValue} />);
        }
        
        currencies.sort((a, b) => { return a.value > b.value ? 1 : -1});

        setCurrencyInfos(currencies);
    }, [data]);

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
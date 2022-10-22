import React from "react";

function DataListItem({k, value, displayValue}) {

    return (
        <li key={k} className="list-group-item"><span className="font-weight-normal">{k}:</span> <span className="font-weight-light text-muted">{displayValue}</span> </li>
    )
}

export default DataListItem;
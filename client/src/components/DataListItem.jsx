import React from "react";

function DataListItem({k, value}) {

    return (
        <li key={k} className="list-group-item"><span className="font-weight-normal">{k}:</span> <span className="font-weight-light text-muted">{value}</span> </li>
    )
}

export default DataListItem;
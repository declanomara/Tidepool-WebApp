import React from 'react';

function BiColumn ({left, right}) {
    return (
        <div className="row" style={{"height": "100%"}}>
            <div className="col-md-6 my-4">
                {left}
            </div>
            <div className="col-md-6 my-4">
                {right}
            </div>
        </div>
    )
}

export default BiColumn;
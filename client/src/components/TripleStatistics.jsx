import React from 'react';

function TripleStatistics() {
    const style = {
        display: 'flex',
        'align-items': 'center', /* Vertical center alignment */
        'justify-content': 'center' /* Horizontal center alignment */
    }

    return (
        <div className="container text-center" style={style}>
            <div className="row" style={style}>
                <div className="col-4">
                    <h2 className="font-weight-bold">50+ GB</h2>
                    <span className="font-weight-light">Total data stored.</span>
                </div>
                <div className="col-4">
                    <h2 className="font-weight-bold">5 yrs.</h2>
                    <span className="font-weight-light">Consistent profit.</span>
                </div>
                <div className="col-4">
                    <h2 className="font-weight-bold">72</h2>
                    <span className="font-weight-light">Data sources.</span>
                </div>
            </div>
        </div>
    )
}

export default TripleStatistics;
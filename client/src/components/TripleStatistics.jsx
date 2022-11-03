import React from 'react';

function TripleStatistics({className, style}) {
    if(typeof style === 'undefined') {
        style = {
            "width": "85%"
        };
    }

    const outerStyle = {
        'height': '100%',
        'width': '100%',
        'minHeight': '50vh',
        'display': 'flex',
        'flexDirection': 'column',
        'align-items': 'center', /* Vertical center alignment */
        'justify-content': 'center' /* Horizontal center alignment */
    }

    const innerStyle = {
        'height': '100%',
        'width': '100%',
        // 'minHeight': '50vh',
        'display': 'flex',
        'align-items': 'center', /* Vertical center alignment */
        'justify-content': 'center' /* Horizontal center alignment */
    }

    if(typeof className === 'undefined') {
        className = "";
    }

    return (
        <div style={outerStyle}>
            {/* <h2 className="text-white font-weight-bold mb-4">Statistics</h2> */}
            <div className="container text-center text-white" style={innerStyle}>
                <div className="row" style={style}>
                    <div className="col-4">
                        <h2 className="font-weight-bold">500M+</h2>
                        <span className="font-weight-light">Total data points.</span>
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
        </div>
    )
}

export default TripleStatistics;
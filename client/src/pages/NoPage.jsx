import React from 'react';

function NoPage() {
    const divStyle ={
        "height": "90vh",
        "display": "flex",
        "flex-direction": "column",
        "align-items": "center",
        "justify-content": "center"

    }

    const imgStyle = {
        "height": "50vh"
    }

    return (
        <div className="text-white" style={divStyle}>
            <h1>Error 404!</h1>
            <h3>Page not found.</h3>
            <img src="https://tidepool-cdn.s3.amazonaws.com/error404.svg" alt="Error 404 Cartoon" style={imgStyle}></img>
            <h5>Our astronomer is diligently searching for it...</h5>
        </div>
    );
}

export default NoPage;
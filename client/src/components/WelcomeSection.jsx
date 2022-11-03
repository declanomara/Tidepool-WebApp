import React from "react";
import Section from "./Section";

function WelcomeSection () {
    const messageStyle ={
        "position": "relative",
        "top": "7vh"
    }

    const headerStyle = {
        "border-bottom": "1px solid white",
        "padding": "0 0 1px",
        "width": "fit-content",
        "maxWidth": "95vw"
    }

    const message = `Tidepool's modern approach to investing utilizes the same advanced data analysis techniques as hedge funds
                    to provide impressive returns, without the enormous price tag or secrecy of traditional wealth management services. `

    const graphicStyle = {
        "position": "relative",
        "width": "140%",
        "float": "right",
        "top": "-6vh",
        "left": "-8vw",
        "z-index": 9999
    }

    const outerStyle = {
        "height": "100%",
        "maxHeight": "0",
    }

    const c = (
        <div className="row" style={outerStyle}>
            <div className="col-md-8 d-none d-md-block">
                <div className="text-white font-weight-light" style={{"height": "100%"}}>
                    <h2 className="font-weight-light mx-auto mt-4 pt-4" style={headerStyle}>Invest like a <span className="font-weight-bold"> hedge fund </span> manager.</h2>
                    <p className="mx-auto" style={{"width": "65%"}}>{message}</p>
                </div>
            </div>
            <div className="col-md-4 d-none d-md-block">
                <img src="https://tidepool-cdn.s3.amazonaws.com/data-graphic.svg" alt="Computer graphic" style={graphicStyle}></img>
            </div>

            <div className="col text-white text-center font-weight-light d-md-none" style={messageStyle}>
                <h2 className="font-weight-light mx-auto" style={headerStyle}>Invest like a <span className="font-weight-bold">hedge fund</span> manager.</h2>
                <p className="mx-4" style={{}}>{message}</p>
            </div>

        </div>
    )

    return (
        <Section content={c}/>
    );
}

export default WelcomeSection;
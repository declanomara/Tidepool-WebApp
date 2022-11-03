import React from "react";


function HeadshotBio ({img, name, role, other, className}) {
    const bioStyle = {
        "height": "100%",
        "width": "100%",
        "display": "flex",
        "flex-direction": "column",
        "align-items": "center",
        "justify-content": "center"
    }

    if(img === "") {
        let i = Math.floor((Math.random()*5)+2)
        img = "https://tidepool-cdn.s3.amazonaws.com/people/person" + i + ".svg";
    };
    
    const outerClass = className + " col-md text-white mt-3";
    console.log(outerClass);

    return (
        <div className={outerClass} style={bioStyle}>
                <img className="rounded-circle" src={img} alt="Headshot" style={{"width": "50%"}}></img>
                <h5 className="font-weight-bold mt-1">{name}</h5>
                <span className="text-light">{role}</span>
                <span className="font-weight-light">{other}</span>
        </div>
    )
}

export default HeadshotBio;
import React from "react";
import HeadshotBio from "./HeadshotBio";


function TeamSection () {
    const style = {
        "height": "100%",
        "width": "100%",
        "display": "flex",
        "flex-direction": "column",
        "align-items": "center",
        "justify-content": "center"
    }

    return (
        <div class="row w-100" style={{"height": "65%"}}>
            <div className="row w-100">
                <h2 className="w-75 mx-auto text-white font-weight-bold mt-4">Meet our talented team.</h2>
            </div>
            <div style={style}>
                <div className="row mx-auto d-none d-md-flex" style={{"width": "90%"}}>
                    <HeadshotBio name="Declan O'Mara" role="CEO / Founder" other="" img="https://tidepool-cdn.s3.amazonaws.com/people/person1.svg"/>
                    <HeadshotBio name="We're hiring!" role="Senior Software Engineer" other="" img="https://tidepool-cdn.s3.amazonaws.com/people/person2.svg"/>
                    <HeadshotBio name="We're hiring!" role="Senior Analyst" other="" img="https://tidepool-cdn.s3.amazonaws.com/people/person4.svg"/>
                </div>

                <div className="d-md-none">
                    <HeadshotBio name="Declan O'Mara" role="CEO / Founder" other="" img="https://tidepool-cdn.s3.amazonaws.com/people/person1.svg"/>
                </div>
            </div>
        </div>
    )
}

export default TeamSection;
import React from "react";
import BiColumn from "./BiColumn";
import Product from "./Product";


function ProductSection () {
    const leftDescription = "Applications open to all. Provides a diversified portfolio of currency assets managed automatically by innovative algorithms.";
    const leftImage = "https://tidepool-cdn.s3.amazonaws.com/public-fund-logo.svg";

    const left = (
        <Product title="Public Fund" description={leftDescription} image={leftImage}/>
    );

    const rightDescription = "This highly exclusive fund is reserved for our most loyal investors. Applications are not available, loyal investors in our public fund will occasionally be invited to join.";
    const rightImage = "https://tidepool-cdn.s3.amazonaws.com/premiere-fund-logo.svg";

    const right = (
        <Product title="Premiere Fund" description={rightDescription} image={rightImage}/>
    );

    return (
        <div style={{"height": "100%"}}>
            <h2 className="font-weight-bold text-white text-center pt-4">Explore our Investment Solutions.</h2>
            <BiColumn left={left} right={right}/>
        </div>
    )
}

export default ProductSection;
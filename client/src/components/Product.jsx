import React from "react";


function Product({title, description, image}) {
    const style = {
        "backgroundColor": "#006666",
        // "minHeight": "33vh"
    };

    const logoStyle = {
        "height": "10vh",
    }

    return (
        <div className="text-center">
            <div className="card border-light mx-auto w-75" style={style}>
                <img class="card-img-top my-4 text-center" src={image} alt="Product Logo" style={logoStyle}/>
                <div className="card-body">
                    <h4 className="card-title text-white">{title}</h4>
                    <p className="card-text text-white font-weight-light" style={{"minHeight": "10vh"}}>{description}</p>
                    <a href="/products" className="btn btn-light mx-auto d-block mb-4" style={{"width": "fit-contents"}}>Learn More</a>
                </div>
            </div>
        </div>
    )
}

export default Product;
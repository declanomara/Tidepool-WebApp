import React from "react";
import { Link } from "react-router-dom";

function TransparentNavbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark w-75 mx-auto p-4">
        
        <Link className="navbar-brand mx-auto px-4" to="/"><img src="https://tidepool-cdn.s3.amazonaws.com/logo.svg" alt="Tidepool Logo" style={{"height": "8vh"}}></img> Tidepool Finance</Link>
        <button className="navbar-toggler btn float-right mx-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{"border": "none", "padding": 0, "background": "none"}}>
            <i className="fa-solid fa-bars text-white"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link text-white font-weight-light pl-4 float-right" to="/#about">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white font-weight-light pl-4 float-right" to="/#research">Research</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white font-weight-light pl-4 float-right" to="/#products">Products</Link>
                </li>
            </ul>
        </div>
    </nav>
  );
}

export default TransparentNavbar;
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top">
      <Link className="navbar-brand ms-3" to="/">Tidepool Finance</Link>

      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link" href="/#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">Solutions</a>
        </li>
      </ul>

      <div className="navbar-nav ml-auto">
        <Link className="navbar-item border border-light rounded m-1 text-light" to="/dashboard"><span className="mx-1">Launch Dashboard</span></Link>
      </div>
    </nav>
  );
}

export default Navbar;
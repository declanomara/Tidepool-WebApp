import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top">
      <Link class="navbar-brand ms-3" to="/">Journal</Link>

      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="#about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Purchase</a>
        </li>
      </ul>

      <div class="navbar-nav ml-auto">
        <Link class="navbar-item border border-light rounded" to="/journal"><a class="m-1 text-light">Launch Journal App! </a></Link>
      </div>
    </nav>
  );
}

export default Navbar;
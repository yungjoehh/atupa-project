import React from 'react';
import { BrowserRouter as Router , Switch , Route , Link } from "react-router-dom";

import brand from '../assets/img/logo_atupa.png'
import '../mycss/nav.css'

function Nav(props) {
    return (
      <div className="App">
      <nav className="navbar navbar-expand-lg bg-light navbar-light" id="myNav">
        <div className="container">
        <a className="navbar-brand" href="#"><img src={brand}/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <a  className="nav-link">Home<span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <Link to={'/programs'} className="nav-link">Programs</Link>
        </li>
        <li className="nav-item">
          <Link to={'/program/javascript'} className="nav-link">Contacts</Link>
          {/* <a className="nav-link">FAQ</a> */}
        </li>
        <li className="nav-item">
          <a className="nav-link">Login</a>
        </li>
      </ul>
    </div>
        </div>
      </nav>
    </div>
    );
}
  
export default Nav;
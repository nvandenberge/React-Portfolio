import React from "react";
import './Header.css';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <span className="navbar-brand">Nick Vandenberge</span>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarText"
          >
            <ul className="nav navbar-nav float-right">
            <li className="nav-item">
                <Link to='/about' className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/portfolio' className="nav-link">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/contact' className="nav-link">
                  Conatct
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;

import React from "react";
import './Header.css';


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
                <a className="nav-link" href="index.html">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="portfolio.html">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;

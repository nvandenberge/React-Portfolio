import React from "react";
import './Header.css';


const Header = () => {
  return (
    <div>
      <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <span class="navbar-brand">Nick Vandenberge</span>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarText"
          >
            <ul class="nav navbar-nav float-right">
              <li class="nav-item">
                <a class="nav-link" href="index.html">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="portfolio.html">
                  Portfolio
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact.html">
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

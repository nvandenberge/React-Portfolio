import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="py-3 bg-dark">
      <div className="container text-center">
        <i className="bi bi-telephone"> 443.878.6517</i> |
        <i className="bi bi-envelope"> nvandenberge14@gmail.com</i> |&nbsp;
        <i className="bi bi-file-arrow-down">
        {/* Bug where it is downloading blank file, will fix and add option to view PDF in browser window */}
          <a download href="src/assets/files/Nick-Vandenberge-WebDev-Resume.pdf">
            Download Resume
          </a>
        </i>

        <br />
        <small>&copy; Copyright 2021 Nick Vandenberge</small>
      </div>
    </footer>
  );
};

export default Footer;

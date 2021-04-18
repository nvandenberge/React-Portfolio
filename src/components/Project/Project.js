import React from "react";
import "./Project.css";

const Project = ({ thumbnail, altText, deployedLink, sourceCode }) => {
  return (
      <div className="col-lg-6 mb-4 color">
        <a href={deployedLink} target="_blank" rel="noreferrer">
          <img
            src={thumbnail}
            alt={altText}
            height="350"
            width="350"
          />
        </a>
        <div className="appLinks">
          <a
            href={sourceCode}
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Source Code
          </a>
          <a
            href={deployedLink}
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Deployed Site
          </a>
        </div>
      </div>
  );
};

export default Project;

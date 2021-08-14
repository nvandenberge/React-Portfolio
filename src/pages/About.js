import React from "react";
import NickHeadshot from "../assets/images/ProfilePic.jpg";

const About = () => {
  return (
    <div>
      <main className="container mt-5 text-white">
        <div className="row">
          <section className="col-md-8">
            <div>
              <h1>About Me</h1>
            </div>
            <div className="content">
              <img
                src={NickHeadshot}
                height="200"
                alt="Headshot of Nick Vandenberge"
                className="rounded float-left"
                id="headshotImg"
              />
              My name is Nick&#8218; and I am a Software Engineer currently
              living in Baltimore&#8218; MD. I have a Bachelor of Science in
              Computer Information Systems from Stevenson University. While
              working as a Software Support Specialist I
              found myself with a growing interest in how the software was
              developed. In 2019 I started developing part&#8211;time for the
              same organization I was employed for by working on small bugs and
              features while maintaining my position as a Software Support
              Specialist. In 2021, after completing a 24-week full&#8211;stack
              bootcamp at Johns Hopkins University I have been working as a
              full&#8211;time Software Engineer. In my free time&#8218; I like
              to study development&#8218; exercise&#8218; cook&#8218; and play
              video games. For more information&#8218; check out my&nbsp;
              <a
                href="https://github.com/nvandenberge"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              &nbsp;and&nbsp;
              <a
                href="https://www.linkedin.com/in/nicholasvandenberge/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              &#33;
              <br />
              <br />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;

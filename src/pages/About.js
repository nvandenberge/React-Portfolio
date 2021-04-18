import React from "react";
import NickHeadshot from '../assets/images/ProfilePic.jpg'

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
              working as a Software Support Specialist between 2015&#8211;2019 I
              found myself with a growing interest in how the software was
              developed. I began self&#8211;studying web development in my spare
              time and decided to officially commit to it in 2018 when I took an
              8&#8211;week coding bootcamp in Baltimore. In 2019 I started
              developing part&#8211;time for the same organization I was
              employed for by working on small bugs and features while
              maintaining my position as a Software Support Specialist. In 2020
              I was promoted to full&#8211;time Software Engineer.
              <br />
              <br />
              While working as a Software Engineer I was provided with the
              opportunity to learn more about full&#8211;stack development by
              enrolling in a 24&#8211;week coding bootcamp at Johns Hopkins
              University to learn more about how back&#8211;end technologies
              interact with front&#8211;end. In my free time&#8218; I like to
              study full&#8211;stack development&#8218; exercise&#8218; and play
              video games with friends. I am very passionate about Web
              Development&#8218; and strive to better myself as a developer. For
              more information&#8218; check out my&nbsp;
              <a href="https://github.com/nvandenberge" target="_blank" rel="noreferrer">
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
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;

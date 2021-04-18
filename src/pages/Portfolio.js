import React from "react";
import Project from "../components/Project/Project";
import EmployeeDirectoryImage from "../assets/images/portfolio/react-directory.png";
import eatDaBurgerImage from "../assets/images/portfolio/eatDaBurger.png";
import gottaGoImage from "../assets/images/portfolio/gottaGO.png";
import javascriptQuizImage from "../assets/images/portfolio/JavascriptQuizApp.png";
import planDayImage from "../assets/images/portfolio/LetsPlanADayApp.png";
import weatherDashboardImage from "../assets/images/portfolio/WeatherDashboard.png";

const Portfolio = () => {
  return (
    <div className="portfolioContainer">
      <main className="container mt-5">
        <div className="row">
          <section className="col-md-9">
            <div className="page-header">
              <h1>Portfolio</h1>
            </div>
            <div className="content">
              <div className="row">
                <Project
                  thumbnail={EmployeeDirectoryImage}
                  altText={"React Employee Directory App"}
                  deployedLink={"https://nvandenberge.github.io/React-Employee-Directory/"}
                  sourceCode={"https://github.com/nvandenberge/React-Employee-Directory"}
                />
                <Project
                  thumbnail={gottaGoImage}
                  altText={"gottaGO App"}
                  deployedLink={"https://lit-reef-23500.herokuapp.com/"}
                  sourceCode={"https://github.com/nvandenberge/gottaGO"}
                />
              </div>
              <div className="row">
                <Project
                  thumbnail={eatDaBurgerImage}
                  altText={"eatDaBurger App"}
                  deployedLink={"https://secret-sands-70294.herokuapp.com/"}
                  sourceCode={"https://github.com/nvandenberge/Eat-Da-Burger"}
                />
                <Project
                  thumbnail={planDayImage}
                  altText={"Let's Plan a Day! App"}
                  deployedLink={"https://nvandenberge.github.io/LetsPlanADay/"}
                  sourceCode={"https://github.com/nvandenberge/LetsPlanADay"}
                />
              </div>
              <div className="row">
                <Project
                  thumbnail={javascriptQuizImage}
                  altText={"Javascript Quiz App"}
                  deployedLink={"https://nvandenberge.github.io/JavascriptQuizApp/"}
                  sourceCode={"https://github.com/nvandenberge/JavascriptQuizApp"}
                />
                <Project
                  thumbnail={weatherDashboardImage}
                  altText={"Weather Dashboard App"}
                  deployedLink={"https://nvandenberge.github.io/WeatherDashboard/"}
                  sourceCode={"https://github.com/nvandenberge/WeatherDashboard"}
                />
              </div>
            </div>
          </section>
        </div>
      </main>
      <br></br>
    </div>
  );
};

export default Portfolio;

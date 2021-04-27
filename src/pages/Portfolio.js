import React from "react";
import Project from "../components/Project/Project";
import EmployeeDirectoryImage from "../assets/images/portfolio/react-directory.png";
import eatDaBurgerImage from "../assets/images/portfolio/eatDaBurger.png";
import gottaGoImage from "../assets/images/portfolio/gottaGO.png";
import javascriptQuizImage from "../assets/images/portfolio/JavascriptQuizApp.png";
import planDayImage from "../assets/images/portfolio/LetsPlanADayApp.png";
import googleBooksSearch from "../assets/images/portfolio/Google-Books-Search-2.png";

const Portfolio = () => {
  return (
    <div className="portfolioContainer">
      <main className="container mt-5">
        <div className="row">
          <section className="col-md-9">
            <div>
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
                  altText={"Let's Plan a Day App"}
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
                  thumbnail={googleBooksSearch}
                  altText={"Google Books Search App"}
                  deployedLink={"https://evening-savannah-13786.herokuapp.com/#/"}
                  sourceCode={"https://github.com/nvandenberge/Google-Books-Search"}
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

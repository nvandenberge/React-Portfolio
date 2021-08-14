import React from "react";
import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import Wrapper from "./components/Wrapper/Wrapper";
import About from "./pages/About";
import Footer from "./components/Footer/Footer";
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Wrapper>
          <Switch>
          <Route exact path={["/", "/About"]} component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          </Switch>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

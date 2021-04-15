import React from 'react';
import './App.css';
import { HashRouter, Route } from "react-router-dom";
import Header from './components/Header/Header'
import Wrapper from './components/Wrapper/Wrapper';
import About from './pages/About';


function App() {
  return (
    <HashRouter basename='/'>
      <div>
        <Header />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          {/* <Route exact path="/portfolio" component={Portfolio} /> */}
          {/* <Route exact path="/contact" component={Contact} />  */}
        </Wrapper>
        {/* <Footer /> */}
      </div>
    </HashRouter>
  );
}

export default App;

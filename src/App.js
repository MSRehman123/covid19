import React from 'react';
import WorldCovid from './covid19/worldCovid';
import CovidHome from './covid19/covidHomePage';
import IndiaCovid from './covid19/indiaCovid';
import Prevent from './covid19/prevention/prevent';
import Header from './header/header';
import Footer from './footer/footer';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
      <Route path="/" exact><CovidHome/></Route>
      <Route path="/worldcovid"><WorldCovid/></Route>
      <Route path="/indiacovid"><IndiaCovid/></Route>
      <Route path="/prevention"><Prevent/></Route>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;

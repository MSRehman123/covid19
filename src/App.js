import React from "react";
import WorldCovid from "./covid19/worldCovid";
import CovidHome from "./covid19/covidHomePage";
import IndiaCovid from "./covid19/indiaCovid";
import Prevent from "./covid19/prevention/prevent";
import Header from "./header/header";
import Footer from "./footer/footer";
import PageNotFound from "./UI/pageNotFound";
import News from './news/news';
import Districtwise from './covid19/indiaDistricts.js/districtwise';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/worldcovid" component={WorldCovid} />
          <Route path="/indiacovid" component={IndiaCovid} />
          <Route path="/india/districts" component={Districtwise} />
          <Route path="/prevention" component={Prevent} />
          <Route path="/news" component={News} />
          <Route path="/" exact component={CovidHome} />
          <Route path="*" component={PageNotFound} />
          <Route path="/404" component={PageNotFound} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

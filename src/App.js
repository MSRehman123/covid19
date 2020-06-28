import React from "react";
import WorldCovid from "./covid19/worldCovid";
import CovidHome from "./covid19/covidHomePage";
import IndiaCovid from "./covid19/indiaCovid";
import Prevent from "./covid19/prevention/prevent";
import Header from "./header/header";
import Footer from "./footer/footer";
import PageNotFound from "./UI/pageNotFound";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/worldcovid">
            <WorldCovid />
          </Route>
          <Route path="/indiacovid">
            <IndiaCovid />
          </Route>
          <Route path="/prevention">
            <Prevent />
          </Route>
          <Route path="/" exact>
            <CovidHome />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

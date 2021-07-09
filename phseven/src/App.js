import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Landingmain from "./landingpage/landingmain";



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Landingmain}></Route>

          
        </Switch>
      </Router>
      <h3>helolo</h3>
    </div>
  );
}

export default App;

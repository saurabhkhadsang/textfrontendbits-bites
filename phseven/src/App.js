import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Landingmain from "./landingpage/landingmain";
import Doctorlogin from "./loginandsignup/doctorlogin.js";
import Doctorsignup from "./loginandsignup/doctorsignup.js";
import Aboutus from "./aboutus/about";

import Allprescription from "./patprescriptionpage/allprescription";
import Patpresciptionwithadd from "./patprescriptionpage/patpresciptionwithadd";
import Createprescription from "./createprescriptionpage/createprescription";




function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Landingmain}></Route>
          <Route exact path="/doctorlogin" component={Doctorlogin}></Route>
          <Route exact path="/doctorsignup" component={Doctorsignup}></Route>
          <Route exact path="/aboutus" component={Aboutus}></Route>
          <Route exact path="/patpresciption" component={Allprescription}></Route>
          <Route exact path="/createprescription" component={Createprescription}></Route>
          <Route exact path="/patpresciptionwithadd" component={Patpresciptionwithadd}></Route>
        

          
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;

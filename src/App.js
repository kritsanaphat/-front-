import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";

import Navbar from "./navbar";

import Main from './Page/main';
import Contact from './Page/contact';
import Typeofgame from './Page/typeofgame';
import Page1 from "./Page/question";
import Page2 from "./Page/question2";
import Page3 from './Page/question3';
import Result from './Page/result';
import Stat from './Page/stat';

export default function App()  {
  return (
    <div>
       <Router>
       <Navbar />
        <Switch>
          <Route exact path="/" component={Main} />

          <Route exact path ="/contact" component = {Contact} />

          <Route exact path ="/typeofgame" component = {Typeofgame} />
         
          <Route exact path="/page1" component={Page1} />

          <Route exact path="/page2" component={Page2} />

          <Route exact path="/page3" component={Page3} />

          <Route exact path="/result" component={Result} />

          <Route exact path="/stat" component={Stat} />

        </Switch>
        </Router>
    </div>
  );
}



import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import Projects from "./projects/Projects";
import About from "./About";
import Contact from "./Contact";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/work" component={Projects} />
      <Route path="/contact" component={Contact} />
    </Switch>
  );
};

export default Routes;

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Projects from "./Components/projects/Projects";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="container">
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/work" component={Projects} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Router>
        <Footer />
      </div>
    </div>
  );
};

export default App;

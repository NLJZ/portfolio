import React from "react";
import { HashRouter, BrowserRouter as Router } from "react-router-dom";

import Routes from "./Components/Routes";
import Navbar from "./Components/Navbar";

import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="container">
      <div className="App">
        <HashRouter basename="/">
          <Navbar />
          <Routes />
        </HashRouter>
        <Footer />
      </div>
    </div>
  );
};

export default App;

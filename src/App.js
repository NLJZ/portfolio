import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./Components/Routes";
import Navbar from "./Components/Navbar";

import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="container">
      <div className="App">
        <Router>
          <Navbar />
          <Routes />
        </Router>
        <Footer />
      </div>
    </div>
  );
};

export default App;

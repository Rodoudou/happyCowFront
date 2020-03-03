import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import Home from "./containers/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import Restaurant from "./containers/Restaurant";
library.add(faStar);

/* import axios from "axios" */

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/restaurant/:id">
          <Restaurant />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

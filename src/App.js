import React, { useState } from "react";
import Cookies from "js-cookie";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import Home from "./containers/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Restaurant from "./containers/Restaurant";
import SignUp from "./containers/SignUp";
import Login from "./containers/Login";
import "./App.css";
library.add(faStar);

function App() {
  const [token, setToken] = useState(Cookies.get("token") || null);
  const [username, setUsername] = useState(Cookies.get("username") || "");

  const onLogin = (token, username) => {
    setToken(token);
    setUsername(username);
    Cookies.set("token", token);
    Cookies.set("username", username);
  };
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
        <Route path="/log_in/">
          <Login onLogin={onLogin} />
        </Route>
        <Route path="/sign_up/">
          <SignUp onLogin={onLogin} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

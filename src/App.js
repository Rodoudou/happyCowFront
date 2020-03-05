import React, { useState, useEffect } from "react";
import axios from "axios";
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
  const [isLoading, setIsLoading] = useState(true);
  const [datas, setDatas] = useState({});

  const [token, setToken] = useState(Cookies.get("token") || null);
  const [username, setUsername] = useState(Cookies.get("username") || "");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://res.cloudinary.com/lereacteur-apollo/raw/upload/v1575242111/10w-full-stack/Scraping/restaurants.json`
        );
        /*         console.log("response.data dans App =>", response.data); */
        setDatas(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log("error.message =>", error.message);
      }
    };
    fetchData();
  }, []);

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
          <Home
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            datas={datas}
            setDatas={setDatas}
          />
        </Route>
        <Route path="/restaurant/:id">
          <Restaurant
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            datas={datas}
            setDatas={setDatas}
          />
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

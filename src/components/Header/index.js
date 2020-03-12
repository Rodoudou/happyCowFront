import React, { useState } from "react";
import Search from "../Search";
import { Link, useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import logo from "../../assets/img/logo.svg";
import imgBackground from "../../assets/img/headerImg.jpg";

import { ButtonToolbar, Button } from "react-bootstrap";
import "./Header.css";

export default function Header({ token, setToken, username }) {
  const [searchFocus, setSearchFocus] = useState(false);
  const history = useHistory();
  return (
    <div className="container">
      <div className="header">
        <div className="menu">
          <Link to="/">
            <img
              id="logo"
              src={logo}
              alt="logo"
              style={{ height: 48.95, width: 220 }}
            />
          </Link>
          <div className="liste">
            <Link
              style={{
                textDecoration: "none",
                color: "#666"
              }}
            >
              Restaurants & Stores
            </Link>
            <Link style={{ textDecoration: "none", color: "#666" }}>
              <span>Veg Topics</span>
            </Link>
            <Link style={{ textDecoration: "none", color: "#666" }}>
              <span>Recipes</span>
            </Link>
            <Link style={{ textDecoration: "none", color: "#666" }}>
              <span>Blog</span>
            </Link>
            <Link style={{ textDecoration: "none", color: "#666" }}>
              <span>Support</span>
            </Link>

            <div>
              {!token ? (
                <Link
                  onFocus={() => setSearchFocus(false)}
                  className="Link login"
                  to="/log_in"
                >
                  <ButtonToolbar>
                    <Button className="buttonLoginJoin" variant="primary">
                      Login
                    </Button>
                  </ButtonToolbar>
                </Link>
              ) : (
                <div
                  onClick={() => {
                    setToken(null);
                    Cookies.remove("token");
                    Cookies.remove("username");
                    history.push("/");
                  }}
                  onFocus={() => setSearchFocus(false)}
                  className="Link login"
                >
                  <div className="user-offer-button">
                    <p
                      style={{
                        display: "flex"
                      }}
                    >
                      <span>User: {username} </span>
                    </p>
                    <ButtonToolbar>
                      <Button className="buttonLoginJoin" variant="primary">
                        Log out
                      </Button>
                    </ButtonToolbar>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <img
          style={{ position: "absolute" }}
          className="imgBackground"
          src={imgBackground}
          alt="imgBackground"
        />
        <div>
          <div style={{ textAlign: "center" }}>
            <h1 style={{ fontSize: 36 }}>Find Vegan Restaurants Nearby</h1>
          </div>

          <span className="inputSearchHeader">
            <Search />
            {/* <input
              id="inputHeader"
              style={{ position: "relative" }}
              type="text"
              placeholder="Rechercher"
            /> */}
          </span>
        </div>
      </div>
    </div>
  );
}

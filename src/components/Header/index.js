import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import imgBackground from "../../assets/img/headerImg.jpg";

import "./Header.css";

export default function Header() {
  return (
    <div className="container">
      <div className="header">
        {/*         <div className="logo"> */}
        <Link to="/">
          <img
            id="logo"
            src={logo}
            alt="logo"
            style={{ height: 48.95, width: 220 }}
          />
        </Link>
        {/*  </div> */}
        <div className="menu">
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
          </div>
          <div className="button--loginJoin">
            <Link>
              <button className="buttonAddListing">Add Listing</button>
            </Link>

            <Link to="/log_in/">
              <button className="buttonLoginJoin">Login/Join</button>
            </Link>
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
            <input
              id="inputHeader"
              style={{ position: "relative" }}
              type="text"
              placeholder="Rechercher"
            />
          </span>
          <button>Search</button>
        </div>
      </div>
    </div>
  );
}

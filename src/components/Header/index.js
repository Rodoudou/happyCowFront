import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.svg";

import "./Header.css";

export default function Header() {
  return (
    <div className="container">
      <div className="header">
        <div className="logo" style={{ height: 48.95, width: 220 }}>
          <img id="logo" src={logo} alt="logo" />
        </div>
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
              Veg Topics
            </Link>
            <Link style={{ textDecoration: "none", color: "#666" }}>
              Recipes
            </Link>
            <Link style={{ textDecoration: "none", color: "#666" }}>Blog</Link>
            <Link style={{ textDecoration: "none", color: "#666" }}>
              Support
            </Link>
          </div>
          <div className="button--loginJoin">
            <button className="buttonAddListing">Add Listing</button>
            <button className="buttonLoginJoin">Login/Join</button>
          </div>
        </div>
      </div>
    </div>
  );
}

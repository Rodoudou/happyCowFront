import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Card.css";
export default function Card({ data }) {
  // here the best restaurants with 5 stars
  return (
    <Link
      to={`/restaurant/${data.placeId}`}
      className="card"
      style={{ textDecoration: "none" }}
    >
      <div key={data.placeId} className="restaurants--cards">
        <img src={data.thumbnail} alt={data.name} />
        <p style={{ color: "black", fontWeight: "bold" }}>{data.name}</p>
        <span className="address">{data.address}</span>
        <p>
          {data.rating === 5 ? (
            <span className="iconStar">
              <FontAwesomeIcon style={{ color: "#FFCC00" }} icon="star" />
              <FontAwesomeIcon style={{ color: "#FFCC00" }} icon="star" />
              <FontAwesomeIcon style={{ color: "#FFCC00" }} icon="star" />
              <FontAwesomeIcon style={{ color: "#FFCC00" }} icon="star" />
              <FontAwesomeIcon style={{ color: "#FFCC00" }} icon="star" />
            </span>
          ) : null}
        </p>
      </div>
    </Link>
  );
}

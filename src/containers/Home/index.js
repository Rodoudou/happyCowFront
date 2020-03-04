import React from "react";

import "./Home.css";
import RestaurantCard from "../../components/RestaurantCard";

export default function Home() {
  return (
    <div className="content">
      <div className="body">
        <div>
          <h2>All Best Restaurants in Paris, France</h2>
        </div>
        <RestaurantCard />
      </div>
    </div>
  );
}

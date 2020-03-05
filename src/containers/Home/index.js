import React from "react";
import axios from "axios";
import "./Home.css";
import RestaurantCard from "../../components/RestaurantCard";

export default function Home({ isLoading, setIsLoading, datas, setDatas }) {
  return (
    <div className="content">
      <div className="body">
        <div>
          <h2 className="title">All Best Vegan Restaurants in Paris, France</h2>
        </div>
      </div>
      <div className="RestaurantCard">
        <RestaurantCard
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          datas={datas}
          setDatas={setDatas}
        />
      </div>
    </div>
  );
}

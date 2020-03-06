import React from "react";
import axios from "axios";
import "./Home.css";
import RestaurantCard from "../../components/RestaurantCard";

export default function Home({ isLoading, setIsLoading, datas, setDatas }) {
  return (
    <div className="content">
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

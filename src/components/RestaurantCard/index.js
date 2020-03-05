import React from "react";
import axios from "axios";
import Card from "../../components/Card";

import "./RestaurantCard.css";
export default function RestaurantCard({
  isLoading,
  setIsLoading,
  datas,
  setDatas
}) {
  console.log(datas);
  return (
    <div>
      {isLoading ? (
        <p>En chargement...</p>
      ) : (
        <div className="content">
          {console.log("datas restaurantCard=>", datas)}
          {datas.map((data, index) => (
            <div key={data.placeId}>
              {data.rating === 5 ? (
                <Card key={data.placeId} data={data} />
              ) : null}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

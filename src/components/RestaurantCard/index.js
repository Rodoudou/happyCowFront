import React from "react";
import Card from "../../components/Card";

import "./RestaurantCard.css";
export default function RestaurantCard({
  isLoading,
  setIsLoading,
  datas,
  setDatas
}) {
  return (
    <div>
      {isLoading ? (
        <p>En chargement...</p>
      ) : (
        <div className="content">
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

import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../components/Card";
import "./RestaurantCard.css";
export default function RestaurantCard() {
  const [isLoading, setIsLoading] = useState(true);
  const [datas, setDatas] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://res.cloudinary.com/lereacteur-apollo/raw/upload/v1575242111/10w-full-stack/Scraping/restaurants.json`
      );
      console.log(response.data);
      setDatas(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);
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

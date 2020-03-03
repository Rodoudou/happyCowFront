import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Restaurant() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      console.log("1");
      const response = await axios.get(
        ` https://res.cloudinary.com/lereacteur-apollo/raw/upload/v1575242111/10w-full-stack/Scraping/restaurants.json?placeId=${id}`
      );
      console.log("2");
      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, [id]);
  console.log("id", id);
  return (
    <div>
      {isLoading === true ? (
        <p>En cours de chargement ...</p>
      ) : (
        <div style={{ backgroundColor: "tomato", height: 50, width: 100 }}>
          <div className="header"></div>
          {console.log("data=3", data)}
          <span>{data.id}</span>
        </div>
      )}
    </div>
  );
}

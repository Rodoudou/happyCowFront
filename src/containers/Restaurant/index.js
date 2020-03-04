import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Restaurant.css";
import { useParams } from "react-router-dom";

export default function Restaurant() {
  const [isLoading, setIsLoading] = useState(true);
  const [datas, setDatas] = useState();

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      console.log("1");
      try {
        const response = await axios.get(
          `https://res.cloudinary.com/lereacteur-apollo/raw/upload/v1575242111/10w-full-stack/Scraping/restaurants.json/${id}`
        );
        console.log("2");
        setDatas(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id]);
  console.log("id", id);
  return (
    <div>
      {isLoading === true ? (
        <div>En cours de chargement ...</div>
      ) : (
        <div style={{ backgroundColor: "tomato", height: 80, width: 120 }}>
          {datas.thumbnail ? (
            <img src={datas.thumbnail} alt="restaurant" />
          ) : (
            <span>Pas de photo</span>
          )}
        </div>
      )}
    </div>
  );
}

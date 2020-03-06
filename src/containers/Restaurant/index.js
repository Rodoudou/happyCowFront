import React, { useState, useEffect } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";
import "./Restaurant.css";
export default function Restaurant({
  isLoading,
  setIsLoading,
  datas,
  setDatas
}) {
  const { id } = useParams();
  const [singleData, setSingleData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://res.cloudinary.com/lereacteur-apollo/raw/upload/v1575242111/10w-full-stack/Scraping/restaurants.json`
        );

        for (let i = 0; i < response.data.length; i++) {
          if (String(response.data[i].placeId) === id) {
            /*          console.log("ici ", response.data[i]); */
            setSingleData(response.data[i]);
          }
        }
        setIsLoading(false);
      } catch (error) {
        console.log("error.message =>", error.message);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="container">
      {/*  {console.log("datas Restaurant lol=>", datas)} */}
      {isLoading ? (
        <div>En cours de chargement ...</div>
      ) : (
        <div className="restoCard">
          <img src={singleData.thumbnail} alt={singleData.name} />
          <p style={{ color: "black", fontWeight: "bold" }}>
            {singleData.name}
          </p>
          <p className="address">{singleData.address}</p>
        </div>
      )}
    </div>
  );
}

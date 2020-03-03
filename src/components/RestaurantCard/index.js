import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import "./RestaurantCard.css";
import { Link } from "react-router-dom";
export default function RestaurantCard() {
  const [isLoading, setIsLoading] = useState(true);
  const [datas, setDatas] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://res.cloudinary.com/lereacteur-apollo/raw/upload/v1575242111/10w-full-stack/Scraping/restaurants.json`
      );
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
          {console.log("2- datas map=>", datas)}
          {datas.map((data, index) => (
            <div key={data.placeId}>
              {data.rating === 5 ? (
                <Link to={"/restaurant/" + data.placeId}>
                  <div key={data.placeId} className="restaurants--cards">
                    <img src={data.thumbnail} alt={data.name} />
                    <p style={{ color: "black" }}>{data.name}</p>
                    <p>
                      {data.rating === 5 ? (
                        <span className="iconStar">
                          <FontAwesomeIcon
                            style={{ color: "#FFCC00" }}
                            icon="star"
                          />
                          <FontAwesomeIcon
                            style={{ color: "#FFCC00" }}
                            icon="star"
                          />
                          <FontAwesomeIcon
                            style={{ color: "#FFCC00" }}
                            icon="star"
                          />
                          <FontAwesomeIcon
                            style={{ color: "#FFCC00" }}
                            icon="star"
                          />
                          <FontAwesomeIcon
                            style={{ color: "#FFCC00" }}
                            icon="star"
                          />
                        </span>
                      ) : null}
                    </p>
                  </div>
                </Link>
              ) : null}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

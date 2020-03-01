import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [datas, setDatas] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(``);
      setDatas(response.data);
      setIsLoading(false);
      console.log("response.data=>", response.data);
    };
    fetchData();
  }, []);
  return (
    <div className="content">
      {console.log("datas=>", datas)}
      <h1>Home</h1>
      <p>lgfeyergflyfle</p>
    </div>
  );
}

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import "./Search.css";
export default function Search({ setDatas }) {
  const [searchInput, setSearchInput] = useState("");
  const handleSubmit = async e => {
    e.preventDefault();
    const response = await axios.get(
      `http://localhost:8000/user/search/?userSearch=${searchInput}`
    );
    setDatas(response.data);
    console.log(searchInput);
    console.log("response.data in Search=>", response.data);
  };
  return (
    <div className="search-container">
      <div className="elipsis-container">
        <div />
      </div>
      <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <div className="search-input">
            <input
              id="inputSearch"
              onChange={e => setSearchInput(e.target.value)}
              placeholder="Que recherchez-vous ?"
              type="text"
            />
            <FontAwesomeIcon
              className="form-search-icon"
              icon="search"
              size="1x"
            />
          </div>
          {/*           <input type="submit" value="Rechercher" name="search" />
           */}
        </form>
      </div>
    </div>
  );
}

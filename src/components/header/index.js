import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import "./header.css";
import { useStateValue } from "../../context/StateProvider";

export const Header = () => {
  const [input, setInput] = useState("");

  const handleChange = (e) => setInput(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const keyword = input.trim();
    if (keyword.length > 0) {
      fetchData(keyword);
    }
  };

  const [state, dispatch] = useStateValue();

  const fetchData = (keyword) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&query=${keyword}&page=1&include_adult=false`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        dispatch({ type: "SET_LOADING", payload: false });
        dispatch({ type: "GET_DATA", payload: json.results });
      });
  };

  return (
    <div className="header">
      <div className="header__link">
        <h2 className="header__logo">
          <NavLink to="/" className="header__navh">
            Movies
          </NavLink>
        </h2>

        <NavLink to="/favourites" className="header__nav">
          Favourites
        </NavLink>
      </div>
      <div className="header__search">
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Search"
            type="text"
            className="header__searchfield"
            onSubmit={handleSubmit}
            onChange={handleChange}
          />
          <button type="submit" className="header__button">
            <SearchOutlined />
          </button>
        </form>
      </div>
    </div>
  );
};

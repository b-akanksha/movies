import React from "react";
import { NavLink } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import "./header.css";

export const Header = () => {
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
        <input
          placeholder="Search"
          type="text"
          className="header__searchfield"
        />
        <SearchOutlined />
      </div>
    </div>
  );
};

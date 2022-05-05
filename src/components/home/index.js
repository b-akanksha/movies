import React from "react";
import Favourites from "../favourites";
import Movies from "../movies";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <Favourites />
      <Movies />
    </div>
  );
};

export default Home;

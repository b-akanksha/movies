import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import "./card.css";

const FavCard = ({ item }) => {
  return (
    <section
      className="blur-card"
      style={{
        background:
          item &&
          item.poster_path &&
          `url('https://image.tmdb.org/t/p/w500${item.poster_path}')`,
        backgroundSize: "cover",
      }}
    >
      <div className="card">
        <p>{item?.original_title}</p>
        <button className="add-button">
          <PlusOutlined />
        </button>
      </div>
    </section>
  );
};

export default FavCard;

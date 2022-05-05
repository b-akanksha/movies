import React from "react";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import "./card.css";
import { useStateValue } from "../../context/StateProvider";

const FavCard = ({ item, type }) => {
  const [state, dispatch] = useStateValue();

  const addToFav = (movie) => {
    console.log(movie);
    dispatch({ type: "ADD_TO_FAV", payload: movie });
  };
  const removeFromFav = (movie) =>
    dispatch({ type: "REMOVE_FROM_FAV", payload: movie });

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
        <p>
          <b>
            {item?.original_title} | {item?.vote_average}
          </b>
        </p>
        {type === "movies" ? (
          <button className="add-button" onClick={() => addToFav(item)}>
            <PlusOutlined />
          </button>
        ) : (
          <button className="add-button" onClick={() => removeFromFav(item)}>
            <MinusOutlined />
          </button>
        )}
      </div>
    </section>
  );
};

export default FavCard;

import React from "react";
import { useStateValue } from "../../context/StateProvider";
import FavCard from "../favCard";
import "./fav.css";

const Favourites = () => {
  const [{ loading, fav }, dispatch] = useStateValue();

  console.log(fav);
  return (
    <div className="fav-container">
      <h2>{loading ? "Loading.." : "Fav"}</h2>
      <div className="favs">
        {loading && <h1>Loading..</h1>}
        {fav && fav.length > 0 ? (
          fav?.map((item) => (
            <FavCard key={`${item.id}`} item={item} type="fav" />
          ))
        ) : (
          <p>Nothing to display</p>
        )}
      </div>
    </div>
  );
};

export default Favourites;

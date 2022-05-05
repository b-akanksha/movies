import React from "react";
import useApi from "../../utils/useApi";
import FavCard from "../favCard";
import "./movies.css";

const Movies = () => {
  const { loading, data } = useApi();

  return (
    <div className="movies">
      {loading && <h1>Loading..</h1>}
      {data &&
        data.length > 0 &&
        data?.map((item) => <FavCard key={`${item.id}`} item={item} />)}
    </div>
  );
};

export default Movies;

import React from "react";
import { useStateValue } from "../../context/StateProvider";
import FavCard from "../favCard";
import "./movies.css";

const Movies = () => {
  React.useEffect(() => {
    fetchData();
  }, []);

  const [{ loading, data }, dispatch] = useStateValue();

  const fetchData = () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&query=avenger&page=1&include_adult=false`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        dispatch({ type: "SET_LOADING", payload: false });
        dispatch({ type: "GET_DATA", payload: json.results });
      });
  };

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

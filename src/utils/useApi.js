import React, { useState, useEffect } from "react";

const useApi = (keyword = "a") => {
  console.log("apikey", process.env.REACT_APP_APIKEY);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchApi = () => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&sort_by=popularity.desc&page=1&with_keywords=${keyword}`
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
        setLoading(false);
        setData(json.results);
      });
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return { loading, data };
};

export default useApi;

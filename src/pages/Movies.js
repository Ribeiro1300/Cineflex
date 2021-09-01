import { movies } from "../components/Data";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import axios from "axios";

export default function Movies() {
  // const movies;
  // useEffect(() => {
  //   const promisse = axios.get(
  //     "https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies"
  //   );
  //   promisse.then((res) => {
  //     movies = res.data;
  //     console.log(res.data);
  //   });
  // });

  const [filter, setFilter] = React.useState("");
  const newMovies = movies.filter((info) =>
    info.title.toUpperCase().includes(filter.toUpperCase())
  );
  function search(value) {
    setFilter(value.target.value);
  }
  return (
    <>
      <div className="search">
        <h2>Selecione o filme</h2>
        <input
          onChange={search}
          placeholder="Procure o filme"
          value={filter}
        ></input>
      </div>
      <div className="movies">
        {newMovies.map((info) => (
          <Link to>
            <div className="movie">
              <img src={info.posterURL}></img>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

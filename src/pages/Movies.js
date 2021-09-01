import { movies } from "../components/Data";
import { Link } from "react-router-dom";
import React from "react";
import axios from "axios";

export default function Movies() {
  // const promisse = axios.get(
  //   "https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies"
  // );
  // promisse.then((res) => {
  //   console.log(res);
  // });
  const [filter, setFilter] = React.useState("");
  const newMovies = movies.filter((info) =>
    info.title.toUpperCase().includes(filter.toUpperCase())
  );
  function search(value) {
    setFilter(value.target.value);
    console.log(value.target.value);
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

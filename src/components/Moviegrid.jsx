import { useState, useEffect } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

const Moviegrid = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const onChangeInput = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  const filterChange = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        className="search-input"
        placeholder="Search Movies"
        value={searchTerm}
        onChange={onChangeInput}
      />

      <div className="movies-grid">
        {filterChange.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default Moviegrid;

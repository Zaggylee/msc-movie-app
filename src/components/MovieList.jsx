import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {movies.map((movie, i) => (
        <MovieCard key={i} movie={movie} />
      ))}
    </div>
  );
};

const styles = {
  list: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    marginTop: "20px",
  },
};

export default MovieList;

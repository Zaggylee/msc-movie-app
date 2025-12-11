import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-xl transition cursor-pointer w-64">
      <Link to={`/movie/${movie.id}`} className="movie-card">
        <img
          src={movie.posterURL}
          alt={movie.title}
          className="w-full h-80 object-cover rounded-t-xl"
        />
        <div className="p-4">
          <h3 className="font-bold text-lg">{movie.title}</h3>
          <p className="text-sm text-gray-600 line-clamp-2">
            {movie.description}
          </p>
          <p className="mt-2 font-semibold text-yellow-500">
            ⭐ {movie.rating}
          </p>
        </div>
      </Link>
    </div>
  );
};

const styles = {
  card: {
    width: "250px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    textAlign: "center",
    background: "#fff",
  },
  img: {
    width: "100%",
    height: "300px",
    borderRadius: "8px",
    objectFit: "cover",
  },
};

export default MovieCard;

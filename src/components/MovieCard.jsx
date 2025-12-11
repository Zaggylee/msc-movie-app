import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div style={styles.card}>
      <img src={movie.posterURL} alt={movie.title} style={styles.img} />
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <p>⭐ {movie.rating}</p>
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

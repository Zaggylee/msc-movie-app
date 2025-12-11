import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Money Heist",
      description: "A criminal mastermind plans the biggest heist.",
      posterURL:
        "https://m.media-amazon.com/images/I/81zN4JeS06L._AC_UF894,1000_QL80_.jpg",
      rating: 9,
    },
    {
      title: "John Wick",
      description: "A retired assassin goes on revenge.",
      posterURL:
        "https://m.media-amazon.com/images/I/71W2pBRUv-L._AC_UF894,1000_QL80_.jpg",
      rating: 8,
    },
  ]);

  const [searchTitle, setSearchTitle] = useState("");
  const [searchRating, setSearchRating] = useState(0);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const filteredMovies = movies.filter(
    (m) =>
      m.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
      Number(m.rating) >= Number(searchRating)
  );

  return (
    <div style={{ padding: "30px", marginLeft: "20rem" }}>
      <h1>🎬 My Movie App</h1>

      <Filter
        searchTitle={searchTitle}
        setSearchTitle={setSearchTitle}
        searchRating={searchRating}
        setSearchRating={setSearchRating}
      />

      <AddMovie addMovie={addMovie} />

      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;

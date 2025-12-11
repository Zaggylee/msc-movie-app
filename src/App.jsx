import React, { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Money Heist",
      description: "A criminal mastermind plans the biggest heist.",
      posterURL:
        "https://deadline.com/wp-content/uploads/2018/04/casa-de-papel-money-heist.jpeg?w=681&h=383&crop=1",
      rating: 9,
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
    },
    {
      id: 2,
      title: "John Wick",
      description: "A retired assassin goes on revenge.",
      posterURL:
        "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/24510842/john_wick_chapter_4_JW4_Unit_211027_00134_R2_rgb.jpeg?quality=90&strip=all&crop=19.583333333333,0,60.833333333333,100",
      rating: 8,
      trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
    },
    {
      id: 3,
      title: "Money Heist",
      description: "A criminal mastermind plans the biggest heist.",
      posterURL:
        "https://deadline.com/wp-content/uploads/2018/04/casa-de-papel-money-heist.jpeg?w=681&h=383&crop=1",
      rating: 9,
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
    },
    {
      id: 4,
      title: "John Wick",
      description: "A retired assassin goes on revenge.",
      posterURL:
        "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/24510842/john_wick_chapter_4_JW4_Unit_211027_00134_R2_rgb.jpeg?quality=90&strip=all&crop=19.583333333333,0,60.833333333333,100",
      rating: 8,
      trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
    },
  ]);

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

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

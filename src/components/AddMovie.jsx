import React, { useState } from "react";

const AddMovie = ({ addMovie }) => {
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: "",
  });

  const handleSubmit = () => {
    if (!newMovie.title || !newMovie.posterURL || !newMovie.rating) {
      alert("Please fill all required fields!");
      return;
    }

    addMovie(newMovie);

    setNewMovie({ title: "", description: "", posterURL: "", rating: "" });
  };

  return (
    <div style={styles.container}>
      <input
        placeholder="Title"
        value={newMovie.title}
        onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
      />

      <input
        placeholder="Description"
        value={newMovie.description}
        onChange={(e) =>
          setNewMovie({ ...newMovie, description: e.target.value })
        }
      />

      <input
        placeholder="Poster URL"
        value={newMovie.posterURL}
        onChange={(e) =>
          setNewMovie({ ...newMovie, posterURL: e.target.value })
        }
      />

      <input
        type="number"
        placeholder="Rating"
        value={newMovie.rating}
        onChange={(e) => setNewMovie({ ...newMovie, rating: e.target.value })}
        min="0"
        max="10"
      />

      <button onClick={handleSubmit}>Add Movie</button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    gap: "10px",
    margin: "20px 0",
  },
};

export default AddMovie;

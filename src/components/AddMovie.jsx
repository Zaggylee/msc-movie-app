import React, { useState } from "react";

const AddMovie = ({ addMovie }) => {
  const [newMovie, setNewMovie] = useState({
    id: "",
    title: "",
    description: "",
    posterURL: "",
    rating: "",
    trailer: "",
  });

  const handleSubmit = () => {
    if (!newMovie.title || !newMovie.posterURL || !newMovie.rating) {
      alert("Please fill all required fields!");
      return;
    }

    addMovie(newMovie);

    setNewMovie({
      title: "",
      description: "",
      posterURL: "",
      rating: "",
      id: "",
      trailer: "",
    });
  };

  return (
    <div className="flex flex-wrap gap-4 my-6">
      <input
        className="px-4 py-2 border rounded-lg shadow-sm w-60"
        placeholder="Title"
        value={newMovie.title}
        onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
      />

      <input
        className="px-4 py-2 border rounded-lg shadow-sm w-60"
        placeholder="Description"
        value={newMovie.description}
        onChange={(e) =>
          setNewMovie({ ...newMovie, description: e.target.value })
        }
      />
      <input
        className="px-4 py-2 border rounded-lg shadow-sm w-60"
        placeholder="Trailer URL (YouTube embed link)"
        value={newMovie.trailer}
        onChange={(e) => setNewMovie({ ...newMovie, trailer: e.target.value })}
      />

      <input
        className="px-4 py-2 border rounded-lg shadow-sm w-60"
        placeholder="Poster URL"
        value={newMovie.posterURL}
        onChange={(e) =>
          setNewMovie({ ...newMovie, posterURL: e.target.value })
        }
      />

      <input
        className="px-4 py-2 border rounded-lg shadow-sm w-60"
        type="number"
        placeholder="Rating"
        value={newMovie.rating}
        onChange={(e) => setNewMovie({ ...newMovie, rating: e.target.value })}
        min="0"
        max="10"
      />

      <button
        className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        onClick={handleSubmit}
      >
        Add Movie
      </button>
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

import React from "react";

const Filter = ({
  searchTitle,
  setSearchTitle,
  searchRating,
  setSearchRating,
}) => {
  return (
    <div className="flex gap-4 my-6 items-center">
      <input
        type="text"
        placeholder="Search title..."
        value={searchTitle}
        onChange={(e) => setSearchTitle(e.target.value)}
        className="px-4 py-2 border rounded-lg w-64 shadow-sm focus:ring focus:ring-blue-300"
      />

      <input
        type="number"
        placeholder="Min rating..."
        value={searchRating}
        onChange={(e) => setSearchRating(e.target.value)}
        min="0"
        max="10"
        className="px-4 py-2 border rounded-lg w-32 shadow-sm focus:ring focus:ring-blue-300"
      />
    </div>
  );
};

const styles = {
  filterBox: {
    display: "flex",
    gap: "20px",
    margin: "20px 0",
  },
};

export default Filter;

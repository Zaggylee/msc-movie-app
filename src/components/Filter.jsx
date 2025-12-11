import React from "react";

const Filter = ({
  searchTitle,
  setSearchTitle,
  searchRating,
  setSearchRating,
}) => {
  return (
    <div style={styles.filterBox}>
      <input
        type="text"
        placeholder="Search title..."
        value={searchTitle}
        onChange={(e) => setSearchTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Min rating..."
        value={searchRating}
        onChange={(e) => setSearchRating(e.target.value)}
        min="0"
        max="10"
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

import React from "react";

const Genres = ({ data }) => {
  return (
    <div>
      <p className="minititle">Genres:</p>
      <ul>
        {data.genres.length === 0 ? (
          null
        ) : (
          data.genres.map((item, index) => <li key={index}>{item.name}</li>)
        )}
      </ul>
    </div>
  );
};

export default Genres;

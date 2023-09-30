import React from "react";

const Themes = ({ data }) => {
  return (
    <div>
      <p className="minititle">Themes:</p>
      <ul>
        {data.themes.length === 0 ? (
          null
        ) : (
          data.themes.map((item, index) => <li key={index}>{item.name}</li>)
        )}
      </ul>
    </div>
  );
}

export default Themes;

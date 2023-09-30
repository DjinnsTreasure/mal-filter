import React from "react";

const Themes = ({ data }) => {
  return (
    <div>
      <p>Themes:</p>
      <ul>
        {data.themes.length === 0 ? (
          <li>None</li>
        ) : (
          data.themes.map((item, index) => <li key={index}>{item.name}</li>)
        )}
      </ul>
    </div>
  );
}

export default Themes;

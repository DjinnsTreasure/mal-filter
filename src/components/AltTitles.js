import React from "react";

const AltTitles = ({ data }) => {
  return (
    <div>
      <p>Alt Titles:</p>
      <ul>
        {data.titles.length <= 1 ? (
          <li>None</li>
        ) : (
          data.titles.slice(1).map((item, index) => (
            <li key={index}>
              {item.type}: {item.title}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default AltTitles;

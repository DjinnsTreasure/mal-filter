import React from "react";

const AltTitles = ({ data }) => {
  return (
    <div>
      <p className="minititle">Alt Titles:</p>
      <ul>
        {data.titles.length <= 1 ? (
          null
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

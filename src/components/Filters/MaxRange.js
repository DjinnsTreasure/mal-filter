import React from "react";

const MaxRange = ({onChange}) => {

  return (
    <select onChange={onChange}>
      <option value="">Select a Maximum Score</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="8">9</option>
      <option value="8">10</option>
    </select>
  );
};

export default MaxRange;

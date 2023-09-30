import React from "react";

const TypeFilter = ({onChange}) => {

  return (
    <select onChange={onChange}>
      <option value="">Any Type</option>
      <option value="tv">TV</option>
      <option value="movie">Movie</option>
      <option value="ova">OVA</option>
      <option value="special">Special</option>
      <option value="ona">ONA</option>
      <option value="music">Music</option>
    </select>
  );
};

export default TypeFilter;

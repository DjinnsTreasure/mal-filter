import React from "react";

const RatingFilter = ({onChange}) => {

  return (
    <select onChange={onChange}>
      <option value="">Any Rating</option>
      <option value="sfw">Exclude Hentai</option>
      <option value="g">G - All Ages</option>
      <option value="pg">PG - Children</option>
      <option value="pg13">PG-13 - Teens 13 or older</option>
      <option value="r17">R - 17+ (violence & profanity)</option>
      <option value="r">R+ - Mild Nudity</option>
      <option value="rx">Rx - Hentai</option>
    </select>
  );
};

export default RatingFilter;

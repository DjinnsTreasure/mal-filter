import React from "react";

const Trailer = ({ data }) => {
  
  return (
    <div>
      <p>Trailer:</p>
      <ul>
        {data === null || data.trailer.embed_url === null ? (
          <p>No trailer found</p>
        ) : (
          <iframe width="420" height="315" title="YouTube video player" src={data.trailer.embed_url}> </iframe>
        )}
      </ul>
    </div>
  );
};

export default Trailer;
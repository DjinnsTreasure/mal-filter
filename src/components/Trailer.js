import React from "react";

const Trailer = ({ data }) => {
  
  // const embedUrl = `<iframe width="560" height="315" src="${data.trailer.embed_url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
  
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
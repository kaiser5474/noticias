import React from "react";

const Noticia = ({ noticia }) => {
  const { author, description, urlToImage, source, url, title } = noticia;
  return (
    <div className="col s12 m6 l4">
      <div className="card">
        <div className="card-image">
          <img src={urlToImage} alt={title  } />
        </div>
        <div className="card-content">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Noticia;

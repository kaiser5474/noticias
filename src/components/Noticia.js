import React from "react";
import styles from "./Noticia.module.css";

const Noticia = ({ noticia }) => {
  const { author, description, urlToImage, source, url, title } = noticia;
  return (
    <div className="col s12 m6 l4">
      <div className="card">
        <div className="card-image">
          <img src={urlToImage} alt={title} />
          <span className="card-title">{source.name}</span>
        </div>
        <div className="card-content">
          <h4>{title}</h4>
          <p className={styles.resumen}>{description}</p>
        </div>
        <div className={`card-action ${styles.botonIrNoticia}`}>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="waves-effect waves-light btn"
          >
            Ver Noticia completa
          </a>
        </div>
      </div>
    </div>
  );
};

export default Noticia;

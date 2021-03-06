import React from "react";
import PropTypes from "prop-types";

import "./Card.css";

function Card({ imageSource, title, text, url }) {
  return (
    <div className="card-nosotros text-center bg-dark animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={imageSource} alt="a wallpaper" className="card-img-top" />
      </div>
      <div className="card-body text-light-nosotros">
        <h4 className="card-title nosotros">{title}</h4>
        <p className="card-text text-secondary">
          {text}
        </p>
        <a
          href={url ? url : "#!"}
          target="_blank"
          className="btn btn-outline-secondary border-0"
          rel="noreferrer"
        >
          Go to LinkedIn
        </a>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string
};

export default Card;
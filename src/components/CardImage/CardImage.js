import React from "react";
import './CardImage.css'
function CardImage(props) {
  return (
    <div>
      <a href={props.link} className="home__pro__place-link">
        <img
          src={props.image}
          alt={props.name}
          className="home__pro__place-img"
        />
        <div className="home__pro__place-title">
          <span className="home__pro__place-label">{props.name} </span>
          <span className="home__pro__place-decs">{props.numbers} </span>
          <span className="home__pro__place-decs-place">Địa điểm</span>
        </div>
      </a>
    </div>
  );
}

export default CardImage;

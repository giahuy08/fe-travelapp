import React from "react";
import './CardImage.css'
function CardImage(props) {
  return (
    <div>
      <a href={props.link} class="home__pro__place-link">
        <img
          src={props.image}
          alt={props.name}
          class="home__pro__place-img"
        />
        <div class="home__pro__place-title">
          <span class="home__pro__place-label">{props.name} </span>
          <span class="home__pro__place-decs">{props.numbers} </span>
          <span class="home__pro__place-decs-place">Địa điểm</span>
        </div>
      </a>
    </div>
  );
}

export default CardImage;

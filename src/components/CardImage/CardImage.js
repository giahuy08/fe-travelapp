import React from "react";
import './CardImage.css'
function CardImage() {
  return (
    <div>
      <a href="" class="home__pro__place-link">
        <img
          src="/images/location_5_1559735011.png"
          alt="Hà Nội"
          class="home__pro__place-img"
        />
        <div class="home__pro__place-title">
          <span class="home__pro__place-label">Hà Nội </span>
          <span class="home__pro__place-decs">2822 </span>
          <span class="home__pro__place-decs-place">Chỗ ở</span>
        </div>
      </a>
    </div>
  );
}

export default CardImage;

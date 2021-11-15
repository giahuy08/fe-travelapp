import React from "react";
function CardTour(props) {
  return (
    <>
      <div className="cards__item_tour">
        <article>
          <figure class="cards__item__pic-wrap" data-category={props.price}>
            <a href="/#">
              <img className="cards__item__img" src={props.img} alt="" />
              <div class="tour_day">
                <p class="">{props.days}</p>
              </div>
            </a>
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
        </article>
      </div>
    </>
  );
}

export default CardTour;

import React from "react";
import { Link } from "react-router-dom";
function CardTour(props) {
  return (
    <>
      <div className="cards__item_tour">
        <article>
          <figure className="cards__item__pic-wrap" data-category={props.price}>
            <Link
             to={{
              pathname: `/tour-item`,
              state: {
                id: props.id,
              },
            }}
            >
              <img className="cards__item__img" src={props.img} alt="" />
              <div className="tour_day">
                <p className="">{props.days}</p>
              </div>
            </Link>
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

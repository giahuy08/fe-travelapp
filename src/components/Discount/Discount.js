import React from "react";
import "./Discount.css";
function Discount(props) {
  return (
    <div className="discount">
      <img
        src="https://images.unsplash.com/photo-1577387196112-579d95312c6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt=""
        className="discount-image"
      />
      <div className="discount-content">
        <div className="discount-top">
          <h3 className="discount-title">{props.code}</h3>
        </div>
        <div className="discount-bottom">
          <div className="discount-live">
            <span>-{props.discount}%</span>
          </div>
          <div className="discount-watching">{props.name}</div>
        </div>
      </div>
    </div>
  );
}

export default Discount;

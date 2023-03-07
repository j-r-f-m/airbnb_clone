import React from "react";

// props is an object
export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card--1">
      {/* rende div if condition is true */}
      {badgeText && <div className="card--badge">{badgeText}</div>}

      <img className="card1--img" src={`/images/${props.img}`} alt="swismmer" />
      <div className="card1--rating">
        {/* images need to be stored in public images */}
        <img className="card1--star" src="/images/star.png" alt="star" />
        <span>{props.rating}</span>
        <span className="card1--grey">({props.reviewCount}) - </span>
        <span className="card1--grey">{props.country}</span>
      </div>
      <p className="card--description--1">{props.title}</p>
      <p className="card--price--1">
        <span className="card1--bold">From ${props.price}</span>/person
      </p>
    </div>
  );
}
// {`../images/${props.img}`}

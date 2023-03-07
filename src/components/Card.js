import React from "react";

// props is an object
export default function Card(props) {
  console.log(props);

  let badgeText;
  if (props.data.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.data.location === "Online") {
    badgeText = "ONLINE";
  }
  // key={dataEle.title}
  // img={dataEle.coverImg}
  // rating={dataEle.stats.rating}
  // reviewCount={dataEle.stats.reviewCount}
  // location={dataEle.location}
  // title={dataEle.title}
  // price={dataEle.price}
  // openSpots={dataEle.openSpots}

  return (
    <div className="card--1">
      {/* rende div if condition is true */}
      {badgeText && <div className="card--badge">{badgeText}</div>}

      <img
        className="card1--img"
        src={`/images/${props.data.coverImg}`}
        alt="swismmer"
      />
      <div className="card1--rating">
        {/* images need to be stored in public images */}
        <img className="card1--star" src="/images/star.png" alt="star" />
        <span>{props.data.stats.rating}</span>
        <span className="card1--grey">({props.data.stats.reviewCount}) - </span>
        <span className="card1--grey">{props.data.location}</span>
      </div>
      <p className="card--description--1">{props.data.title}</p>
      <p className="card--price--1">
        <span className="card1--bold">From ${props.data.price}</span>/person
      </p>
    </div>
  );
}
// {`../images/${props.img}`}

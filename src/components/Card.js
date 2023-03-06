import React from "react";
//import swimmer from "../images/swimmer.jpg";
// import star from "../images/star.png";
// import swimmer from "../images/swimmer.jpg";

export default function Card(props) {
  console.log(props);
  return (
    <section className="card--container">
      <div className="card--1">
        <img
          className="card1--img"
          src={`/images/${props.img}`}
          alt="swismmer"
        />
        <div className="card1--rating">
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
    </section>
  );
}
// {`../images/${props.img}`}

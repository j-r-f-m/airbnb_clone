import React from "react";

export default function Hero() {
  return (
    <section className="hero">
      <img
        className="hero--img"
        src="/images/photo.jpg"
        alt="tourists having fun"
      />
      <h1 className="hero--header">Online Experiences</h1>
      <p className="hero--text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}

import React from "react";
import logo from "../logo.svg";

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <img className="nav--logo" src={logo} alt="Logo" />
        <h2>airbnb</h2>
        {/* <div className="nav-left">
          <img className="nav-logo" src={logo} alt="Logo" />
          <h1>React Facts</h1>
        </div>

        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul> */}
      </nav>
    </header>
  );
}

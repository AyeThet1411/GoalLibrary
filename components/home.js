import React from "react";
import img from "../images/card-1.png";

export default function Card(props) {
  return (
    <div className="home">
      <div className="home-card">
        <div className="home-card--title">
          <h2>{props.title}</h2>
          <p>{props.para}</p>
        </div>
        <div className="home-card--img">
          <img src={props.img} />
        </div>
      </div>
    </div>
  );
}

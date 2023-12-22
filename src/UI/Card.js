import React from "react";
import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className;
  return (
    <div className={classes}>
      <div>
        <div className="svg">{props.children}</div>
        <h1 className="heading">{props.heading}</h1>
        <p className="paragraph">{props.paragraph}</p>
      </div>
    </div>
  );
};

export default Card;

import React from "react";
import "./Card.css";

const Card = (props) => {
  const classes = " card " + props.className; //adauga si restul de clase la formatul configurat de tine

  return <div className={classes}>{props.children}</div>; //este valid in toate documentele chiar daca nu este numit
};

export default Card;

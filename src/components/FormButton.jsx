import React from "react";

import classes from "./FormButton.module.css";

const Button = (props) => {
  let background;
  let fontColor;

  if (props.color === "blue") {
    background = "#2D4059";
    fontColor = "#FFFFFF";
  } else if (props.color === "white") {
    background = "#FFFFFF";
    fontColor = props.fontColor ? props.fontColor : "#2D4059";
  } else {
    background = props.color
    fontColor = props.fontColor
  }


  return (
    <button
      style={{ backgroundColor: background, color: fontColor }}
      className={classes.button}
      type={props.type}
      onClick={props.onClick}
    >
      {props.name}
    </button>
  );
};

export default Button;

import React from "react";

import classes from "./FormButton.module.css";

const Button = (props) => {
  let background;
  let fontColor;

  if (props.color === "blue") {
    background = "#2D4059";
    fontColor = "#FFFFFF";
  } else {
    background = "#FFFFFF";
    fontColor = "#2D4059";
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

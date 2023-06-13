import React from "react";

import classes from "./FormInput.module.css";

const Input = (props) => {

  return (
    <div className={classes.input}>
      <label htmlFor={props.id}>{props.name}:</label>
      <input
        type={props.text}
        id={props.id}
        onChange={(e) => props.handler(e.target.value)}
      />
    </div>
  );
};

export default Input;

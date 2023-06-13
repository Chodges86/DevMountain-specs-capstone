import React, { useState } from "react";

import Input from "./FormInput";

import classes from "./Form.module.css";
import Button from "./FormButton";

const Form = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameHandler = (username) => {
    console.log(username)
  };
  const passwordHandler = (password) => {
    console.log(password)
  };

  return (
    <form className={classes.form}>
      <Input name="Username" id="username" type="text" handler={usernameHandler} />
      <Input name="Password" id="password" type="password" handler={passwordHandler}/>
      <div>
        <Button name="Cancel" color="white" />
        <Button name="Login" color="blue" />
      </div>
    </form>
  );
};

export default Form;

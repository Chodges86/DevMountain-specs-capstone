import React, { useState } from "react";

import Input from "../components/FormInput";
import Button from "../components/FormButton";

import classes from "./LoginPage.module.css";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const usernameHandler = (user) => {
    setUsername(user);
  };
  const passwordHandler = (pw) => {
    setPassword(pw);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("username", username);
    console.log("password", password);

    // Set values to empty to clear inputs.
    setUsername('')
    setPassword('')

    navigate('/user-portal')
  };

  const navigateToRegister = () => {
    navigate('register')
  }



  return (
    <div className={classes.login}>
      <form className={classes.form} onSubmit={submitHandler}>
      <Input name="Username" id="username" type="text" handler={usernameHandler} value={username}/>
      <Input name="Password" id="password" type="password" handler={passwordHandler} value={password}/>
      <div>
        <Button name="Register" color="white" type="button" onClick={navigateToRegister}/>
        <Button name="Login" color="blue" type="submit"/>
      </div>
    </form>
    </div>
  );
};

export default LoginPage;

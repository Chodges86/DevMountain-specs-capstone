import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { ImSpinner3 } from "react-icons/im";

import AuthContext from "../store/authContext";
import Input from "../components/FormInput";
import Button from "../components/FormButton";

import classes from "./LoginPage.module.css";

const LoginPage = () => {
  const authCtx = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const setEmailHandler = (em) => {
    setEmail(em);
  };
  const passwordHandler = (pw) => {
    setPassword(pw);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const body = {
      email,
      password,
    };

    axios
      .post("http://localhost:4000/login", body)
      .then(({ data }) => {
        if (data) {
          authCtx.setIsLoggedIn(true);
          authCtx.setUserId(data.user_id);
          authCtx.setFirstName(data.first_name);
          navigate("/dash");
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.response.data);
        setLoginError(err.response.data);
        setIsLoading(false);
      });

    // Set values to empty to clear inputs.
    setEmail("");
    setPassword("");
  };

  const navigateToRegister = () => {
    navigate("register");
  };

  return (
    <div className={classes.login}>
      <form className={classes.form} onSubmit={submitHandler}>
        <Input
          name="Username"
          id="username"
          type="text"
          handler={setEmailHandler}
          value={email}
        />
        <Input
          name="Password"
          id="password"
          type="password"
          handler={passwordHandler}
          value={password}
        />
        <div>
          <Button
            name="Register"
            color="white"
            type="button"
            onClick={navigateToRegister}
          />
          <Button
            name={
              isLoading ? <ImSpinner3 className={classes.spinner} /> : "Login"
            }
            color="blue"
            type="submit"
          />
        </div>
        {loginError && <p className={classes.error}>{loginError}</p>}
      </form>
    </div>
  );
};

export default LoginPage;

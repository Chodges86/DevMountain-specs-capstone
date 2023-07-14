import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

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

          Cookies.set("bth_uid", `${data.user_id}`, { expires: 1 / 24 });
          navigate("/dash");
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoginError("There was an error retrieving data");
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
    <div className={classes.container}>
      <div className={classes.welcome}>
        <h2>Welcome to By the Hour</h2>
        <p>
          Login or Register and start tracking the time spent on your
          freelancing projects. Just create a new project and then click start
          on the timer when you start working on your your freelancing project
          and then come back and click stop when you finish. By the Hour will
          keep track of the time you spend working on your projects and make by
          the hour billing a breeze!
        </p>
      </div>
      <div className={classes.login}>
        <form className={classes.form} onSubmit={submitHandler}>
          <Input
            name="Email"
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
    </div>
  );
};

export default LoginPage;

import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import AuthContext from "../store/authContext";
import Input from "../components/FormInput";
import Button from "../components/FormButton";

import classes from "./RegisterPage.module.css";

const Register = () => {
    const authCtx = useContext(AuthContext)
  const [password, setPassword] = useState("");
  const [re_enterPW, setRe_EnterPW] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const emailHandler = (em) => {
    setEmail(em);
  };
  const passwordHandler = (pw) => {
    setPassword(pw);
  };
  const rePasswordHandler = (rPw) => {
    setRe_EnterPW(rPw);
  };
  const firstNameHandler = (fname) => {
    setFirstName(fname);
  };
  const lastNameHandler = (lname) => {
    setLastName(lname);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const body = {
      email,
      password,
      firstName,
      lastName,
    };

    axios
      .post("http://localhost:4000/register", body)
      .then(({data}) => {
        authCtx.setIsLoggedIn(true)
        authCtx.setUserId(data.user_id)
        authCtx.setFirstName(data.first_name)
        navigate("/dash");
      });

  };

  return (
    <div className={classes.register}>
      <form className={classes.form} onSubmit={submitHandler}>
        <Input
          name="Email"
          id="email"
          type="text"
          handler={emailHandler}
          value={email}
        />
        <Input
          name="Password"
          id="password"
          type="password"
          handler={passwordHandler}
          value={password}
        />
        <Input
          name="Re-Enter PW"
          id="re-enter-password"
          type="password"
          handler={rePasswordHandler}
          value={re_enterPW}
        />
        <Input
          name="First Name"
          id="first-name"
          type="text"
          handler={firstNameHandler}
          value={firstName}
        />
        <Input
          name="Last Name"
          id="last-name"
          type="text"
          handler={lastNameHandler}
          value={lastName}
        />
        <div>
          <Button name="Register" color="blue" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Register;
